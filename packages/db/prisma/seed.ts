import {
  AppRole,
  BookingStatus,
  CourseworkKind,
  PrismaClient,
  SubmissionStatus,
} from "../generated/client";

process.env.DATABASE_URL ??=
  "postgresql://postgres:postgres@localhost:5432/axioma_learn";

const prisma = new PrismaClient();

async function main() {
  const institution = await prisma.institution.upsert({
    where: { slug: "north-river-university" },
    update: {},
    create: {
      name: "North River University",
      slug: "north-river-university",
      timezone: "America/Chicago",
    },
  });

  const educator = await prisma.user.upsert({
    where: { email: "avery.thompson@northriver.edu" },
    update: {},
    create: {
      institutionId: institution.id,
      email: "avery.thompson@northriver.edu",
      fullName: "Avery Thompson",
      role: AppRole.EDUCATOR,
    },
  });

  const student = await prisma.user.upsert({
    where: { email: "nysa.thompson@northriver.edu" },
    update: {},
    create: {
      institutionId: institution.id,
      email: "nysa.thompson@northriver.edu",
      fullName: "Nysa Thompson",
      role: AppRole.STUDENT,
    },
  });

  const biol = await prisma.class.upsert({
    where: { id: "11111111-1111-1111-1111-111111111111" },
    update: {},
    create: {
      id: "11111111-1111-1111-1111-111111111111",
      institutionId: institution.id,
      educatorId: educator.id,
      code: "BIOL 320",
      title: "Cellular Biology",
    },
  });

  const math = await prisma.class.upsert({
    where: { id: "22222222-2222-2222-2222-222222222222" },
    update: {},
    create: {
      id: "22222222-2222-2222-2222-222222222222",
      institutionId: institution.id,
      educatorId: educator.id,
      code: "MATH 120",
      title: "Applied Statistics",
    },
  });

  const coursework = [
    {
      id: "33333333-3333-3333-3333-333333333331",
      classId: biol.id,
      title: "Reading 4.2",
      kind: CourseworkKind.READING,
      description: "Read pages 41-58 and highlight 2 ideas to revisit.",
      topic: "Signal amplification",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 8),
    },
    {
      id: "33333333-3333-3333-3333-333333333332",
      classId: math.id,
      title: "Problem Set 3",
      kind: CourseworkKind.ASSIGNMENT,
      description: "Complete questions 1-8 and check your graph on question 6.",
      topic: "Linear models",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28),
    },
  ];

  for (const item of coursework) {
    await prisma.coursework.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    });
  }

  await prisma.submission.upsert({
    where: { id: "44444444-4444-4444-4444-444444444441" },
    update: {
      status: SubmissionStatus.RETURNED,
      storageKey: "submissions/biol-320/reading-4-2/nysa-thompson-v1.pdf",
      fileName: "reading-4-2-response.pdf",
      mimeType: "application/pdf",
      fileSizeBytes: 248320,
      fileScanStatus: "CLEAN",
      scannedAt: new Date(Date.now() - 1000 * 60 * 60 * 20),
      scanNotes: "Manual moderation marked this file as clean.",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 30),
      gradeScore: 94,
      feedbackText:
        "Strong grasp of signal amplification. Tighten the connection between receptor behavior and the downstream pathway in your final explanation.",
      gradedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    },
    create: {
      id: "44444444-4444-4444-4444-444444444441",
      courseworkId: "33333333-3333-3333-3333-333333333331",
      studentId: student.id,
      status: SubmissionStatus.RETURNED,
      storageKey: "submissions/biol-320/reading-4-2/nysa-thompson-v1.pdf",
      fileName: "reading-4-2-response.pdf",
      mimeType: "application/pdf",
      fileSizeBytes: 248320,
      fileScanStatus: "CLEAN",
      scannedAt: new Date(Date.now() - 1000 * 60 * 60 * 20),
      scanNotes: "Manual moderation marked this file as clean.",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 30),
      gradeScore: 94,
      feedbackText:
        "Strong grasp of signal amplification. Tighten the connection between receptor behavior and the downstream pathway in your final explanation.",
      gradedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
    },
  });

  await prisma.submission.upsert({
    where: { id: "44444444-4444-4444-4444-444444444442" },
    update: {
      status: SubmissionStatus.SUBMITTED,
      storageKey: "submissions/math-120/problem-set-3/nysa-thompson-v1.xlsx",
      fileName: "problem-set-3-workbook.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      fileSizeBytes: 184210,
      fileScanStatus: "PENDING_SCAN",
      scannedAt: null,
      scanNotes: "Waiting for manual moderation.",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
      gradeScore: null,
      feedbackText: null,
      gradedAt: null,
    },
    create: {
      id: "44444444-4444-4444-4444-444444444442",
      courseworkId: "33333333-3333-3333-3333-333333333332",
      studentId: student.id,
      status: SubmissionStatus.SUBMITTED,
      storageKey: "submissions/math-120/problem-set-3/nysa-thompson-v1.xlsx",
      fileName: "problem-set-3-workbook.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      fileSizeBytes: 184210,
      fileScanStatus: "PENDING_SCAN",
      scannedAt: null,
      scanNotes: "Waiting for manual moderation.",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  });

  await prisma.officeHourSlot.upsert({
    where: { id: "55555555-5555-5555-5555-555555555551" },
    update: {},
    create: {
      id: "55555555-5555-5555-5555-555555555551",
      classId: biol.id,
      educatorId: educator.id,
      startsAt: new Date(Date.now() + 1000 * 60 * 60 * 48),
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 49),
      location: "Zoom",
      mode: "virtual",
    },
  });

  await prisma.officeHourBooking.upsert({
    where: { id: "66666666-6666-6666-6666-666666666661" },
    update: {},
    create: {
      id: "66666666-6666-6666-6666-666666666661",
      officeHourSlotId: "55555555-5555-5555-5555-555555555551",
      studentId: student.id,
      topic: "Signal amplification worksheet",
      status: BookingStatus.BOOKED,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
