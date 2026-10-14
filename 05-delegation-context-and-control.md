# Chapter 5 — Delegation, Context, and Control

## Describe the result, not every keystroke

Delegation works when the agent understands both the destination and the boundaries of the journey. Overly vague instructions force it to invent purpose. Overly procedural instructions can prevent it from adapting when the material differs from expectations. The useful middle ground is to specify the outcome, evidence, constraints, review standard, and approval points while allowing the agent to plan the ordinary intermediate steps.

A strong Work request can be written in five parts:

1. **Outcome:** the artifact or changed state you need.
2. **Purpose and audience:** why it matters and who will use it.
3. **Sources and tools:** where the evidence lives and which systems may be used.
4. **Constraints and boundaries:** what must remain unchanged, what is out of scope, and where the agent must stop.
5. **Quality and review:** what good looks like, how uncertainty should appear, and which checkpoint comes before final use.

For example: “Create an eight-slide quarterly review for the executive team. Use the approved goals document, results workbook, customer research, and our current master deck. Show actual versus target, explain the three largest variances, distinguish evidence from recommendation, and link every material number to its source. Preserve the master layouts. Return the narrative and slide plan for review before producing the final deck.”

## Curate context deliberately

Context should reduce ambiguity. A project may contain source files, standing instructions, saved responses, and links to connected applications. That persistence is useful, but it can also preserve obsolete assumptions. Treat project context as a maintained knowledge environment rather than a dumping ground.

Name the source of truth for each important concept. State which plan is current, which spreadsheet contains approved figures, which style guide governs the output, and which earlier decision supersedes another. Add a short note explaining unfamiliar files. Remove or archive material that no longer applies. If two sources disagree, require the deliverable to surface the conflict.

Use only the context required by the task. Least context complements least privilege: both reduce unintended disclosure and distraction. A sales-analysis workflow rarely needs the entire contents of a shared drive. Point it to the relevant folder, date range, accounts, or documents.

## Make uncertainty visible

Agents are most useful when they can proceed through ordinary ambiguity without silently converting guesses into facts. Instruct Work to label assumptions, missing information, conflicting evidence, and low-confidence conclusions. Decide which unknowns justify a question and which can appear in the draft for later review.

Useful conventions include an assumptions section, an open-questions table, confidence labels for estimates, source links beside material claims, and a clear separation between findings and recommendations. These structures allow the reviewer to focus attention where it is needed.

When a task depends on current public information, ask for publication dates and direct links. When it depends on organizational data, ask for the file, record, or application location. Traceability is not decoration; it is the bridge between a generated artifact and a decision.

## Set action boundaries

Connected tools may allow an agent to search, read, create, update, or send. Those permissions have different consequences. Define an action boundary in the request even when the workspace has already established technical controls.

Common boundaries include:

- research and draft, but do not publish;
- prepare a message, but do not send it;
- propose updates to a system of record, but do not write them;
- create a file in a draft location, but do not replace the approved version;
- ask before contacting an external domain;
- stop if the source set is incomplete or contradictory.

For a mature, low-risk workflow, an administrator may allow more direct action. The instruction should still identify the owner, expected records, and exception behavior. Technical permission is not the same as business authorization.

## Review in stages

Large artifacts improve when reviewed at the cheapest stage to change them. Use a staged workflow:

**First, inspect the plan.** Is the agent using the right sources, definitions, and sequence?

**Then, inspect the substance.** Are the findings accurate, complete, and appropriate for the audience?

**Finally, inspect the artifact.** Do formulas work? Do slide layouts render? Are citations and links usable? Does the final file preserve the required structure?

The stages can be explicit checkpoints in one task or separate tasks. The important point is to avoid discovering a narrative error only after a polished deck has been created or a data-definition error only after every chart has been formatted.

## Write acceptance criteria that can be tested

“Make it high quality” is an aspiration, not a check. Replace it with observable criteria. A project plan can require a named owner, due date, dependency, and status for every milestone. A market brief can require direct sources for every quantitative claim and a section on limitations. A spreadsheet can require no hard-coded values in formula columns, reconciled totals, documented assumptions, and a summary tab. A presentation can require readable labels, no clipped elements, a consistent master, and speaker notes for each slide.

Some quality criteria require human judgment, especially tone, strategic relevance, and fairness. Name the human reviewer and the decision they must make. Agentic workflows are strongest when mechanical checks and accountable judgment reinforce one another.

## A reusable delegation template

Use this structure as a starting point, then adapt it to the work:

> Complete **[outcome]** for **[audience and purpose]**. Use **[approved sources and tools]**. Follow **[constraints, policies, template, date range, and scope]**. The result must include **[required components]** and meet **[acceptance criteria]**. Label assumptions, conflicts, and missing information. You may **[allowed actions]**. Stop and ask before **[approval boundary]**. Return **[checkpoint or draft]** for review before treating the work as final.

The template is not a magic formula. Its value comes from forcing the delegator to make the working relationship explicit.

## Practice: delegate a customer-research presentation

This exercise adapts the customer-research example in [Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work) and adds the checkpoints developed in this chapter.

**Prepare:** approved interview notes, survey results, an eight-slide reference deck or template, and the product-leadership meeting objective. Identify claims that require a named reviewer.

**Run:**

```text
Create an eight-slide presentation for the product leadership meeting using only the attached interview notes and survey results.

Focus on the three most common customer problems. Preserve supporting evidence and source references, separate findings from recommendations, and flag claims that are weak, contradictory, or based on a small sample.

First return a source inventory, proposed narrative, and slide-by-slide outline. Wait for my approval before building the deck. After approval, create the presentation in the supplied template and return it for review. Do not publish or share it.
```

**Expected result:** an evidence map and outline at the first checkpoint, followed by a rendered draft only after approval.

**Review before moving on:** verify the three themes against the source material, inspect whether minority or contradictory feedback disappeared, and open the actual deck to check overflow, hierarchy, citations, and unsupported visual claims. The exercise succeeds when the approval boundary prevents expensive rework and the final claims remain traceable.

## Sources and further learning

- [Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work)
- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [Beyond the Prompt: Moving from Conversation to Connected Workflows](https://academy.openai.com/public/clubs/work-users-ynjqu/events/beyond-the-prompt-moving-from-conversation-to-connected-workflows-a4zko3ngrd)

---

Previous: [Chapter 4 — Get Started with ChatGPT Work](04-get-started-with-chatgpt-work.md) | Next: [Chapter 6 — Projects and Apps](06-projects-and-apps.md)
