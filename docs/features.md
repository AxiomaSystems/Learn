# Features

## Overview

The prototype points to a final product with two major surfaces:

- Student workspace
- Educator workspace

Both should run on the same domain model and share the same underlying course data.

## Student features

### 1. Home dashboard

Purpose:
Give the student an immediate sense of what deserves attention now.

Final-version capabilities:

- Upcoming tasks with due date, class, type, and suggested next action
- AI-generated learning goals based on current coursework and progress
- Recommended videos or reinforcement resources
- Focus topics that highlight where additional attention would help most
- Lightweight motivational guidance without overwhelming the student

### 2. Unified calendar

Purpose:
Combine academic time commitments into one readable weekly view.

Final-version capabilities:

- Class schedule blocks
- Assignment and quiz deadlines
- Office-hours availability and bookings
- Optional sync to external calendars
- Personal reminders and notifications

### 3. To-do workspace

Purpose:
Turn academic workload into an execution-oriented queue.

Final-version capabilities:

- Filtering by date and class
- Sorting by due date, class, type, urgency, or effort
- Smart prioritization based on deadlines and student progress
- Inline task actions such as open, ask AI, mark in progress, or submit

### 4. Class hub

Purpose:
Give each class a canonical home instead of scattering information.

Final-version capabilities:

- Stream or announcements
- Coursework list
- Grades
- Office hours
- AI help scoped to the class
- Resources and discussion context

### 5. Coursework detail

Purpose:
Make each assignment a self-contained workspace.

Final-version capabilities:

- Assignment instructions
- Attached materials and reference resources
- Submission area
- Create new doc/slides/sheet from within the coursework flow
- Class thread and instructor messaging
- Group work area when applicable
- Grade breakdown and rubric feedback

### 6. Study Buddy

Purpose:
Provide contextual student assistance inside the learning flow.

Final-version capabilities:

- Explain concepts in simpler language
- Suggest next study actions
- Recommend relevant videos or materials
- Generate learning goals
- Help interpret diagrams, readings, and instructions
- Push accepted suggestions back to Home or task planning

Guardrails:

- Must stay grounded in course materials where possible
- Must distinguish explanation from certainty
- Must avoid fabricating course policy or grading details

### 7. Office hours booking

Purpose:
Make help-seeking easy and visible.

Final-version capabilities:

- Browse available instructor slots
- Book directly from class or calendar view
- Add agenda/topic for meeting
- Reflect booking on both student and educator calendars
- Send reminders and follow-up notes

## Educator features

### 1. Educator home

Purpose:
Surface the most important teaching signals for the day.

Final-version capabilities:

- Active classes summary
- Submission review count
- Students needing support
- Upcoming office hours
- Class insight cards and quick suggested actions
- AI teaching notes based on recent activity

### 2. Teaching calendar

Purpose:
Centralize teaching schedule and academic operations.

Final-version capabilities:

- Scheduled class sessions
- Coursework deadlines
- Office-hours windows and bookings
- Calendar integration and reminders

### 3. Review queue

Purpose:
Help instructors move through coursework and communication efficiently.

Final-version capabilities:

- Coursework awaiting review
- Submission opening and rubric workflows
- Quick class posts or clarifications
- AI-assisted feedback drafting

### 4. Class management

Purpose:
Give educators a structured operational view of each course.

Final-version capabilities:

- Overview tab with themes and class health
- Coursework tab with review and edit tools
- Students tab with signals, statuses, and follow-up recommendations
- Grades tab with performance trends
- AI assistant tab for class-specific prompting
- Office hours tab with availability and bookings

### 5. AI Assistant for educators

Purpose:
Support teaching decisions using class context.

Final-version capabilities:

- Summarize class progress
- Detect concepts that may need reteaching
- Identify students who may benefit from outreach
- Draft class-wide clarifications
- Generate rubric-aligned feedback suggestions
- Recommend office-hours follow-ups

Guardrails:

- Must expose supporting signals behind recommendations
- Must not silently automate grading decisions
- Must preserve instructor control over outbound communication

### 6. Classroom creation

Purpose:
Reduce setup friction when creating a new course.

Final-version capabilities:

- Upload syllabus
- Parse schedule, topics, deadlines, and structure
- Suggest organization by week, by topic, or hybrid
- Preview structure before publishing
- Manual editing after auto-generation
- Full manual setup path for educators who prefer control

## Cross-cutting features

### Search

- Search classes, tasks, materials, students, and bookings

### Notifications

- Deadline reminders
- Class updates
- Office-hours confirmations
- Instructor follow-up alerts

### Files and content

- Attach resources to coursework
- Create new content directly in flow
- Version and permission handling for submissions and shared materials

### Messaging

- Coursework-specific class threads
- Instructor-student messaging
- Group work communication

### Role-aware permissions

- Separate capabilities for students, instructors, TAs, and admins
- Shared entities with scoped access

## MVP recommendation

If the final product is built in phases, the MVP should likely include:

- Student home
- To-do
- Calendar
- Class hub
- Coursework detail
- Study Buddy
- Educator class overview
- Review queue
- Office hours booking

The syllabus-to-classroom generator can arrive in a later phase once the core domain is stable.
