# Chapter 4 — Get Started with ChatGPT Work

## From orientation to a completed result

The fastest way to understand ChatGPT Work is to complete one real, reviewable assignment. Reading about agents establishes the mental model; a carefully chosen first task teaches what it feels like to delegate an outcome, follow progress, answer questions, inspect sources, and refine a finished artifact.

This chapter adapts the two demonstrations in OpenAI Academy's **Get started with ChatGPT Work** webinar resource guide. The first turns calendar, email, and team messages into a prioritized daily brief. The second turns quarterly goals, results, and team context into a leadership presentation. Together they show the path from a one-time request to an organized project, a reusable workflow, and eventually scheduled work or a Skill.

The examples are patterns, not requirements. Access to Work, Projects, apps, Plugins, Scheduled Tasks, and Skills varies by plan and workspace configuration. Replace unavailable tools with an equivalent approved by your organization or upload synthetic files that represent the same kind of information.

## Prepare a safe practice environment

Use a ChatGPT workspace approved by your organization when the task involves company information. Do not connect organizational email, calendars, messages, drives, or other systems to a personal account unless your organization explicitly permits it. For training, synthetic inputs are often better: they let you learn the workflow without exposing confidential data or confusing an exercise with live operations.

Before the first run, confirm four things:

1. **Access.** You can select Work and use the necessary project, file, app, or plugin capabilities.
2. **Sources.** You know which information is authoritative and are allowed to use it.
3. **Destination.** You know where the draft will be created and who can see it.
4. **Approval boundary.** You know which actions must stop for confirmation, particularly sending, publishing, or changing an external system.

If an app is connected, its underlying permissions still apply. A user who cannot read a folder in the source service should not gain access through Work. Administrators determine which apps, data, and actions are available in the workspace.

## Make the Chat-or-Work decision

Choose the experience from the job, not from the length of the input or the desired file type.

Use **Chat** for one focused answer, a brainstorm, a rewrite, or help with one part of a task. Use **Work** when ChatGPT must gather context, complete several steps, use approved tools, and create a finished result for review. Use **Codex** when the center of the task is software development, repositories, testing, debugging, or another technical coding workflow.

A long document can still support a Chat request if the user wants one narrow explanation. A short instruction can be a Work task if it delegates a multi-source deliverable. Ask: “Do I need an answer, or do I need the work completed?”

When choosing Work, describe the result rather than scripting every click. Give it the goal, audience, trusted sources, constraints, output format, and review standard. Let it plan ordinary intermediate steps. Watch its progress and correct course if it selects the wrong source or makes an unsupported assumption.

## First workflow: build a daily work brief

A daily brief is a useful first workflow because the user understands the source material and can judge whether the result is helpful. The task gathers scattered signals from a calendar, email, and team messages, then turns them into one prioritized plan.

### Start with the conversational version

In Chat, ask a focused question such as:

```text
Review today's calendar and tell me which meetings and deadlines deserve the most preparation.
```

This should return a quick answer. It demonstrates the value of Chat when the user needs orientation, not a complete artifact.

### Delegate the complete assignment

Start a new conversation, select Work, and use an instruction like this:

```text
Prepare my work brief for today.

Review my approved calendar, email, and team-message sources. Identify deadlines, decisions, conflicts, preparation needs, and follow-ups that require my attention. Rank the three most important priorities first.

Create a structured document with a prioritized plan. For every item, include the reason it matters, the next action, and a direct link to the calendar event, message, or email thread that supports it.

Return the document and a short message addressed to me. Do not send or share anything until I review the result and approve the destination.
```

Adapt the named sources and document format to your environment. A Google Workspace and Slack team may use Calendar, Gmail, Drive, and Slack. A Microsoft environment may use Outlook Calendar, Outlook Email, SharePoint, and Teams. The workflow is the same even when the tools differ.

While Work is running, observe the sources and plan. Add a correction if priorities need a different definition. An instruction such as “put customer commitments ahead of internal preparation unless a deadline is at risk” is more useful than manually rearranging every item because it explains the underlying judgment.

### Review the daily brief

Open several source links. Confirm that dates, conflicts, owners, and commitments are accurate. Check that the brief separates an actual deadline from a suggested priority. Make sure a message draft is addressed only to you and that no send action has occurred without approval.

The first run is successful when it helps you act and you can explain why every important item appears. It does not need to be perfectly automated.

### Repeat only after validation

Once several manual runs are reliable, ask Work to schedule the task for an appropriate time on working days. Verify the time zone, sources, output destination, and approval behavior. Use the Scheduled area to review, edit, pause, or remove the recurring task as the product permits.

Scheduling a weak brief will repeat weak prioritization. Keep a human review while the workflow is new, and audit it when your responsibilities, apps, or team conventions change.

## Second workflow: create a leadership presentation

The second pattern shows how Projects, templates, source verification, and iterative feedback improve a substantial deliverable. The goal is not simply to generate slides; it is to turn quarterly evidence into a leadership story whose claims can be checked.

### Create the project context

Create a Project for the performance cycle. Add the approved goals, results, team updates, and any supporting research. Include the current presentation template and brand guide when available. A project keeps related Chat and Work conversations, files, and instructions together, while the template gives Work a concrete model of the expected artifact.

