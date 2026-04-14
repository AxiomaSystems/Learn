"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getApiBaseUrl } from "../../../lib/api";

export async function updateFileModeration(formData: FormData) {
  const submissionId = String(formData.get("submissionId") ?? "").trim();
  const scanStatus = String(formData.get("scanStatus") ?? "").trim().toUpperCase();
  const scanNotes = String(formData.get("scanNotes") ?? "").trim();

  if (!submissionId) {
    throw new Error("Submission id is required.");
  }

  const response = await fetch(
    `${getApiBaseUrl()}/api/admin/file-moderation/${submissionId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        scanStatus,
        scanNotes: scanNotes.length > 0 ? scanNotes : null,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `File moderation update failed with ${response.status}: ${errorText}`,
    );
  }

  revalidatePath("/admin/file-moderation");
  revalidatePath("/educator/coursework");
  revalidatePath("/educator/submissions");
  revalidatePath("/student/submissions");

  redirect("/admin/file-moderation");
}
