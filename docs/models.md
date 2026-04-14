# Models

## Overview

These domain models are inferred from the prototype and describe what the final product should formalize in the backend and shared types.

## Core entities

### User

Represents any person using the product.

Key fields:

- `id`
- `name`
- `email`
- `role` (`student`, `educator`, `ta`, `admin`)
- `avatarUrl`
- `timezone`
- `status`

### Class

Represents a course instance.

Key fields:

- `id`
- `code`
- `title`
- `description`
- `termId`
- `educatorId`
- `room`
- `deliveryMode`
- `theme`
- `status`

Relationships:

- has many `ClassMeeting`
- has many `Coursework`
- has many `Enrollment`
- has many `Resource`
- has many `OfficeHourSlot`

### Enrollment

Connects a user to a class with a role.

Key fields:

- `id`
- `classId`
- `userId`
- `roleInClass`
- `enrollmentStatus`

### ClassMeeting

Represents recurring class schedule blocks.

Key fields:

- `id`
- `classId`
- `dayOfWeek`
- `startTime`
- `endTime`
- `location`
- `periodLabel`

### Coursework

Represents an assignment, discussion, reading, prep item, quiz, or similar task.

Key fields:

- `id`
- `classId`
- `title`
- `kind`
- `description`
- `topic`
- `dueAt`
- `pointsPossible`
- `weight`
- `status`
- `isGroupWork`

Relationships:

- has many `CourseworkResource`
- has many `Submission`
- has many `CourseworkMessageThread`
- may have one `GroupWorkspace`

### Resource

Represents a course or coursework material.

Key fields:

- `id`
- `classId`
- `courseworkId` nullable
- `title`
- `resourceType`
- `storageKey` or external URL
- `createdByUserId`
- `visibility`

Examples:

- lecture slides
- reading PDFs
- example responses
- videos
- review sheets

### Submission

Represents student work attached to coursework.

Key fields:

- `id`
- `courseworkId`
- `studentId`
- `groupId` nullable
- `submittedAt`
- `status`
- `contentType`
- `storageKey` or document reference

### Grade

Represents the assessed result of a submission or coursework item.

Key fields:

- `id`
- `courseworkId`
- `submissionId` nullable
- `studentId`
- `score`
- `percent`
- `letterGrade`
- `gradedAt`
- `gradedByUserId`

### Rubric

Represents a grading framework for coursework.

Key fields:

- `id`
- `courseworkId`
- `title`

### RubricCriterion

Key fields:

- `id`
- `rubricId`
- `label`
- `description`
- `pointsPossible`

### OfficeHourSlot

Represents bookable instructor availability.

Key fields:

- `id`
- `classId`
- `educatorId`
- `startsAt`
- `endsAt`
- `location`
- `mode`
- `capacity`
- `status`

### OfficeHourBooking

Represents a student booking into a slot.

Key fields:

- `id`
- `officeHourSlotId`
- `studentId`
- `topic`
- `status`
- `bookedAt`

### MessageThread

Represents contextual communication.

Key fields:

- `id`
- `threadType`
- `classId`
- `courseworkId` nullable
- `groupId` nullable
- `visibility`

Thread types:

- class discussion
- instructor conversation
- coursework thread
- group thread

### Message

Key fields:

- `id`
- `threadId`
- `authorUserId`
- `body`
- `createdAt`
- `messageType`

### GroupWorkspace

Represents a collaboration context for group coursework.

Key fields:

- `id`
- `courseworkId`
- `name`
- `status`

Relationships:

- has many `GroupMember`
- has many `GroupTask`
- may have linked `MessageThread`

### GroupMember

Key fields:

- `id`
- `groupWorkspaceId`
- `userId`
- `role`

### GroupTask

Key fields:

- `id`
- `groupWorkspaceId`
- `title`
- `assignedToUserId`
- `status`

## AI-related models

### AIInteraction

Represents an AI request and response event.

Key fields:

- `id`
- `userId`
- `roleContext`
- `classId` nullable
- `courseworkId` nullable
- `interactionType`
- `prompt`
- `response`
- `createdAt`

### AIContextReference

Tracks which entities informed the AI response.

Key fields:

- `id`
- `aiInteractionId`
- `entityType`
- `entityId`
- `label`

### AISuggestedAction

Structured actions the UI can optionally apply.

Key fields:

- `id`
- `aiInteractionId`
- `actionType`
- `payload`
- `status`

Examples:

- add learning goal
- recommend resource
- draft class note
- draft student follow-up
- suggest office-hours invite

## Derived read models

The final system will also benefit from derived or cached views for faster UI rendering.

### StudentHomeSummary

- upcoming tasks
- personalized goals
- recommended resources
- focus topics
- progress indicators

### EducatorClassHealth

- completion rate
- top weak topics
- students needing support
- review load
- office-hours demand

### CalendarEvent

A normalized view used by both student and educator calendars.

Key fields:

- `id`
- `sourceType`
- `sourceId`
- `classId`
- `title`
- `subtitle`
- `startsAt`
- `endsAt`
- `eventType`

## Example relationships

```text
User
  -> Enrollment
  -> Class
  -> Coursework
  -> Submission
  -> Grade
  -> OfficeHourBooking
  -> Message

Class
  -> ClassMeeting
  -> Coursework
  -> Resource
  -> OfficeHourSlot
  -> MessageThread

Coursework
  -> Resource
  -> Submission
  -> Grade
  -> MessageThread
  -> GroupWorkspace
```

## Modeling principles

- Keep class context first-class everywhere.
- Model student and educator actions on top of the same entities.
- Separate immutable history from mutable UI state where needed.
- Treat AI outputs as suggestions or artifacts, not canonical truth.
- Preserve traceability for grading, communication, and AI-assisted actions.
