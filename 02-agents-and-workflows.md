# Chapter 2 — Agents and Workflows

## From generating an answer to completing a task

The difference between a conversational response and agentic work is easiest to see in the unit of delegation. In a chat, the unit is often a turn: ask a question, receive an answer, decide the next question. In an agent workflow, the unit is an outcome: research the topic, compare the evidence, create the deliverable, and return it for review.

An agent can plan intermediate steps, use available tools, inspect files, revise its own work, and report progress. That autonomy is useful when the route to the result contains several operations. It also creates new responsibilities. The person delegating must define boundaries, make important approvals explicit, and review the evidence and artifact rather than assuming that a longer process is inherently more reliable.

The OpenAI Academy's [Agents and Workflows](https://academy.openai.com/public/courses/agents-and-workflows-bieml) course focuses on directing, reviewing, and improving agent-assisted work through context, defined outputs, boundaries, and iteration. Those elements form a practical operating model for ChatGPT Work.

## Model the workflow before automating it

Before giving a process to an agent, write down how the work reaches a useful result. A minimal workflow map includes:

- the trigger or reason the work begins;
- the input sources and systems of record;
- the transformations, comparisons, or decisions required;
- the output and its audience;
- the checks that determine whether the output is acceptable;
- the actions that require human approval;
- the owner responsible for the final result.

This map often reveals that a supposed “single task” contains multiple kinds of judgment. A weekly project update might require collecting activity, resolving duplicate names, distinguishing status from interpretation, identifying blockers, drafting an agenda, and deciding who receives it. Some stages can be delegated fully. Others should pause for review.

Automating an unclear process reproduces its ambiguity at greater speed. First simplify the workflow, remove obsolete steps, and establish authoritative sources. Then delegate.

## Define the agent's contract

A good agent instruction resembles a contract for the current task. It establishes an outcome, operating context, boundaries, and acceptance criteria. Consider a customer-onboarding plan. A useful delegation might require the agent to read the approved brief, identify deliverables and dependencies, build a milestone plan, mark every inferred date, and stop before assigning people or contacting the customer. The artifact must contain a decision log, risks, open questions, and links to the source evidence.

This contract separates four ideas that are often mixed together:

**Outcome** describes the finished state. “A reviewable onboarding plan” is an outcome; “think about onboarding” is not.

**Context** provides what the agent needs to interpret the work: customer objectives, internal roles, previous decisions, templates, and definitions.

**Constraints** limit the route and the result: use only approved sources, preserve a template, do not expose personal data, stop before external actions, or stay within a time period.

**Acceptance criteria** explain what a reviewer will inspect: every milestone has an owner and dependency; all numbers trace to a source; assumptions are labeled; the document fits the required format.

## Give autonomy in proportion to reversibility

Not every action deserves the same degree of independence. Researching public information, drafting a document, or creating a local comparison table is usually easier to review and reverse than sending a message, changing a record, approving an expense, or publishing a site.

Use that difference to design authority. Let the agent proceed through low-risk, reversible steps. Require confirmation before high-impact actions. When an external system offers separate read and write permissions, grant only the capability required for the workflow. When a workflow is new, return drafts instead of taking actions. Expand authority only after repeated review demonstrates that the sources, instructions, and checks are dependable.

Approvals are most useful when they occur at a meaningful decision boundary. Constant confirmation can turn delegation back into manual work; no confirmation can hide risk. The workflow map should identify the few moments where human knowledge or accountability is decisive.

## Observe the work, not just the result

An agentic task should be reviewable while it runs. Progress updates help the user detect a wrong source, an incorrect assumption, or an expanding scope before those choices become embedded in the final artifact. Questions from the agent are not a failure of autonomy. A precise question at a genuine ambiguity is evidence that the boundary is working.

Ask for intermediate artifacts when the final product is expensive to revise. For a presentation, review the narrative and slide plan before visual production. For an analysis, confirm data definitions and exclusion rules before computing results. For a recurring workflow, inspect a manual test run before scheduling it. Checkpoints reduce rework and make human judgment part of the design.

## Improve the system, not only the prompt

When a result disappoints, diagnose the source of failure. Was the desired outcome vague? Was a required document absent? Did two policies conflict? Was the tool unable to perform the necessary action? Were the quality criteria subjective or unstated? Did the workflow lack a checkpoint?

Prompt wording is only one possible cause. Durable improvement may require cleaning the source material, changing permissions, building a reusable skill, revising a template, narrowing the workflow, or adding a human reviewer. Agent performance is a property of the whole working system.

Maintain a lightweight record for repeated workflows: purpose, owner, source systems, permissions, current instruction, output location, review criteria, known failure modes, and last audit. This makes the workflow governable and reduces dependence on one person's memory.

## A practical maturity path

Agent-assisted work usually matures through four stages:

1. **Guided task.** A person provides the sources and supervises each meaningful step.
2. **Delegated deliverable.** The agent completes a multi-step task and returns a reviewable artifact.
3. **Reusable workflow.** Instructions, examples, tools, and checks are packaged so the task can be repeated consistently.
4. **Monitored operation.** The workflow runs on a schedule or trigger, keeps an audit trail, requests approval at defined boundaries, and is reviewed over time.

Do not rush from the first stage to the fourth. Each stage should prove that the next one is justified. The strongest automation begins as a well-understood manual workflow.

## Practice: map a workflow before automating it

This exercise follows the progression in [Agents and Workflows](https://academy.openai.com/public/courses/agents-and-workflows-bieml) and [Beyond the Prompt](https://academy.openai.com/public/clubs/work-users-ynjqu/events/beyond-the-prompt-moving-from-conversation-to-connected-workflows-a4zko3ngrd). Use a weekly project review that is currently assembled by hand.

**Prepare:** the current agenda template, two recent status updates, and the rules your team uses to label a blocker. Do not connect tools or create a schedule yet.

**Run:**

```text
Map the current weekly project-review workflow from these materials before proposing automation.

Show: inputs and owners; ordered steps; decisions made at each step; outputs; common exceptions; and the points where human approval matters. Then propose a first guided run that creates a draft agenda with decisions, blockers, owners, and open questions.

Use only the attached materials. Mark inferred owners or dates. Stop after the draft and do not contact anyone, update a tracker, or schedule future runs.
```

**Expected result:** a workflow map plus one reviewable agenda draft, not an automation.

**Review before moving on:** ask the person who normally prepares the meeting to mark missing steps, incorrect decision rules, and exceptions. Confirm that the draft distinguishes a confirmed owner from a proposed one. If the map is accurate, run a second guided case with different inputs. Only after both runs succeed should you consider packaging instructions or scheduling the workflow.

## Sources and further learning

- [Agents and Workflows — OpenAI Academy](https://academy.openai.com/public/courses/agents-and-workflows-bieml)
- [Beyond the Prompt: Moving from Conversation to Connected Workflows](https://academy.openai.com/public/clubs/work-users-ynjqu/events/beyond-the-prompt-moving-from-conversation-to-connected-workflows-a4zko3ngrd)
- [Beyond the Prompt — direct video replay](https://vimeo.com/1206219266?share=copy&fl=sv&fe=ci)
- [Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work)

---

Previous: [Chapter 1 — AI Foundations](01-ai-foundations.md) | Next: [Part II — ChatGPT Work and Skills](part-ii-chatgpt-work-and-skills.md)
