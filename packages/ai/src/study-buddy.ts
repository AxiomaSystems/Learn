export type StudyBuddyContext = {
  institutionId: string;
  classId?: string;
  courseworkId?: string;
  role: "student" | "educator";
};

export const STUDY_BUDDY_SYSTEM_INTENT =
  "Provide grounded academic assistance with strict role-aware context boundaries.";

