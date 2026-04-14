import React, { useMemo, useState } from "react";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  Filter,
  Home,
  LayoutList,
  Library,
  MessageSquare,
  PlayCircle,
  Search,
  Settings,
  Sparkles,
  User,
  Video,
  Plus,
  Send,
  Users,
  PenSquare,
  Presentation,
  Sheet,
  Upload,
  GraduationCap,
  Bell,
  BarChart3,
  ClipboardList,
  UserRound,
  Wand2,
  Bot,
  FolderPlus
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BLOOM_SRC = "/mnt/data/Bloom.png";

const palette = {
  bloom: "#F6C7D8",
  bloomSoft: "#FFF5F8",
  dew: "#BFE3F5",
  drift: "#A9D6F4",
  luna: "#F6E7A8",
  moss: "#C8D8B8",
  paper: "#FFFDF8",
  ink: "#243242",
  muted: "#6F7680",
  line: "#EEE4D8",
  card: "#FFFFFF",
  soft: "#FBF7EF",
};

const classes = [
  {
    id: "biol320",
    code: "BIOL 320",
    title: "Cellular Biology",
    professor: "Dr. Smith",
    room: "Lab 204",
    accent: palette.bloomSoft,
    schedule: [
      { day: "Mon", start: "9:20 AM", end: "10:30 AM", period: "2nd period" },
      { day: "Wed", start: "9:20 AM", end: "10:30 AM", period: "2nd period" },
      { day: "Fri", start: "9:20 AM", end: "10:30 AM", period: "2nd period" },
    ],
  },
  {
    id: "eng328",
    code: "ENG 328",
    title: "Writing & Rhetoric",
    professor: "Prof. Lewis",
    room: "Hall 12",
    accent: "#F6FBFF",
    schedule: [
      { day: "Tue", start: "11:00 AM", end: "12:10 PM", period: "4th period" },
      { day: "Thu", start: "11:00 AM", end: "12:10 PM", period: "4th period" },
    ],
  },
  {
    id: "math120",
    code: "MATH 120",
    title: "Applied Statistics",
    professor: "Prof. Ahmed",
    room: "Room 118",
    accent: "#FBF8EF",
    schedule: [
      { day: "Mon", start: "1:15 PM", end: "2:25 PM", period: "6th period" },
      { day: "Wed", start: "1:15 PM", end: "2:25 PM", period: "6th period" },
      { day: "Fri", start: "1:15 PM", end: "2:25 PM", period: "6th period" },
    ],
  },
];

const tasks = [
  {
    id: 1,
    title: "Reading 4.2",
    classId: "biol320",
    classCode: "BIOL 320",
    due: "Today · 8:00 PM",
    dueDay: "Wed",
    dueTime: "8:00 PM",
    type: "Reading",
    status: "Ready to begin",
    detail: "Read pages 41–58 and highlight 2 ideas you want to revisit.",
  },
  {
    id: 2,
    title: "Problem Set 3",
    classId: "math120",
    classCode: "MATH 120",
    due: "Tomorrow · 11:59 PM",
    dueDay: "Thu",
    dueTime: "11:59 PM",
    type: "Assignment",
    status: "In progress",
    detail: "Complete questions 1–8 and check your graph on question 6.",
  },
  {
    id: 3,
    title: "Discussion reply",
    classId: "eng328",
    classCode: "ENG 328",
    due: "Fri · 5:00 PM",
    dueDay: "Fri",
    dueTime: "5:00 PM",
    type: "Discussion",
    status: "Ready when you are",
    detail: "Respond to one peer using one quote from this week’s reading.",
  },
  {
    id: 4,
    title: "Quiz review",
    classId: "biol320",
    classCode: "BIOL 320",
    due: "Sat · 10:00 AM",
    dueDay: "Sat",
    dueTime: "10:00 AM",
    type: "Prep",
    status: "Good next step",
    detail: "Review cell signaling diagrams before the short quiz.",
  },
];

const courseworkByClass = {
  biol320: [
    {
      id: "cw1",
      title: "Cell signaling reading",
      due: "Today · 8:00 PM",
      kind: "Reading",
      points: 10,
      score: 10,
      weight: 10,
      topic: "Signal amplification",
      resources: ["Lecture 5 slides", "Reading 4.2 PDF", "Signal pathways video"],
      submissions: ["My notes doc"],
      classMessages: [
        { author: "Ava", target: "class", text: "Question 3 made more sense after slide 12." },
        { author: "Dr. Smith", target: "class", text: "Yes — slide 12 is the best place to start." },
      ],
      professorMessages: [
        { author: "You", target: "professor", text: "Can I use my diagram notes as part of this?" },
      ],
      group: null,
    },
    {
      id: "cw2",
      title: "Signal amplification worksheet",
      due: "Tomorrow · 11:59 PM",
      kind: "Assignment",
      points: 20,
      score: 18,
      weight: 20,
      topic: "Pathway diagrams",
      resources: ["Worksheet PDF", "Lecture 5 slides"],
      submissions: [],
      classMessages: [],
      professorMessages: [],
      group: {
        name: "Pathway Team A",
        members: ["You", "Alex", "Jordan"],
      },
    },
    {
      id: "cw3",
      title: "Short quiz review",
      due: "Sat · 10:00 AM",
      kind: "Prep",
      points: 5,
      score: 4,
      weight: 5,
      topic: "Receptor specificity",
      resources: ["Quiz review sheet", "Signal pathways video"],
      submissions: ["Review sheet upload"],
      classMessages: [],
      professorMessages: [],
      group: null,
    },
  ],
  eng328: [
    {
      id: "eng1",
      title: "Discussion response",
      due: "Fri · 5:00 PM",
      kind: "Discussion",
      points: 15,
      score: 14,
      weight: 15,
      topic: "Argument structure",
      resources: ["Prompt doc", "Example response"],
      submissions: [],
      classMessages: [{ author: "Mina", target: "class", text: "I’m thinking of using the second reading for my reply." }],
      professorMessages: [],
      group: null,
    },
  ],
  math120: [
    {
      id: "math1",
      title: "Problem set 3",
      due: "Tomorrow · 11:59 PM",
      kind: "Assignment",
      points: 20,
      score: 18,
      weight: 20,
      topic: "Linear models",
      resources: ["Problem set PDF", "Graphing walkthrough"],
      submissions: ["Sheet draft"],
      classMessages: [],
      professorMessages: [],
      group: null,
    },
  ],
};

const recommendedVideos = [
  "Cell signaling in 7 minutes",
  "Signal amplification visual walkthrough",
  "Receptor specificity made simple",
];

const focusTopics = [
  "Signal amplification",
  "Receptor specificity",
  "How pathways connect to outcomes",
];

const streamPosts = [
  "Lecture 5 slides were added this morning.",
  "Reminder: quiz opens Friday at 9:00 AM.",
  "Office hours moved to 3:30 PM this week.",
];

const officeHours = [
  { id: "oh1", professor: "Dr. Smith", classId: "biol320", day: "Tue", start: "3:30 PM", end: "5:00 PM", room: "Office 214", mode: "In person", slots: ["3:30 PM", "3:45 PM", "4:00 PM", "4:15 PM", "4:30 PM"], booked: ["4:00 PM"] },
  { id: "oh2", professor: "Dr. Smith", classId: "biol320", day: "Thu", start: "10:00 AM", end: "11:00 AM", room: "Zoom", mode: "Virtual", slots: ["10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM"], booked: ["10:15 AM"] },
  { id: "oh3", professor: "Prof. Lewis", classId: "eng328", day: "Wed", start: "1:00 PM", end: "2:00 PM", room: "Hall 12", mode: "In person", slots: ["1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM"], booked: [] },
  { id: "oh4", professor: "Prof. Ahmed", classId: "math120", day: "Fri", start: "2:30 PM", end: "3:30 PM", room: "Zoom", mode: "Virtual", slots: ["2:30 PM", "2:45 PM", "3:00 PM", "3:15 PM"], booked: [] },
];

const bookedOfficeHours = [
  { id: "booked1", classId: "biol320", professor: "Dr. Smith", day: "Thu", start: "10:15 AM", end: "10:30 AM", topic: "Signal amplification worksheet", status: "Booked" },
];

