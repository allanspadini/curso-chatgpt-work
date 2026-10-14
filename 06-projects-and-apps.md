# Chapter 6 — Projects and Apps

## The context and capability around Work

ChatGPT Work becomes more useful when it can operate with the persistent context and connected systems of a team. Projects and apps address these two needs directly.

A **project** organizes ongoing work: chats, files, links, and instructions remain together. An **app** connects ChatGPT to an external service and its information or actions. The next two chapters add the distribution and method layers: plugins package installable capabilities, while skills package repeatable instructions and resources.

These layers are complementary. A quarterly-planning project might contain the current goals and prior decisions; a connected app might retrieve updates from a shared drive; a skill might describe the organization's standard review process; and a plugin might distribute that skill and its supporting integration to the team.

## Projects: the home of sustained work

Projects keep related conversations, reference files, and project-specific instructions in one place. Instead of re-explaining the initiative in every new conversation, the user can begin Chat or Work from the project and use its context. This makes a project a natural home for a client engagement, research program, planning cycle, operating review, or course of work that lasts longer than one task.

Good project instructions contain stable guidance: purpose, audience, terminology, governing standards, preferred formats, and durable boundaries. Task-specific details belong in the individual request. If a date, target, or temporary priority is placed in the standing instructions, it can become stale and influence future work invisibly.

Projects can also be shared. Shared context improves collaboration, but it changes the privacy model of the work. Members may see project chats, files, instructions, and contributions according to their access. Before sharing, remove material that does not belong in the common workspace and confirm that connected sources will not introduce private information unexpectedly. Sharing a project is different from sharing one chat: it creates an ongoing collaborative context.

Project memory can help conversations draw on related work, with behavior and availability depending on settings and plan. Do not treat memory as a formal database or system of record. Important facts and decisions should remain in maintained documents, instructions, or connected sources that can be reviewed directly.

## Apps: access to organizational information and action

Apps connect ChatGPT to services such as storage, collaboration, communication, calendars, and business systems. Depending on the application and workspace configuration, capabilities can include interactive experiences, search, deep research, synchronization, and write actions.

The distinction between reading and acting matters. Searching a project folder supports research. Creating a document changes an external workspace. Sending a message or updating a record can affect other people and systems. ChatGPT may request permission for an important action even when an app is connected. Read the proposed action, target, and data carefully before approving it.

An application's permission inside ChatGPT does not override the underlying service's access model. Users should receive only the access appropriate to their roles, and workflows should name the relevant folders, channels, date ranges, or records. Administrators can control which apps and actions are available, while users control which permitted connections they use for a task.

For sensitive workflows, begin with search and draft. Add write actions only when the workflow is stable, the owner is clear, exceptions are handled, and the organization is ready to govern the outcome.

## Design a coherent context stack

Use the smallest combination that solves the task:

- Put durable initiative context and work history in a project.
- Connect an app when authoritative information or an external action lives in another service.
- Install a plugin when a packaged capability should be discoverable and managed; Chapter 8 shows how this works in practice.
- Create or use a skill when the method itself should be repeatable; Chapter 7 explains how.

Avoid duplicating the same instruction in every layer. Decide where each rule belongs and which version is authoritative. A clear stack makes behavior easier to explain, audit, and update.

## Practice: create a project catch-up workspace

This practice combines the persistent context described in [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) with the connected-source pattern in [Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt). Use a current project whose documents are approved for the workspace.

**Prepare:** create a project with a one-paragraph purpose, audience, terminology, stable boundaries, and links or files for the current plan and decision log. Connect only the document or collaboration app required for the exercise.

**Run in the project:**

```text
Using the maintained project instructions, the current plan, the decision log, and only the approved [Drive/SharePoint/Slack] location, prepare a catch-up brief for someone returning after one week away.

Include what changed, confirmed decisions, approaching commitments, blockers, unresolved questions, and source links. Separate project facts from your interpretation. Report inaccessible sources and conflicts instead of guessing.

Keep this pass read-only. Do not edit documents, send messages, change permissions, or create tasks.
```

**Expected result:** a concise brief that combines persistent project context with current connected evidence without copying unrelated material.

**Review before moving on:** verify that standing instructions contain only durable guidance, the brief uses the latest authoritative sources, and no private or out-of-scope information entered the project. Start a second conversation in the same project and ask one follow-up question; confirm that the shared context helps without replacing the source of truth.

## Sources and further learning

- [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [Apps in ChatGPT](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)
- [Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work)

---

Previous: [Chapter 5 — Delegation, Context, and Control](05-delegation-context-and-control.md) | Next: [Chapter 7 — Skills](07-skills.md)
