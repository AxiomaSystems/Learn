"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createStorageUploadUrl,
  submitStudentCourseworkHandoff,
} from "../../../../lib/api";

function sanitizeFileName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-");
}

export async function submitStudentCourseworkFileHandoff(formData: FormData) {
  const courseworkId = String(formData.get("courseworkId") ?? "").trim();
  const status = String(formData.get("status") ?? "SUBMITTED").trim().toUpperCase();
  const file = formData.get("file");

  if (!courseworkId) {
    throw new Error("Coursework id is required.");
  }

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("A file is required for the handoff.");
  }

  const normalizedFileName = sanitizeFileName(file.name);
  const storageKey = `submissions/${courseworkId}/${Date.now()}-${normalizedFileName}`;
  const presignedUpload = await createStorageUploadUrl({
    storageKey,
    fileName: file.name,
    mimeType: file.type || "application/octet-stream",
  });

  if (!presignedUpload.data) {
    throw new Error(
      presignedUpload.error ??
        "Storage upload URL could not be created for this submission.",
    );
  }

  const uploadResponse = await fetch(presignedUpload.data.uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type || "application/octet-stream",
    },
    body: file,
  });

  if (!uploadResponse.ok) {
    throw new Error(`S3 upload failed with ${uploadResponse.status}.`);
  }

  const result = await submitStudentCourseworkHandoff({
    courseworkId,
    status: status === "DRAFT" ? "DRAFT" : "SUBMITTED",
    fileName: file.name,
    mimeType: file.type || "application/octet-stream",
    fileSizeBytes: file.size,
    storageKey: presignedUpload.data.storageKey,
  });

  if (!result.data) {
    throw new Error(result.error ?? "Student submission handoff failed.");
  }

  revalidatePath("/student");
  revalidatePath("/student/submissions");
  revalidatePath(`/student/coursework/${courseworkId}`);
  revalidatePath("/educator/submissions");
  revalidatePath(`/educator/coursework/${courseworkId}`);

  redirect(`/student/coursework/${courseworkId}`);
}