const educatorInsights = {
  biol320: {
    topTopics: ["Signal amplification", "Receptor specificity", "Reading pathway diagrams"],
    classCompletion: "81%",
    studentsNeedingSupport: 4,
    quickActions: [
      "Send clarification to class",
      "Recommend a short video to BIOL 320",
      "Review slide 12 at the start of class",
    ],
    students: [
      { name: "Nysa Thompson", status: "Building momentum", note: "Engages often, benefits from examples.", next: "Office hour booked" },
      { name: "Alex Rivera", status: "Could use a check-in", note: "Has not submitted worksheet yet.", next: "Send follow-up" },
      { name: "Jordan Kim", status: "On track", note: "Asks thoughtful discussion questions.", next: "No action needed" },
    ],
    aiResponse: "Overall, BIOL 320 is progressing steadily. The biggest place students could use support is signal amplification, especially when connecting diagrams to outcomes.",
    aiByTab: {
      overview: {
        title: "Class progress query",
        prompt: "How is BIOL 320 progressing this week?",
        response: "BIOL 320 is moving well overall. A short reteach on signal amplification would likely help before the next assignment.",
        actions: ["What should I revisit next class?", "Who may benefit from office hours?", "Draft a class update"],
      },
      coursework: {
        title: "Coursework support",
        prompt: "What kind of feedback would help most on the current submissions?",
        response: "A short, rubric-aligned note about reading pathway diagrams would help several students. You could also send one class-wide clarification instead of repeating yourself individually.",
        actions: ["Generate rubric feedback", "Draft class clarification", "Suggest one example to add"],
      },
      students: {
        title: "Student support query",
        prompt: "Which students may need a check-in this week?",
        response: "Alex Rivera may benefit from a short follow-up because the worksheet is still missing. Nysa is engaged and already booked an office hour, which is a positive sign.",
        actions: ["Draft check-in note", "Suggest office hours invite", "Summarize recent activity"],
      },
      grades: {
        title: "Grades query",
        prompt: "What do these grades suggest about class understanding?",
        response: "Grades suggest the class is generally following along, but there is a small cluster of confusion around pathway interpretation rather than memorization.",
        actions: ["Summarize grade trends", "Suggest reteach topic", "Draft encouragement note"],
      },
      officehours: {
        title: "Office hours query",
        prompt: "How should I use office hours most effectively this week?",
        response: "Use office hours for students who need help translating diagrams into written reasoning. A 15-minute focused walkthrough would likely be enough for most questions.",
        actions: ["Draft office-hours reminder", "Suggest booking priorities", "Create follow-up note"],
      },
    },
  },
  eng328: {
    topTopics: ["Argument structure", "Using evidence", "Peer response tone"],
    classCompletion: "88%",
    studentsNeedingSupport: 2,
    quickActions: ["Post example response", "Open extra discussion thread", "Extend reply deadline"],
    students: [
      { name: "Mina Patel", status: "On track", note: "Strong responses, helps peers.", next: "No action needed" },
      { name: "Chris Lee", status: "Could use a check-in", note: "Discussion reply missing.", next: "Message student" },
    ],
    aiResponse: "ENG 328 is progressing well overall. The clearest opportunity is helping a few students strengthen how they use evidence in discussion replies.",
    aiByTab: {
      overview: { title: "Class progress query", prompt: "How is ENG 328 progressing this week?", response: "ENG 328 is steady overall. A few students would benefit from one more example of how to weave evidence into a response.", actions: ["What should I model next?", "Who needs a reminder?", "Draft class note"] },
      coursework: { title: "Coursework support", prompt: "What kind of feedback would help most on these replies?", response: "Brief feedback on evidence use and response structure would likely have the biggest effect.", actions: ["Generate feedback", "Draft example response", "Suggest rubric note"] },
      students: { title: "Student support query", prompt: "Which students may need a check-in?", response: "Chris Lee may benefit from a short reminder before the discussion deadline.", actions: ["Draft reminder", "Summarize participation", "Offer office hours"] },
      grades: { title: "Grades query", prompt: "What do the grades suggest?", response: "Grades suggest that students understand the prompt but vary in how strongly they support their claims.", actions: ["Summarize patterns", "Suggest reteach focus", "Draft encouragement note"] },
      officehours: { title: "Office hours query", prompt: "How should I use office hours this week?", response: "A quick review of evidence integration and paragraph structure would likely be the best use of time.", actions: ["Draft office-hours note", "Suggest invite", "Create follow-up"] },
    },
  },
  math120: {
    topTopics: ["Linear models", "Graphing", "Checking residuals"],
    classCompletion: "76%",
    studentsNeedingSupport: 5,
    quickActions: ["Share graphing walkthrough", "Open group review slot", "Flag common mistake"],
    students: [
      { name: "Ava Chen", status: "Building momentum", note: "Better after watching the video.", next: "Encourage follow-through" },
      { name: "Leo Marsh", status: "Could use a check-in", note: "Problem set is late.", next: "Offer office hours" },
    ],
    aiResponse: "MATH 120 would likely benefit from one more graphing walkthrough before the next class. A small-group review could help students who have not yet submitted the problem set.",
    aiByTab: {
      overview: { title: "Class progress query", prompt: "How is MATH 120 progressing this week?", response: "MATH 120 would benefit from one more graphing walkthrough before the next class.", actions: ["What should I review next?", "Who needs a nudge?", "Draft class message"] },
      coursework: { title: "Coursework support", prompt: "What feedback would help most on these problem sets?", response: "Targeted notes on graph setup and residual checks would likely help several students at once.", actions: ["Generate feedback", "Suggest class clarification", "Draft worked example"] },
      students: { title: "Student support query", prompt: "Which students may need a check-in?", response: "Leo Marsh may benefit from a nudge before the deadline. Ava Chen appears to be improving after watching the recommended video.", actions: ["Draft reminder", "Suggest office hours", "Summarize activity"] },
      grades: { title: "Grades query", prompt: "What do the grades suggest?", response: "Grades suggest a split between students who understand the setup and those who still need support reading the graphs correctly.", actions: ["Summarize grade trends", "Suggest reteach topic", "Draft encouragement note"] },
      officehours: { title: "Office hours query", prompt: "How should I use office hours this week?", response: "A small-group graphing review may be more efficient than repeating the same explanation one student at a time.", actions: ["Draft office-hours invite", "Suggest booking priorities", "Create follow-up note"] },
    },
  },
};

const hours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

function parseTimeToMinutes(time) {
  const [clock, meridiem] = time.split(" ");
  let [hour, minute] = clock.split(":").map(Number);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

function formatLetterGrade(percent) {
  if (percent >= 93) return "A";
  if (percent >= 90) return "A-";
  if (percent >= 87) return "B+";
  if (percent >= 83) return "B";
  if (percent >= 80) return "B-";
  if (percent >= 77) return "C+";
  if (percent >= 73) return "C";
  if (percent >= 70) return "C-";
  return "Needs review";
}

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm" style={{ color: palette.muted }}>{subtitle}</p> : null}
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, onClick, right }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-[18px] px-3 py-2.5 text-sm transition"
      style={{ backgroundColor: active ? palette.bloom : "transparent", color: palette.ink }}
    >
      <span className="flex items-center gap-3">
        <Icon className="h-4 w-4" />
        {label}
      </span>
      {right}
    </button>
  );
}

function TaskCard({ task, onOpen }) {
  return (
    <Card className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-medium">{task.title}</p>
              <Badge className="rounded-full border-0 bg-[#FAF3E7] text-slate-700 hover:bg-[#FAF3E7]">{task.type}</Badge>
            </div>
            <p className="mt-1 text-sm" style={{ color: palette.muted }}>{task.classCode} · {task.due}</p>
            <p className="mt-3 text-sm leading-6" style={{ color: palette.muted }}>{task.detail}</p>
          </div>
          <Badge className="rounded-full border-0 bg-[#F8F6F2] text-slate-700 hover:bg-[#F8F6F2]">{task.status}</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }} onClick={onOpen}>Open</Button>
          <Button size="sm" variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Ask Study Buddy</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function EventBlock({ event, dayIndex }) {
  const startMinutes = parseTimeToMinutes(event.start);
  const endMinutes = event.end ? parseTimeToMinutes(event.end) : startMinutes + 30;
  const top = ((startMinutes - 8 * 60) / 60) * 88;
  const height = Math.max(((endMinutes - startMinutes) / 60) * 88, 36);

  return (
    <div
      className="absolute left-1 right-1 rounded-[14px] border px-2 py-2 text-xs shadow-sm"
      style={{ top, height, backgroundColor: event.color, borderColor: palette.line }}
    >
      <p className="font-semibold">{event.title}</p>
      <p style={{ color: palette.muted }}>{event.start}{event.end ? `–${event.end}` : ""}</p>
      <p style={{ color: palette.muted }}>{event.subtitle}</p>
    </div>
  );
}

