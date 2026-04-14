"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getApiBaseUrl } from "../../../lib/api";

export async function submitEducatorReview(formData: FormData) {
  const submissionId = String(formData.get("submissionId") ?? "").trim();
  const status = String(formData.get("status") ?? "SUBMITTED").trim().toUpperCase();
  const gradeScoreValue = String(formData.get("gradeScore") ?? "").trim();
  const feedbackText = String(formData.get("feedbackText") ?? "").trim();

  if (!submissionId) {
    throw new Error("Submission id is required.");
  }

  const response = await fetch(
    `${getApiBaseUrl()}/api/educator/submissions/${submissionId}/review`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify({
        status,
        gradeScore: gradeScoreValue ? Number(gradeScoreValue) : null,
        feedbackText: feedbackText.length > 0 ? feedbackText : null,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Educator review update failed with ${response.status}: ${errorText}`,
    );
  }

  revalidatePath("/educator/submissions");
  revalidatePath("/educator/review-queue");
  revalidatePath("/student");
  revalidatePath("/student/submissions");

  redirect("/educator/submissions");
}