OpenAI Academy provides [synthetic sample inputs](https://docsend.com/view/s/tg6ev96bqfasddd8) for practice. If you use organizational files, confirm that the versions and permissions are appropriate. Remove obsolete plans or explain which source supersedes another.

### Use Chat to frame the story

Inside the project, begin with a narrow conversational question:

```text
Compare the approved quarterly goals with the recorded results. What were the most important wins and misses, and which issues deserve leadership attention?
```

Use the answer to clarify the audience and decision, not as a substitute for source review. Correct misunderstood measures or missing context before delegating the deck.

### Delegate the presentation

Start a new conversation in the same project, select Work, and specify the complete outcome:

```text
Create a quarterly performance review for the leadership team using the approved goals, results, and team updates in this Project.

Compare targets with actual results. Explain the most material wins and misses, the evidence behind them, and the decisions or actions leadership should consider next. Separate findings from recommendations.

Use the current corporate presentation template and brand guide. Build a clear narrative, use charts only when they improve understanding, cite every material number, and flag claims that need verification.

First return the proposed storyline and slide plan for review. Produce the final presentation only after I approve that structure.
```

The planning checkpoint prevents a polished but misguided deck. Review whether the opening establishes the decision, whether evidence supports the narrative, and whether the number of slides fits the meeting.

### Verify a prominent claim

Choose an important number or conclusion and require traceability:

```text
For the main result on slide 4, identify the exact source. If the value was calculated, show the formula and inputs, then link to the underlying evidence.
```

Open the source and verify it yourself. Repeat the check for material figures and conclusions. A citation is useful only when it leads to evidence that supports the claim.

### Teach the unwritten preferences

A formal brand guide rarely captures every organizational convention. During review, explain the principles behind your edits: place the main recommendation near the beginning, use one decimal place for percentages, show headcount as whole numbers, keep citations in footnotes, reserve red for genuine risk, or use the organization's preferred customer terminology.

Ask Work to revise the deck with these preferences while preserving the approved template. Then inspect the rendered presentation for story, calculations, citations, branding, readability, and clipped or overlapping elements.

## Turn a successful workflow into a Skill

Once the presentation workflow succeeds on more than one representative case, it may be ready to become a Skill. Ask the skill creator to preserve the method, reusable template and brand resources, required inputs, organizational conventions, evidence rules, and final checks. The Skill should flag missing information rather than manufacture a complete story.

Review the generated `SKILL.md`, answer follow-up questions, install it first for limited use, and test it on a different presentation. Do not share it widely until the description activates appropriately, the instructions handle exceptions, the resources are current, and an owner is responsible for maintenance. Chapter 7 develops this process in detail.

## Find your own first Work task

Choose work you understand and genuinely need to finish. It should use a manageable source set, require several steps, produce a visible artifact, and be safe to review before any external action.

If you need help selecting one, use a bounded request:

```text
Using only the work context I have approved for this conversation, suggest three specific tasks that would be good candidates for ChatGPT Work. For each, describe the finished deliverable, required sources, likely review checks, and actions that should remain human-approved. Recommend the safest high-value starting point, but do not begin any task until I choose.
```

Evaluate the suggestions yourself. A good first task is not necessarily the most ambitious. It is the one that teaches the complete cycle: define, delegate, observe, review, refine, and only then reuse.

## Your first-run checklist

Before starting:

- use an approved workspace and permitted sources;
- choose a task whose result you can evaluate;
- define the audience, artifact, and stopping point;
- confirm app permissions and the output destination;
- provide a template or example when format matters.

Before relying on the result:

- verify important facts, dates, sources, and calculations;
- separate evidence, assumptions, and recommendations;
- inspect the final artifact in its rendered form;
- approve any send, publish, or write action deliberately;
- record the corrections that should improve the next run.

Before making it reusable:

- test a second representative case;
- define exception behavior and ownership;
- choose whether the method belongs in a Project, Skill, template, or scheduled task;
- document permissions, review criteria, and an audit date.

## Practice: complete the comparison-spreadsheet workflow

The [official getting-started documentation](https://learn.chatgpt.com/docs/get-started-with-work) presents a comparison spreadsheet as a useful first task. Use it here to practice the entire cycle without repeating the daily-brief or presentation examples above.

**Prepare:** notes or source files for three to five options, a named decision-maker, decision criteria, and a deadline. Identify any criterion that is mandatory rather than merely desirable.

**Run:**

```text
Compare the attached options for [decision] and create a review-ready spreadsheet for [decision-maker].

First show me the proposed criteria, scoring scale, mandatory requirements, and file structure. Wait for my approval of that plan. Then create the workbook with source evidence, scores, risks, missing information, a sensitivity check for the two most important criteria, and a summary tab with the recommendation and next steps.

Do not fill evidence gaps with assumptions. Return the workbook for review and stop before sending, purchasing, or updating another system.
```

**Expected result:** a plan checkpoint followed by a complete workbook that makes the recommendation inspectable.

**Review before moving on:** confirm that each mandatory requirement is evaluated, formulas are correct, missing evidence is visible, and the recommendation changes appropriately when important weights change. Record at least one correction to the sources, instruction, or review criteria. That correction becomes input to the next run.

## Sources and video learning

- [Get started with ChatGPT Work: webinar resource guide](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/get-started-with-chatgpt-work-webinar-resource-guide-2026-08-03)
- [Get Started with ChatGPT Work — webinar page](https://academy.openai.com/home/clubs/work-users-ynjqu/events/get-started-with-chatgpt-work-00rtqho2qa)
- [Get Started with ChatGPT Work — direct video replay](https://vimeo.com/1213736769?share=copy&fl=sv&fe=ci)
- [Get started with ChatGPT Work — documentation](https://learn.chatgpt.com/docs/get-started-with-work)
- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [Creating and editing files with ChatGPT Work](https://help.openai.com/en/articles/20001278-creating-and-editing-documents-spreadsheets-and-presentations-with-chatgpt-work)
- [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [Scheduled Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt)

---

Previous: [Chapter 3 — Meet ChatGPT Work](03-meet-chatgpt-work.md) | Next: [Chapter 5 — Delegation, Context, and Control](05-delegation-context-and-control.md)