function AssignmentDetailCard({ item, onClose }) {
  const [messageTarget, setMessageTarget] = useState("professor");
  const percent = Math.round((item.score / item.points) * 100);
  const letter = formatLetterGrade(percent);
  const visibleMessages = messageTarget === "class" ? item.classMessages : item.professorMessages;

  return (
    <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
      <CardContent className="p-5 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold">{item.title}</p>
              <Badge className="rounded-full border-0 bg-[#FAF3E7] text-slate-700 hover:bg-[#FAF3E7]">{item.kind}</Badge>
            </div>
            <p className="mt-1 text-sm" style={{ color: palette.muted }}>Due {item.due} · Topic: {item.topic}</p>
          </div>
          <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={onClose}>Back</Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-4">
            <div>
              <SectionTitle title="Assigned materials" subtitle="Coursework and resources live together here so students do not have to hunt for files." />
              <div className="mt-3 flex flex-wrap gap-2">
                {item.resources.map((resource) => (
                  <Badge key={resource} className="rounded-full border-0 px-3 py-1.5 text-slate-700 hover:bg-transparent" style={{ backgroundColor: palette.luna }}>
                    {resource}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle title="Submission" subtitle="Students can upload work or create a new file directly in this assignment." />
              <div className="mt-3 flex flex-wrap gap-2">
                <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>
                  <Upload className="mr-2 h-4 w-4" /> Add submission
                </Button>
                <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>
                  <PenSquare className="mr-2 h-4 w-4" /> Create Doc
                </Button>
                <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>
                  <Presentation className="mr-2 h-4 w-4" /> Create Slides
                </Button>
                <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>
                  <Sheet className="mr-2 h-4 w-4" /> Create Sheet
                </Button>
              </div>
              <div className="mt-3 space-y-2">
                {item.submissions.length > 0 ? item.submissions.map((submission) => (
                  <div key={submission} className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                    <p className="text-sm">{submission}</p>
                  </div>
                )) : (
                  <div className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                    <p className="text-sm" style={{ color: palette.muted }}>No submission added yet.</p>
                  </div>
                )}
              </div>
            </div>

            {item.group ? (
              <div>
                <SectionTitle title="Group workspace" subtitle="A simple way to keep group assignments together without creating a separate app inside the app." />
                <div className="mt-3 rounded-[22px] px-4 py-4" style={{ backgroundColor: palette.moss }}>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4" />
                    <p className="font-medium">{item.group.name}</p>
                  </div>
                  <p className="mt-2 text-sm" style={{ color: palette.ink }}>Members: {item.group.members.join(", ")}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button variant="outline" className="rounded-full bg-white" style={{ borderColor: palette.line }}>Open group thread</Button>
                    <Button variant="outline" className="rounded-full bg-white" style={{ borderColor: palette.line }}>Shared doc</Button>
                    <Button variant="outline" className="rounded-full bg-white" style={{ borderColor: palette.line }}>Task split</Button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            <div>
              <SectionTitle title="Messages" subtitle="Students can send a note to the professor or post to the class discussion for this coursework item." />
              <div className="mt-3 flex gap-2">
                <Button
                  variant="outline"
                  className="rounded-full"
                  style={{ borderColor: palette.line, backgroundColor: messageTarget === "professor" ? palette.bloomSoft : palette.card }}
                  onClick={() => setMessageTarget("professor")}
                >
                  Message professor
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full"
                  style={{ borderColor: palette.line, backgroundColor: messageTarget === "class" ? palette.bloomSoft : palette.card }}
                  onClick={() => setMessageTarget("class")}
                >
                  Message class
                </Button>
              </div>
              <div className="mt-3 space-y-2">
                {visibleMessages.length > 0 ? visibleMessages.map((message, index) => (
                  <div key={`${message.text}-${index}`} className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                    <p className="text-xs font-medium" style={{ color: palette.muted }}>{message.author}</p>
                    <p className="mt-1 text-sm">{message.text}</p>
                  </div>
                )) : (
                  <div className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                    <p className="text-sm" style={{ color: palette.muted }}>No messages yet in this thread.</p>
                  </div>
                )}
              </div>
              <div className="mt-3 rounded-[20px] border px-4 py-3" style={{ borderColor: palette.line }}>
                <p className="text-sm" style={{ color: palette.muted }}>Type a response here…</p>
              </div>
              <Button className="mt-3 rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>
                <Send className="mr-2 h-4 w-4" /> Send message
              </Button>
            </div>

            <div>
              <SectionTitle title="Grade details" subtitle="Students can see score, percentage, letter, and weight for each coursework item." />
              <div className="mt-3 space-y-2">
                <div className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                  <p className="text-sm font-medium">Score</p>
                  <p className="mt-1 text-sm" style={{ color: palette.muted }}>{item.score}/{item.points} points</p>
                </div>
                <div className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                  <p className="text-sm font-medium">Result</p>
                  <p className="mt-1 text-sm" style={{ color: palette.muted }}>{letter} · {percent}%</p>
                </div>
                <div className="rounded-[18px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                  <p className="text-sm font-medium">Weight</p>
                  <p className="mt-1 text-sm" style={{ color: palette.muted }}>{item.weight}% of course grade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function StudentDashboard() {
  const [page, setPage] = useState("home");
  const [classMenuOpen, setClassMenuOpen] = useState(true);
  const [selectedClassId, setSelectedClassId] = useState("biol320");
  const [classTab, setClassTab] = useState("stream");
  const [todoFilter, setTodoFilter] = useState("all");
  const [todoSort, setTodoSort] = useState("due");
  const [selectedCourseworkId, setSelectedCourseworkId] = useState(null);
  const [buddyInput, setBuddyInput] = useState("Can you explain signal amplification simply and suggest what I should look at next?");
  const [homeGoals, setHomeGoals] = useState([
    "Revisit signal amplification for 10 minutes",
    "Look over the lecture 5 diagram once more",
    "Try one short practice problem after the reading",
  ]);
  const [homeVideos, setHomeVideos] = useState(recommendedVideos);
  const [homeTopics, setHomeTopics] = useState(focusTopics);
  const [bookedSlotLabel, setBookedSlotLabel] = useState("Thu · 10:15 AM");

  const selectedClass = classes.find((c) => c.id === selectedClassId) || classes[0];
  const classOfficeHours = officeHours.filter((slot) => slot.classId === selectedClassId);
  const selectedCoursework = (courseworkByClass[selectedClassId] || []).find((item) => item.id === selectedCourseworkId) || null;

  const filteredTasks = useMemo(() => {
    let result = [...tasks];
    if (todoFilter !== "all") {
      if (todoFilter === "today") result = result.filter((t) => t.due.toLowerCase().includes("today"));
      if (["biol320", "eng328", "math120"].includes(todoFilter)) result = result.filter((t) => t.classId === todoFilter);
    }
    if (todoSort === "class") result.sort((a, b) => a.classCode.localeCompare(b.classCode));
    if (todoSort === "type") result.sort((a, b) => a.type.localeCompare(b.type));
    return result;
  }, [todoFilter, todoSort]);

  const applyBuddySuggestions = () => {
    setHomeGoals([
      "Watch the visual walkthrough before starting the worksheet",
      "Write one sentence on how one receptor can lead to many effects",
      "Check in with the quiz review after the reading",
    ]);
    setHomeVideos([
      "Signal amplification visual walkthrough",
      "Cell signaling recap with diagrams",
      "Receptor pathways in plain language",
    ]);
    setHomeTopics([
      "Signal amplification",
      "Reading pathways from left to right",
      "Connecting diagrams to outcomes",
    ]);
    setPage("home");
  };

  const scheduleEvents = classes.flatMap((course) =>
    course.schedule.map((slot) => ({
      kind: "class",
      day: slot.day,
      start: slot.start,
      end: slot.end,
      title: course.code,
      subtitle: `${course.room} · ${slot.period}`,
      color: course.accent,
    }))
  );

  const taskEvents = tasks.map((task) => ({
    kind: "task",
    day: task.dueDay,
    start: task.dueTime,
    end: null,
    title: task.title,
    subtitle: `${task.classCode} · Due`,
    color: palette.soft,
  }));

  const Sidebar = () => (
    <Card className="h-fit rounded-[32px] border shadow-sm" style={{ backgroundColor: "#FFF8F3", borderColor: palette.line }}>
      <CardContent className="p-4">
        <div className="mb-5 flex items-center gap-3 px-2 pt-2">
          <img src={BLOOM_SRC} alt="Bloom" className="h-12 w-12 object-contain" />
          <div>
            <p className="font-semibold">Axioma Learn</p>
            <p className="text-xs" style={{ color: palette.muted }}>Student space</p>
          </div>
        </div>

        <div className="space-y-1">
          <SidebarItem icon={Home} label="Home" active={page === "home"} onClick={() => setPage("home")} />
          <SidebarItem icon={Calendar} label="Calendar" active={page === "calendar"} onClick={() => setPage("calendar")} />
          <SidebarItem icon={LayoutList} label="To Do" active={page === "todo"} onClick={() => setPage("todo")} />
          <SidebarItem
            icon={BookOpen}
            label="Current Classes"
            active={page === "class" || classMenuOpen}
            onClick={() => {
              setClassMenuOpen((v) => !v);
              setPage("class");
            }}
            right={<ChevronDown className={`h-4 w-4 transition ${classMenuOpen ? "rotate-180" : "rotate-0"}`} />}
          />
          {classMenuOpen ? (
            <div className="ml-3 space-y-1 pt-1">
              {classes.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedClassId(item.id);
                    setSelectedCourseworkId(null);
                    setPage("class");
                  }}
                  className="flex w-full items-center justify-between rounded-[16px] px-3 py-2 text-left text-sm"
                  style={{ backgroundColor: selectedClassId === item.id ? item.accent : "transparent" }}
                >
                  <span>{item.code}</span>
                  {selectedClassId === item.id ? <ChevronRight className="h-4 w-4" /> : null}
                </button>
              ))}
            </div>
          ) : null}
          <SidebarItem icon={Library} label="Previous Classes" active={page === "previous"} onClick={() => setPage("previous")} />
          <SidebarItem icon={Settings} label="Settings" active={page === "settings"} onClick={() => setPage("settings")} />
        </div>

        <div className="mt-6 rounded-[24px] border px-3 py-3 shadow-sm" style={{ backgroundColor: palette.bloomSoft, borderColor: palette.line }}>
          <div className="flex items-center gap-3">
            <img src={BLOOM_SRC} alt="Bloom buddy" className="h-14 w-14 object-contain" />
            <div>
              <p className="text-sm font-semibold">Bloom theme</p>
              <p className="text-xs" style={{ color: palette.muted }}>Soft, encouraging, and focused.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const HomePage = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Welcome back, Nysa</h1>
          <p className="mt-1 text-sm" style={{ color: palette.muted }}>A gentle overview of what’s ready for your attention today.</p>
        </div>
        <div className="flex items-center gap-3 rounded-[28px] border px-4 py-3" style={{ backgroundColor: palette.bloomSoft, borderColor: palette.line }}>
          <img src={BLOOM_SRC} alt="Bloom" className="h-14 w-14 object-contain" />
          <div>
            <p className="text-sm font-medium">Study Buddy note</p>
            <p className="text-sm" style={{ color: palette.muted }}>You’re building momentum — let’s keep today simple and clear.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
          <CardContent className="p-5">
            <SectionTitle title="Coming up soon" subtitle="Each task includes class, due time, and a clear next step." />
            <div className="mt-4 space-y-3">
              {tasks.slice(0, 2).map((task) => (
                <TaskCard key={task.id} task={task} onOpen={() => {
                  setSelectedClassId(task.classId);
                  setPage("class");
                  setClassTab("coursework");
                }} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.bloomSoft }}>
          <CardContent className="p-5">
            <SectionTitle title="Learning goals" subtitle="Suggested by your Study Buddy based on your recent class activity." />
            <div className="mt-4 space-y-3">
              {homeGoals.map((goal) => (
                <div key={goal} className="flex items-start gap-3 rounded-[20px] bg-white px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" />
                  <p className="text-sm">{goal}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
          <CardContent className="p-5">
            <SectionTitle title="Recommended videos" subtitle="Short refreshers chosen to support your current coursework." />
            <div className="mt-4 space-y-3">
              {homeVideos.map((video) => (
                <div key={video} className="flex items-center justify-between rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-4 w-4" />
                    <p className="text-sm">{video}</p>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Watch</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
          <CardContent className="p-5">
            <SectionTitle title="Helpful focus topics" subtitle="A positive guide to where a little extra attention could help things click." />
            <div className="mt-4 flex flex-wrap gap-2">
              {homeTopics.map((topic) => (
                <Badge key={topic} className="rounded-full border-0 px-3 py-1.5 text-slate-700 hover:bg-transparent" style={{ backgroundColor: palette.luna }}>
                  {topic}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const CalendarPage = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const officeHourEvents = classOfficeHours.map((slot) => ({
      kind: "officehour",
      day: slot.day,
      start: slot.start,
      end: slot.end,
      title: "Office hours",
      subtitle: `${slot.mode} · ${slot.room}`,
      color: palette.dew,
    }));
    const eventsByDay = days.reduce((acc, day) => {
      acc[day] = [...scheduleEvents, ...taskEvents, ...officeHourEvents].filter((event) => event.day === day);
      return acc;
    }, {});

    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <SectionTitle title="Calendar" subtitle="CST · classes, due items, and office hours appear in one place so your week stays readable." />
          <div className="rounded-[24px] border px-4 py-3" style={{ backgroundColor: palette.bloomSoft, borderColor: palette.line }}>
            <p className="text-sm font-medium">Future sync</p>
            <p className="mt-1 text-xs" style={{ color: palette.muted }}>A later version can push these class meetings, deadlines, and bookings into Google Calendar automatically.</p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.15fr_.85fr]">
          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-4 overflow-x-auto">
              <div className="min-w-[980px]">
                <div className="grid grid-cols-[90px_repeat(6,minmax(140px,1fr))] border-b" style={{ borderColor: palette.line }}>
                  <div className="px-3 py-3 text-sm font-medium" style={{ color: palette.muted }}>CST</div>
                  {days.map((day) => (
                    <div key={day} className="px-3 py-3 text-center text-sm font-medium">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-[90px_repeat(6,minmax(140px,1fr))]">
                  <div className="relative">
                    {hours.map((hour) => (
                      <div key={hour} className="h-[88px] border-b px-3 pt-2 text-xs" style={{ borderColor: palette.line, color: palette.muted }}>
                        {hour}
                      </div>
                    ))}
                  </div>
                  {days.map((day) => (
                    <div key={day} className="relative border-l" style={{ borderColor: palette.line, minHeight: `${hours.length * 88}px` }}>
                      {hours.map((hour) => (
                        <div key={`${day}-${hour}`} className="h-[88px] border-b" style={{ borderColor: palette.line }} />
                      ))}
                      {(eventsByDay[day] || []).map((event, index) => (
                        <EventBlock key={`${day}-${event.title}-${event.start}-${index}`} event={event} dayIndex={index} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5">
              <SectionTitle title="Book office hours" subtitle="Choose a professor slot and it will appear for both student and educator views." />
              <div className="mt-4 space-y-4">
                {classOfficeHours.map((slot) => (
                  <div key={slot.id} className="rounded-[22px] px-4 py-4" style={{ backgroundColor: palette.soft }}>
                    <div>
                      <p className="font-medium">{slot.professor}</p>
                      <p className="mt-1 text-sm" style={{ color: palette.muted }}>{slot.day} · {slot.start}–{slot.end} · {slot.mode} · {slot.room}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {slot.slots.map((time) => {
                        const isBooked = slot.booked.includes(time);
                        return (
                          <button
                            key={time}
                            disabled={isBooked}
                            onClick={() => setBookedSlotLabel(`${slot.day} · ${time}`)}
                            className="rounded-full px-3 py-1.5 text-sm"
                            style={{
                              backgroundColor: isBooked ? "#F3F0EA" : palette.card,
                              border: `1px solid ${palette.line}`,
                              color: isBooked ? palette.muted : palette.ink,
                              opacity: isBooked ? 0.7 : 1,
                            }}
                          >
                            {time}{isBooked ? " · booked" : ""}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[22px] px-4 py-4" style={{ backgroundColor: palette.bloomSoft }}>
                <p className="text-sm font-medium">Selected slot</p>
                <p className="mt-1 text-sm" style={{ color: palette.muted }}>{bookedSlotLabel}</p>
                <Button className="mt-3 rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>
                  Book office hours
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const TodoPage = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle title="To do" subtitle="Organized by your preference, with details that help you decide what to open next." />
        <div className="flex flex-wrap gap-2">
          {[
            ["all", "All"],
            ["today", "Today"],
            ["biol320", "BIOL 320"],
            ["eng328", "ENG 328"],
            ["math120", "MATH 120"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setTodoFilter(value)}
              className="rounded-full px-3 py-1.5 text-sm"
              style={{ backgroundColor: todoFilter === value ? palette.bloom : palette.card, border: `1px solid ${palette.line}` }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge className="rounded-full border-0 px-3 py-1.5 text-slate-700 hover:bg-transparent" style={{ backgroundColor: "#F7F2EA" }}>
          <Filter className="mr-1 h-3.5 w-3.5" /> Filtered by: {todoFilter}
        </Badge>
        {[
          ["due", "Sort: due date"],
          ["class", "Sort: class"],
          ["type", "Sort: type"],
        ].map(([value, label]) => (
          <button
            key={value}
            onClick={() => setTodoSort(value)}
            className="rounded-full border px-3 py-1.5 text-sm"
            style={{ borderColor: palette.line, backgroundColor: todoSort === value ? palette.bloomSoft : palette.card }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onOpen={() => {
              setSelectedClassId(task.classId);
              setPage("class");
              setClassTab("coursework");
            }}
          />
        ))}
      </div>
    </div>
  );

  const ClassPage = () => {
    const classCoursework = courseworkByClass[selectedClassId] || [];
    const overallWeightedPercent = classCoursework.length
      ? Math.round(classCoursework.reduce((sum, item) => sum + ((item.score / item.points) * item.weight), 0) / classCoursework.reduce((sum, item) => sum + item.weight, 0) * 100)
      : 0;

    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{selectedClass.code}</h1>
            <p className="mt-1 text-sm" style={{ color: palette.muted }}>{selectedClass.title} · {selectedClass.professor} · {selectedClass.room}</p>
          </div>
          <div className="flex items-center gap-3 rounded-[24px] border px-4 py-3" style={{ backgroundColor: selectedClass.accent, borderColor: palette.line }}>
            <img src={BLOOM_SRC} alt="Bloom" className="h-12 w-12 object-contain" />
            <div>
              <p className="text-sm font-medium">Study Buddy is ready</p>
              <p className="text-xs" style={{ color: palette.muted }}>Grounded in your class files and coursework.</p>
            </div>
          </div>
        </div>

        <Tabs value={classTab} onValueChange={setClassTab}>
          <TabsList className="rounded-[18px] p-1" style={{ backgroundColor: "#F7F2EA" }}>
            <TabsTrigger value="stream" className="rounded-[14px]">Stream</TabsTrigger>
            <TabsTrigger value="coursework" className="rounded-[14px]">Coursework</TabsTrigger>
            <TabsTrigger value="grades" className="rounded-[14px]">Grades</TabsTrigger>
            <TabsTrigger value="officehours" className="rounded-[14px]">Office hours</TabsTrigger>
            <TabsTrigger value="ai" className="rounded-[14px]">Study Buddy</TabsTrigger>
          </TabsList>
        </Tabs>

        {classTab === "stream" ? (
          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5 space-y-3">
              {streamPosts.map((item, idx) => (
                <div key={item} className="rounded-[20px] px-4 py-4" style={{ backgroundColor: idx === 0 ? palette.bloomSoft : palette.soft }}>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ) : null}

        {classTab === "coursework" ? (
          selectedCoursework ? (
            <AssignmentDetailCard item={selectedCoursework} onClose={() => setSelectedCourseworkId(null)} />
          ) : (
            <div className="space-y-4">
              {classCoursework.map((item) => (
                <Card key={item.id} className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{item.title}</p>
                          <Badge className="rounded-full border-0 bg-[#FBF7EF] text-slate-700 hover:bg-[#FBF7EF]">{item.kind}</Badge>
                        </div>
                        <p className="mt-1 text-sm" style={{ color: palette.muted }}>{selectedClass.code} · Due {item.due}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Ask Study Buddy</Button>
                        <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }} onClick={() => setSelectedCourseworkId(item.id)}>Open submission</Button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium" style={{ color: palette.muted }}>Assigned documents</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.resources.map((resource) => (
                          <Badge key={resource} className="rounded-full border-0 px-3 py-1.5 text-slate-700 hover:bg-transparent" style={{ backgroundColor: palette.luna }}>{resource}</Badge>
                        ))}
                      </div>
                    </div>

                    {item.group ? (
                      <div className="rounded-[20px] px-4 py-4" style={{ backgroundColor: palette.moss }}>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <p className="font-medium">{item.group.name}</p>
                        </div>
                        <p className="mt-1 text-sm" style={{ color: palette.ink }}>Members: {item.group.members.join(", ")}</p>
                        <p className="mt-2 text-sm" style={{ color: palette.muted }}>A clean group experience could include a shared thread, shared file area, and visible task split.</p>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        ) : null}

        {classTab === "grades" ? (
          <div className="space-y-4">
            {classCoursework.map((item) => {
              const percent = Math.round((item.score / item.points) * 100);
              const letter = formatLetterGrade(percent);
              return (
                <Card key={item.id} className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
                  <CardContent className="p-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-sm" style={{ color: palette.muted }}>
                        {item.score}/{item.points} points · {letter} · {percent}% · {item.weight}% of grade
                      </p>
                    </div>
                    <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => {
                      setSelectedCourseworkId(item.id);
                      setClassTab("coursework");
                    }}>
                      View coursework
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            <Card className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.bloomSoft }}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">Current class grade</p>
                  <p className="mt-1 text-sm" style={{ color: palette.muted }}>Weighted across assigned coursework</p>
                </div>
                <p className="text-lg font-semibold">{formatLetterGrade(overallWeightedPercent)}</p>
              </CardContent>
            </Card>
          </div>
        ) : null}

        {classTab === "officehours" ? (
          <div className="grid gap-4 lg:grid-cols-[1fr_.9fr]">
            <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
              <CardContent className="p-5">
                <SectionTitle title="Choose a time" subtitle="Pick a slot that works for you and it can appear on both calendars." />
                <div className="mt-4 space-y-4">
                  {classOfficeHours.map((slot) => (
                    <div key={slot.id} className="rounded-[22px] px-4 py-4" style={{ backgroundColor: palette.soft }}>
                      <p className="font-medium">{slot.professor}</p>
                      <p className="mt-1 text-sm" style={{ color: palette.muted }}>{slot.day} · {slot.start}–{slot.end} · {slot.mode} · {slot.room}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {slot.slots.map((time) => {
                          const isBooked = slot.booked.includes(time);
                          return (
                            <button
                              key={time}
                              disabled={isBooked}
                              onClick={() => setBookedSlotLabel(`${slot.day} · ${time}`)}
                              className="rounded-full px-3 py-1.5 text-sm"
                              style={{
                                backgroundColor: isBooked ? "#F3F0EA" : palette.card,
                                border: `1px solid ${palette.line}`,
                                color: isBooked ? palette.muted : palette.ink,
                                opacity: isBooked ? 0.7 : 1,
                              }}
                            >
                              {time}{isBooked ? " · booked" : ""}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
              <CardContent className="p-5">
                <SectionTitle title="Booking summary" subtitle="A simple place to confirm your selected office-hours slot." />
                <div className="mt-4 rounded-[22px] px-4 py-4" style={{ backgroundColor: palette.bloomSoft }}>
                  <p className="text-sm font-medium">Selected slot</p>
                  <p className="mt-1 text-sm" style={{ color: palette.muted }}>{bookedSlotLabel}</p>
                  <Button className="mt-3 rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>
                    Book office hours
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}

        {classTab === "ai" ? (
          <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
            <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <img src={BLOOM_SRC} alt="Bloom" className="h-14 w-14 object-contain" />
                  <div>
                    <p className="font-semibold">Study Buddy</p>
                    <p className="text-sm" style={{ color: palette.muted }}>Ask about this class and I’ll stay grounded in your materials.</p>
                  </div>
                </div>
                <div className="mt-5 rounded-[22px] p-4" style={{ backgroundColor: palette.soft }}>
                  <p className="text-sm leading-7">{buddyInput}</p>
                </div>
                <div className="mt-4 rounded-[24px] p-4" style={{ backgroundColor: palette.dew }}>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles className="h-4 w-4" /> Buddy response
                  </div>
                  <p className="mt-2 text-sm leading-7">Signal amplification matters because one receptor can start a much bigger chain of events inside the cell. A good next step is to rewatch the pathway diagram once, then try one short worksheet question.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.card }} onClick={applyBuddySuggestions}>Add ideas to Home</Button>
                    <Button size="sm" variant="outline" className="rounded-full" style={{ borderColor: palette.card, backgroundColor: "rgba(255,255,255,0.35)" }}>Suggest a video</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
              <CardContent className="p-5">
                <SectionTitle title="Try one of these" subtitle="Supportive prompts to get started quickly." />
                <div className="mt-4 space-y-3">
                  {[
                    "Summarize today’s lecture in simple language",
                    "Turn this reading into 3 learning goals",
                    "Recommend a short video before I start the worksheet",
                    "Explain this diagram step by step",
                  ].map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => setBuddyInput(prompt)}
                      className="w-full rounded-[20px] border px-4 py-3 text-left text-sm"
                      style={{ borderColor: palette.line, backgroundColor: palette.soft }}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </div>
    );
  };

  const PreviousClassesPage = () => (
    <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
      <CardContent className="p-5">
        <SectionTitle title="Previous classes" subtitle="A simple archive for later — not the main focus right now." />
      </CardContent>
    </Card>
  );

  const SettingsPage = () => (
    <div className="space-y-6">
      <SectionTitle title="Settings" subtitle="Theme choices can live here later. Bloom is the default for now." />
      <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
        <CardContent className="p-5">
          <div className="flex items-center gap-4 rounded-[24px] p-4" style={{ backgroundColor: palette.bloomSoft }}>
            <img src={BLOOM_SRC} alt="Bloom" className="h-20 w-20 object-contain" />
            <div>
              <p className="font-semibold">Bloom is active</p>
              <p className="mt-1 text-sm" style={{ color: palette.muted }}>A soft, supportive theme for a positive learning environment.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.paper, color: palette.ink }}>
      <div className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur" style={{ borderColor: palette.line }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-semibold tracking-wide">Axioma Learn</p>
            <p className="text-xs" style={{ color: palette.muted }}>Clickable student prototype</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border px-3 py-2" style={{ borderColor: palette.line, backgroundColor: "#FFF8F3" }}>
            <Search className="h-4 w-4" />
            <span className="text-sm" style={{ color: palette.muted }}>Search classes, tasks, and materials</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar />
        <div>
          {page === "home" ? <HomePage /> : null}
          {page === "calendar" ? <CalendarPage /> : null}
          {page === "todo" ? <TodoPage /> : null}
          {page === "class" ? <ClassPage /> : null}
          {page === "previous" ? <PreviousClassesPage /> : null}
          {page === "settings" ? <SettingsPage /> : null}
        </div>
      </div>
    </div>
  );
}

function TeacherDashboard() {
  const [teacherAIInput, setTeacherAIInput] = useState("How is BIOL 320 progressing this week?");
  const [teacherPage, setTeacherPage] = useState("home");
  const [teacherClassMenuOpen, setTeacherClassMenuOpen] = useState(true);
  const [teacherClassId, setTeacherClassId] = useState("biol320");
  const [teacherTab, setTeacherTab] = useState("overview");
  const selectedClass = classes.find((c) => c.id === teacherClassId) || classes[0];
  const classCoursework = courseworkByClass[teacherClassId] || [];
  const insight = educatorInsights[teacherClassId] || educatorInsights.biol320;
  const classOfficeHours = officeHours.filter((slot) => slot.classId === teacherClassId);

  const teacherEvents = [
    ...selectedClass.schedule.map((slot) => ({ day: slot.day, start: slot.start, end: slot.end, title: selectedClass.code, subtitle: `${selectedClass.room} · Class`, color: selectedClass.accent })),
    ...classCoursework.map((item) => ({ day: item.due.includes("Today") ? "Wed" : item.due.includes("Tomorrow") ? "Thu" : item.due.includes("Fri") ? "Fri" : "Sat", start: item.due.includes("8:00 PM") ? "8:00 PM" : item.due.includes("11:59 PM") ? "8:00 PM" : item.due.includes("5:00 PM") ? "5:00 PM" : "10:00 AM", end: null, title: item.title, subtitle: `${selectedClass.code} · Due`, color: palette.soft })),
    ...classOfficeHours.map((slot) => ({ day: slot.day, start: slot.start, end: slot.end, title: "Office hours", subtitle: `${slot.mode} · ${slot.room}`, color: palette.dew })),
  ];

  const TeacherSidebar = () => (
    <Card className="h-fit rounded-[32px] border shadow-sm" style={{ backgroundColor: "#FFF8F3", borderColor: palette.line }}>
      <CardContent className="p-4">
        <div className="mb-5 flex items-center gap-3 px-2 pt-2">
          <img src={BLOOM_SRC} alt="Bloom" className="h-12 w-12 object-contain" />
          <div>
            <p className="font-semibold">Axioma Learn</p>
            <p className="text-xs" style={{ color: palette.muted }}>Educator space</p>
          </div>
        </div>
        <div className="space-y-1">
          <SidebarItem icon={Home} label="Home" active={teacherPage === "home"} onClick={() => setTeacherPage("home")} />
          <SidebarItem icon={Calendar} label="Calendar" active={teacherPage === "calendar"} onClick={() => setTeacherPage("calendar")} />
          <SidebarItem icon={ClipboardList} label="Tasks" active={teacherPage === "tasks"} onClick={() => setTeacherPage("tasks")} />
          <SidebarItem icon={FolderPlus} label="Create classroom" active={teacherPage === "create"} onClick={() => setTeacherPage("create")} />
          <SidebarItem icon={GraduationCap} label="Current Classes" active={teacherPage === "class" || teacherClassMenuOpen} onClick={() => { setTeacherClassMenuOpen((v) => !v); setTeacherPage("class"); }} right={<ChevronDown className={`h-4 w-4 transition ${teacherClassMenuOpen ? "rotate-180" : "rotate-0"}`} />} />
          {teacherClassMenuOpen ? (
            <div className="ml-3 space-y-1 pt-1">
              {classes.map((item) => (
                <button key={item.id} onClick={() => { setTeacherClassId(item.id); setTeacherPage("class"); }} className="flex w-full items-center justify-between rounded-[16px] px-3 py-2 text-left text-sm" style={{ backgroundColor: teacherClassId === item.id ? item.accent : "transparent" }}>
                  <span>{item.code}</span>
                  {teacherClassId === item.id ? <ChevronRight className="h-4 w-4" /> : null}
                </button>
              ))}
            </div>
          ) : null}
          <SidebarItem icon={Settings} label="Settings" active={teacherPage === "settings"} onClick={() => setTeacherPage("settings")} />
        </div>
      </CardContent>
    </Card>
  );

  const TeacherHome = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Welcome back, Professor</h1>
          <p className="mt-1 text-sm" style={{ color: palette.muted }}>A quick view of what your classes need before you walk in.</p>
        </div>
        <div className="flex items-center gap-3 rounded-[28px] border px-4 py-3" style={{ backgroundColor: palette.bloomSoft, borderColor: palette.line }}>
          <Bell className="h-5 w-5" />
          <div>
            <p className="text-sm font-medium">Today’s teaching note</p>
            <p className="text-sm" style={{ color: palette.muted }}>BIOL 320 may benefit from a quick walkthrough of slide 12.</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-4">
        <Card className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}><CardContent className="p-4"><p className="text-sm" style={{ color: palette.muted }}>Active classes</p><p className="mt-1 text-2xl font-semibold">3</p></CardContent></Card>
        <Card className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}><CardContent className="p-4"><p className="text-sm" style={{ color: palette.muted }}>Submissions to review</p><p className="mt-1 text-2xl font-semibold">12</p></CardContent></Card>
        <Card className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}><CardContent className="p-4"><p className="text-sm" style={{ color: palette.muted }}>Students to check in with</p><p className="mt-1 text-2xl font-semibold">{insight.studentsNeedingSupport}</p></CardContent></Card>
        <Card className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}><CardContent className="p-4"><p className="text-sm" style={{ color: palette.muted }}>Upcoming office hours</p><p className="mt-1 text-2xl font-semibold">2</p></CardContent></Card>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line }}>
          <CardContent className="p-5">
            <SectionTitle title={`Class insight · ${selectedClass.code}`} subtitle="The most useful patterns across recent class activity." />
            <div className="mt-4 space-y-3">{insight.topTopics.map((topic) => <div key={topic} className="rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.soft }}><p className="font-medium text-sm">{topic}</p></div>)}</div>
            <div className="mt-4 flex flex-wrap gap-2">{insight.quickActions.map((action) => <Button key={action} variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>{action}</Button>)}</div>
          </CardContent>
        </Card>
        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line }}>
          <CardContent className="p-5">
            <SectionTitle title={`AI class query · ${selectedClass.code}`} subtitle="Ask about class progress, what to reteach, or which students could use a nudge." />
            <div className="mt-4 rounded-[20px] px-4 py-4" style={{ backgroundColor: palette.soft }}>
              <p className="text-sm">How is {selectedClass.code} progressing this week?</p>
            </div>
            <div className="mt-4 rounded-[24px] p-4" style={{ backgroundColor: palette.dew }}>
              <div className="flex items-center gap-2 text-sm font-medium"><Bot className="h-4 w-4" /> AI response</div>
              <p className="mt-2 text-sm leading-7">{insight.aiResponse || `Overall, ${selectedClass.code} is progressing steadily, with a few students who may benefit from more direct examples and a short clarification before the next deadline.`}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {(insight.aiQueryExamples || []).map((prompt) => <Button key={prompt} variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>{prompt}</Button>)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const TeacherCalendar = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const eventsByDay = days.reduce((acc, day) => { acc[day] = teacherEvents.filter((event) => event.day === day); return acc; }, {});
    return (
      <div className="space-y-6">
        <SectionTitle title="Teaching calendar" subtitle="CST · classes, due items, and office hours all live on one weekly schedule." />
        <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
          <CardContent className="p-4 overflow-x-auto">
            <div className="min-w-[980px]">
              <div className="grid grid-cols-[90px_repeat(6,minmax(140px,1fr))] border-b" style={{ borderColor: palette.line }}><div className="px-3 py-3 text-sm font-medium" style={{ color: palette.muted }}>CST</div>{days.map((day) => <div key={day} className="px-3 py-3 text-center text-sm font-medium">{day}</div>)}</div>
              <div className="grid grid-cols-[90px_repeat(6,minmax(140px,1fr))]">
                <div>{hours.map((hour) => <div key={hour} className="h-[88px] border-b px-3 pt-2 text-xs" style={{ borderColor: palette.line, color: palette.muted }}>{hour}</div>)}</div>
                {days.map((day) => <div key={day} className="relative border-l" style={{ borderColor: palette.line, minHeight: `${hours.length * 88}px` }}>{hours.map((hour) => <div key={`${day}-${hour}`} className="h-[88px] border-b" style={{ borderColor: palette.line }} />)}{(eventsByDay[day] || []).map((event, index) => <EventBlock key={`${day}-${event.title}-${event.start}-${index}`} event={event} dayIndex={index} />)}</div>)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const TeacherTasks = () => (
    <div className="space-y-6">
      <SectionTitle title="Review queue" subtitle="Assignments and activity that could use your attention right now." />
      <div className="space-y-4">{classCoursework.map((item) => <Card key={item.id} className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}><CardContent className="p-4 flex items-start justify-between gap-3"><div><div className="flex items-center gap-2"><p className="font-medium">{item.title}</p><Badge className="rounded-full border-0 bg-[#FBF7EF] text-slate-700 hover:bg-[#FBF7EF]">{item.kind}</Badge></div><p className="mt-1 text-sm" style={{ color: palette.muted }}>{selectedClass.code} · Due {item.due}</p></div><div className="flex gap-2"><Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Open submissions</Button><Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>Post note</Button></div></CardContent></Card>)}</div>
    </div>
  );

  const CreateClassroomPage = () => {
    const [showSyllabusPopup, setShowSyllabusPopup] = useState(true);
    const [showStructurePopup, setShowStructurePopup] = useState(true);

    return (
      <div className="space-y-6">
        <SectionTitle title="Create classroom" subtitle="Start with an agentic setup from your syllabus or build the structure yourself." />
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5">
              <div className="flex items-center gap-3"><Wand2 className="h-5 w-5" /><p className="text-lg font-semibold">Auto-build from syllabus</p></div>
              <p className="mt-3 text-sm leading-7" style={{ color: palette.muted }}>Upload a syllabus and let Axioma suggest weekly modules, topic groupings, due dates, discussion prompts, and a starter class structure.</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.soft }}><p className="text-sm">Upload syllabus</p></div>
                <div className="rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.bloomSoft }}><p className="text-sm">Axioma can organize by week, by topic, or by a hybrid structure — and you can still edit everything manually after.</p></div>
                <div className="flex flex-wrap gap-2">
                  <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}><Upload className="mr-2 h-4 w-4" /> Upload syllabus</Button>
                  <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => setShowSyllabusPopup((v) => !v)}>Preview popup</Button>
                  <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => setShowStructurePopup((v) => !v)}>Preview structure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5">
              <div className="flex items-center gap-3"><FolderPlus className="h-5 w-5" /><p className="text-lg font-semibold">Build manually</p></div>
              <p className="mt-3 text-sm leading-7" style={{ color: palette.muted }}>Create your course structure yourself with custom modules, tasks, resources, and due dates.</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.soft }}><p className="text-sm">Create modules manually</p></div>
                <div className="rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.soft }}><p className="text-sm">Set topics, deadlines, and learning materials yourself</p></div>
                <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}><Plus className="mr-2 h-4 w-4" /> Start manual build</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {showSyllabusPopup ? (
          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5">
              <SectionTitle title="Pretend syllabus upload popup" subtitle="This is how the agentic setup could feel in-product." />
              <div className="mt-4 rounded-[24px] p-5" style={{ backgroundColor: palette.soft }}>
                <p className="text-sm font-medium">BIOL 320 Syllabus.pdf</p>
                <p className="mt-2 text-sm" style={{ color: palette.muted }}>Axioma noticed weekly readings, Friday quizzes, one midterm, one final project, and recurring lab references.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="rounded-full border-0 bg-white text-slate-700 hover:bg-white">Weekly structure detected</Badge>
                  <Badge className="rounded-full border-0 bg-white text-slate-700 hover:bg-white">Topic clusters detected</Badge>
                  <Badge className="rounded-full border-0 bg-white text-slate-700 hover:bg-white">9 due dates found</Badge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>Use suggested structure</Button>
                  <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Review before applying</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {showStructurePopup ? (
          <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5">
              <SectionTitle title="Pretend structure preview" subtitle="Axioma can show the professor how the classroom would be organized before anything is published." />
              <div className="mt-4 grid gap-4 xl:grid-cols-3">
                <div className="rounded-[24px] p-4" style={{ backgroundColor: palette.bloomSoft }}>
                  <p className="font-medium">By week</p>
                  <p className="mt-2 text-sm" style={{ color: palette.muted }}>Week 1: intro to cells · Week 2: receptors · Week 3: signaling pathways</p>
                </div>
                <div className="rounded-[24px] p-4" style={{ backgroundColor: palette.soft }}>
                  <p className="font-medium">By topic</p>
                  <p className="mt-2 text-sm" style={{ color: palette.muted }}>Module 1: cell structure · Module 2: receptor systems · Module 3: amplification and signaling</p>
                </div>
                <div className="rounded-[24px] p-4" style={{ backgroundColor: palette.dew }}>
                  <p className="font-medium">Hybrid</p>
                  <p className="mt-2 text-sm" style={{ color: palette.muted }}>Weekly roadmap plus topic folders, due dates, and starter discussion prompts</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>Apply hybrid structure</Button>
                <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Edit manually first</Button>
              </div>
            </CardContent>
          </Card>
        ) : null}
      </div>
    );
  };

  const TeacherClass = () => {
    const currentAI = insight.aiByTab?.[teacherTab] || {
      title: `AI query · ${selectedClass.code}`,
      prompt: `How is ${selectedClass.code} progressing right now?`,
      response: insight.aiResponse || `Overall, ${selectedClass.code} is progressing steadily.`,
      actions: ["Summarize progress", "Suggest next step", "Draft class note"],
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{selectedClass.code}</h1>
            <p className="mt-1 text-sm" style={{ color: palette.muted }}>{selectedClass.title} · {selectedClass.professor} · {selectedClass.room}</p>
          </div>
          <div className="flex items-center gap-3 rounded-[24px] border px-4 py-3" style={{ backgroundColor: selectedClass.accent, borderColor: palette.line }}>
            <BarChart3 className="h-5 w-5" />
            <div>
              <p className="text-sm font-medium">Efficiency snapshot</p>
              <p className="text-xs" style={{ color: palette.muted }}>{insight.classCompletion} completion · {insight.studentsNeedingSupport} students may need a nudge</p>
            </div>
          </div>
        </div>

        <Tabs value={teacherTab} onValueChange={setTeacherTab}>
          <TabsList className="rounded-[18px] p-1" style={{ backgroundColor: "#F7F2EA" }}>
            <TabsTrigger value="overview" className="rounded-[14px]">Overview</TabsTrigger>
            <TabsTrigger value="coursework" className="rounded-[14px]">Coursework</TabsTrigger>
            <TabsTrigger value="students" className="rounded-[14px]">Students</TabsTrigger>
            <TabsTrigger value="grades" className="rounded-[14px]">Grades</TabsTrigger>
            <TabsTrigger value="aiassistant" className="rounded-[14px]">AI Assistant</TabsTrigger>
            <TabsTrigger value="officehours" className="rounded-[14px]">Office hours</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-4">
            {teacherTab === "overview" ? (
              <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line }}>
                <CardContent className="p-5">
                  <SectionTitle title={`Top themes · ${selectedClass.code}`} subtitle="Patterns from student work and class activity." />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {insight.topTopics.map((topic) => (
                      <Badge key={topic} className="rounded-full border-0 px-3 py-1.5 text-slate-700 hover:bg-transparent" style={{ backgroundColor: palette.luna }}>{topic}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : null}

            {teacherTab === "coursework" ? (
              <div className="space-y-4">
                {classCoursework.map((item) => (
                  <Card key={item.id} className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{item.title}</p>
                            <Badge className="rounded-full border-0 bg-[#FBF7EF] text-slate-700 hover:bg-[#FBF7EF]">{item.kind}</Badge>
                          </div>
                          <p className="mt-1 text-sm" style={{ color: palette.muted }}>Due {item.due} · {item.resources.length} attached resources</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Review submissions</Button>
                          <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Message class</Button>
                          <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}>Edit task</Button>
                        </div>
                      </div>
                      <div className="grid gap-3 lg:grid-cols-[1fr_.9fr]">
                        <div className="rounded-[20px] px-4 py-4" style={{ backgroundColor: palette.soft }}>
                          <p className="text-sm font-medium">AI grading help</p>
                          <p className="mt-1 text-sm" style={{ color: palette.muted }}>Generate rubric-aligned feedback, suggest a class-wide clarification, or draft a quick note for similar submissions.</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => setTeacherAIInput("Generate rubric-aligned feedback for this coursework item")}>Generate feedback</Button>
                            <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => setTeacherAIInput("Suggest a rubric note for this coursework item")}>Suggest rubric note</Button>
                            <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => setTeacherAIInput("Draft a class-wide clarification based on these submissions")}>Draft class message</Button>
                          </div>
                        </div>
                        <div className="rounded-[20px] px-4 py-4" style={{ backgroundColor: palette.bloomSoft }}>
                          <p className="text-sm font-medium">AI summary</p>
                          <p className="mt-1 text-sm" style={{ color: palette.muted }}>Students are doing well overall, but a few submissions suggest confusion around {item.topic.toLowerCase()}.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : null}

            {teacherTab === "students" ? (
              <div className="space-y-4">
                {insight.students.map((student) => (
                  <Card key={student.name} className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}>
                    <CardContent className="p-4 flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2"><UserRound className="h-4 w-4" /><p className="font-medium">{student.name}</p></div>
                        <p className="mt-1 text-sm" style={{ color: palette.muted }}>{student.note}</p>
                      </div>
                      <div className="text-right">
                        <Badge className="rounded-full border-0 bg-[#FBF7EF] text-slate-700 hover:bg-[#FBF7EF]">{student.status}</Badge>
                        <p className="mt-2 text-sm" style={{ color: palette.muted }}>{student.next}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : null}

            {teacherTab === "grades" ? (
              <div className="space-y-4">
                {classCoursework.map((item) => {
                  const percent = Math.round((item.score / item.points) * 100);
                  return (
                    <Card key={item.id} className="rounded-[26px] border shadow-sm" style={{ borderColor: palette.line }}>
                      <CardContent className="p-4 flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="mt-1 text-sm" style={{ color: palette.muted }}>{item.score}/{item.points} · {percent}% · {item.weight}% weight</p>
                        </div>
                        <Button variant="outline" className="rounded-full" style={{ borderColor: palette.line }}>Open grade detail</Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : null}

            {teacherTab === "officehours" ? (
              <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
                <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line }}>
                  <CardContent className="p-5">
                    <SectionTitle title="Available slots" subtitle="Students can book from the student calendar and the bookings appear here automatically." />
                    <div className="mt-4 space-y-3">
                      {classOfficeHours.map((slot) => (
                        <div key={slot.id} className="rounded-[22px] px-4 py-4" style={{ backgroundColor: palette.dew }}>
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="font-medium">{slot.day} · {slot.start}–{slot.end}</p>
                              <p className="mt-1 text-sm" style={{ color: palette.muted }}>{slot.mode} · {slot.room}</p>
                            </div>
                            <Button variant="outline" className="rounded-full bg-white" style={{ borderColor: palette.line }}>Edit slot</Button>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {slot.slots.map((time) => (
                              <Badge key={time} className="rounded-full border-0 bg-white text-slate-700 hover:bg-white">{time}{slot.booked.includes(time) ? " · booked" : ""}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line }}>
                  <CardContent className="p-5">
                    <SectionTitle title="Booked meetings" subtitle="A seamless student → professor handoff for office-hour scheduling." />
                    <div className="mt-4 space-y-3">
                      {bookedOfficeHours.map((booking) => (
                        <div key={booking.id} className="rounded-[20px] px-4 py-3" style={{ backgroundColor: palette.soft }}>
                          <p className="font-medium text-sm">{booking.day} · {booking.start}–{booking.end}</p>
                          <p className="mt-1 text-sm" style={{ color: palette.muted }}>{booking.topic}</p>
                        </div>
                      ))}
                      <Button className="mt-2 rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}><Plus className="mr-2 h-4 w-4" /> Add office-hours block</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </div>

          <Card className="rounded-[30px] border shadow-sm h-fit sticky top-28" style={{ borderColor: palette.line, backgroundColor: palette.card }}>
            <CardContent className="p-5">
              {teacherTab === "aiassistant" ? (
                <>
                  <SectionTitle title={`AI Assistant · ${selectedClass.code}`} subtitle="Ask about this class and get help with teaching decisions, grading support, or class progress." />
                  <div className="mt-4 rounded-[20px] px-4 py-4" style={{ backgroundColor: palette.soft }}>
                    <p className="text-sm">{teacherAIInput}</p>
                  </div>
                  <div className="mt-4 rounded-[24px] p-4" style={{ backgroundColor: palette.dew }}>
                    <div className="flex items-center gap-2 text-sm font-medium"><Bot className="h-4 w-4" /> AI response</div>
                    <p className="mt-2 text-sm leading-7">{currentAI.response}</p>
                  </div>
                  <div className="mt-4 rounded-[20px] border px-4 py-3" style={{ borderColor: palette.line }}>
                    <p className="text-sm" style={{ color: palette.muted }}>Type a question about this class here…</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {currentAI.actions.map((action) => (
                      <Button key={action} variant="outline" className="rounded-full" style={{ borderColor: palette.line }} onClick={() => setTeacherAIInput(action)}>{action}</Button>
                    ))}
                    <Button className="rounded-full border-0 text-slate-900" style={{ backgroundColor: palette.bloom }}><Send className="mr-2 h-4 w-4" /> Ask AI Assistant</Button>
                  </div>
                </>
              ) : (
                <>
                  <SectionTitle title={`${currentAI.title} · ${selectedClass.code}`} subtitle="This panel updates with the active class tab so the AI stays context-aware." />
                  <div className="mt-4 rounded-[20px] px-4 py-4" style={{ backgroundColor: palette.soft }}>
                    <p className="text-sm">{currentAI.prompt}</p>
                  </div>
                  <div className="mt-4 rounded-[24px] p-4" style={{ backgroundColor: palette.dew }}>
                    <div className="flex items-center gap-2 text-sm font-medium"><Bot className="h-4 w-4" /> AI response</div>
                    <p className="mt-2 text-sm leading-7">{currentAI.response}</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    {currentAI.actions.map((action) => (
                      <Button key={action} variant="outline" className="w-full justify-start rounded-[18px]" style={{ borderColor: palette.line }} onClick={() => setTeacherAIInput(action)}>{action}</Button>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const TeacherSettings = () => <Card className="rounded-[30px] border shadow-sm" style={{ borderColor: palette.line }}><CardContent className="p-5"><SectionTitle title="Settings" subtitle="A place for later preferences like calendar sync, notification rules, and buddy theme." /></CardContent></Card>;

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.paper, color: palette.ink }}>
      <div className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur" style={{ borderColor: palette.line }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div><p className="text-sm font-semibold tracking-wide">Axioma Learn</p><p className="text-xs" style={{ color: palette.muted }}>Clickable educator prototype</p></div>
          <div className="flex items-center gap-2 rounded-full border px-3 py-2" style={{ borderColor: palette.line, backgroundColor: "#FFF8F3" }}><Search className="h-4 w-4" /><span className="text-sm" style={{ color: palette.muted }}>Search classes, students, tasks, and bookings</span></div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <TeacherSidebar />
        <div>
          {teacherPage === "home" ? <TeacherHome /> : null}
          {teacherPage === "calendar" ? <TeacherCalendar /> : null}
          {teacherPage === "tasks" ? <TeacherTasks /> : null}
          {teacherPage === "create" ? <CreateClassroomPage /> : null}
          {teacherPage === "class" ? <TeacherClass /> : null}
          {teacherPage === "settings" ? <TeacherSettings /> : null}
        </div>
      </div>
    </div>
  );
}

export default function AxiomaLearningFrontendConcept() {
  const [view, setView] = useState("student");

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur" style={{ borderColor: palette.line }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div>
            <p className="text-sm font-semibold tracking-wide">Axioma Learn</p>
            <p className="text-xs" style={{ color: palette.muted }}>Bloom theme · student-first prototype</p>
          </div>
          <Tabs value={view} onValueChange={setView}>
            <TabsList className="rounded-2xl p-1" style={{ backgroundColor: "#F6F1E8" }}>
              <TabsTrigger value="student" className="rounded-xl">Student view</TabsTrigger>
              <TabsTrigger value="teacher" className="rounded-xl">Educator later</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      {view === "student" ? <StudentDashboard /> : <TeacherDashboard />}
    </div>
  );
}
