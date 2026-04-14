import type {
  AppHealth,
  EducatorCourseworkDetail,
  EducatorClassesDirectory,
  EducatorReviewQueueSummary,
  EducatorSubmissionsSummary,
  StudentCourseworkDetail,
  StudentClassesDirectory,
  StudentHomeSummary,
  StudentSubmissionHandoffResult,
  StudentSubmissionsSummary,
} from "@axioma/domain";

const DEFAULT_API_URL = "http://localhost:4000";

export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_URL ??
    DEFAULT_API_URL
  );
}

export async function getApiHealth(): Promise<{
  data: AppHealth | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/health`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `API returned ${response.status}`,
      };
    }

    const data = (await response.json()) as AppHealth;

    return {
      data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error.message : "Unknown API connectivity error",
    };
  }
}

export async function getStudentHome(): Promise<{
  data: StudentHomeSummary | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/student/home`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Student home returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as StudentHomeSummary,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown student home connectivity error",
    };
  }
}

export async function getEducatorReviewQueue(): Promise<{
  data: EducatorReviewQueueSummary | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/educator/review-queue`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Educator review queue returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as EducatorReviewQueueSummary,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown educator review queue connectivity error",
    };
  }
}

export async function getStudentClasses(): Promise<{
  data: StudentClassesDirectory | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/student/classes`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Student classes returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as StudentClassesDirectory,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown student classes connectivity error",
    };
  }
}

export async function getEducatorClasses(): Promise<{
  data: EducatorClassesDirectory | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/educator/classes`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Educator classes returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as EducatorClassesDirectory,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown educator classes connectivity error",
    };
  }
}

export async function getStudentSubmissions(): Promise<{
  data: StudentSubmissionsSummary | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/student/submissions`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Student submissions returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as StudentSubmissionsSummary,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown student submissions connectivity error",
    };
  }
}

export async function getEducatorSubmissions(): Promise<{
  data: EducatorSubmissionsSummary | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/educator/submissions`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Educator submissions returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as EducatorSubmissionsSummary,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown educator submissions connectivity error",
    };
  }
}

export async function getStudentCourseworkDetail(
  courseworkId: string,
): Promise<{
  data: StudentCourseworkDetail | null;
  error: string | null;
}> {
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/api/student/coursework/${courseworkId}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return {
        data: null,
        error: `Student coursework detail returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as StudentCourseworkDetail,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown student coursework detail connectivity error",
    };
  }
}

export async function getEducatorCourseworkDetail(
  courseworkId: string,
): Promise<{
  data: EducatorCourseworkDetail | null;
  error: string | null;
}> {
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/api/educator/coursework/${courseworkId}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return {
        data: null,
        error: `Educator coursework detail returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as EducatorCourseworkDetail,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown educator coursework detail connectivity error",
    };
  }
}

export async function submitStudentCourseworkHandoff(input: {
  courseworkId: string;
  status: "DRAFT" | "SUBMITTED";
  fileName: string;
  mimeType: string;
  fileSizeBytes: number;
  storageKey: string;
}): Promise<{
  data: StudentSubmissionHandoffResult | null;
  error: string | null;
}> {
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/api/student/coursework/${input.courseworkId}/submission`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
        body: JSON.stringify(input),
      },
    );

    if (!response.ok) {
      return {
        data: null,
        error: `Student submission handoff returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as StudentSubmissionHandoffResult,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown student submission handoff connectivity error",
    };
  }
}

export async function createStorageUploadUrl(input: {
  storageKey: string;
  fileName: string;
  mimeType: string;
}): Promise<{
  data:
    | {
        ok: true;
        storageKey: string;
        uploadUrl: string;
        expiresInSeconds: number;
      }
    | null;
  error: string | null;
}> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/storage/presign-upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Storage presign returned ${response.status}`,
      };
    }

    return {
      data: (await response.json()) as {
        ok: true;
        storageKey: string;
        uploadUrl: string;
        expiresInSeconds: number;
      },
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error
          ? error.message
          : "Unknown storage presign connectivity error",
    };
  }
}
