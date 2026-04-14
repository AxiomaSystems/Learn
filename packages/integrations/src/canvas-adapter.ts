export interface CanvasCourseImport {
  externalCourseId: string;
  name: string;
}

export interface LmsAdapter {
  provider: "canvas" | "blackboard" | "moodle";
  importCourses(): Promise<CanvasCourseImport[]>;
}

