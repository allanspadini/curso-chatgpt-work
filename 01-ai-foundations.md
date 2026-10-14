# Chapter 1 — AI Foundations

## Begin with the nature of the tool

Generative AI systems produce responses by working with patterns learned from large amounts of data and the context available in the current interaction. A large language model does not approach a task with the lived experience, accountability, or complete situational awareness of a colleague. It can explain, transform, compare, classify, summarize, draft, and reason through many kinds of material, but its output is still a generated result that must be judged in context.

This distinction is practical, not philosophical. A fluent paragraph can contain a false claim. A well-formatted spreadsheet can embody a bad assumption. A persuasive recommendation can omit a stakeholder whose needs were never provided. The model's confidence of expression is therefore not evidence of correctness. Strong AI work combines the model's ability to synthesize and generate with a person's responsibility for source selection, interpretation, and final use.

The OpenAI Academy's [AI Foundations](https://academy.openai.com/public/courses/ai-foundations-juzjs) course frames foundational fluency around a real task and four durable habits: give clear instructions, provide context, review outputs, and use AI responsibly. Those habits are the prerequisite for every agentic workflow in the chapters ahead.

## Choose an appropriate task

A useful first task is meaningful enough to expose the strengths and limits of AI but safe enough to review. It should have an observable output and source material you understand. Examples include turning meeting notes into a structured brief, comparing vendor proposals against stated criteria, reorganizing a policy into a frequently asked questions document, or drafting a presentation outline from an approved report.

Avoid beginning with work whose errors would be hard to detect or costly to reverse. An unfamiliar legal conclusion, an unsupervised financial decision, or an external message sent without review does not create a good learning environment. Start where you can compare the result with your own knowledge, then expand the scope as the workflow becomes reliable and the necessary controls are in place.

## Instructions are a work specification

A prompt is most useful when treated as a compact work specification. It should answer several questions:

- What outcome is needed?
- Who will use it, and for what decision or action?
- Which sources should be used?
- What must be included, preserved, or avoided?
- What format should the result take?
- How will the result be reviewed?

“Summarize these notes” leaves the model to infer purpose and relevance. “Create a one-page decision brief for the operations director, using only the attached meeting notes; separate confirmed decisions from proposals, identify owners and dates, and list unresolved questions” creates an output that can be inspected. The second instruction does not need elaborate prompt engineering. It succeeds because the work is defined.

Clear instructions also describe the audience. A leadership brief emphasizes implications, decisions, and risks. A technical handoff preserves implementation details and assumptions. A customer-facing document needs language, tone, and claims appropriate for external use. Without the audience, the model must guess what matters.

## Context changes the answer

Context is the information the system needs to do this task in this situation. It can include source files, definitions, prior decisions, examples, brand guidance, data dictionaries, policies, and the history of the work. More context is not automatically better. Relevant context improves performance; an indiscriminate pile of files can introduce contradiction and noise.

A strong context set has four properties. It is authoritative, meaning the selected material is appropriate for the decision. It is current, so outdated instructions do not silently govern the result. It is scoped, so the agent can distinguish the task's evidence from background material. And it is interpretable, with acronyms, field meanings, and unusual conventions explained.

When sources conflict, do not ask the model to hide the conflict. Tell it which source takes precedence or ask it to report the disagreement. When a source is missing, require the result to label the gap rather than invent an answer. This turns uncertainty into visible work for the reviewer.

## Review is part of the workflow

Review should not be a final glance at formatting. It begins when the task is designed. Before delegating, decide what you will check and what evidence the result must preserve. A useful review proceeds in layers:

1. Verify that the result answers the requested question and serves the intended audience.
2. Check important claims, numbers, formulas, dates, citations, and quotations against their sources.
3. Examine completeness: missing cases can matter more than incorrect sentences.
4. Test the reasoning, including assumptions and alternative explanations.
5. Inspect the deliverable in its final medium, because layout, chart labels, slide overflow, and broken links can change meaning.
6. Confirm that any external action is appropriate and authorized.

The reviewer should be able to distinguish facts from interpretations and recommendations. A document that makes those layers visible is easier to trust and revise. Ask the model to flag unsupported claims, show calculations, identify assumptions, or attach a source note to each major finding.

## Responsible use is situational

Responsible AI use depends on the data, the decision, the people affected, and the consequences of error. Before adding information, ask whether it is necessary and permitted for this workspace and task. Before relying on a result, ask whether a qualified person needs to review it. Before sharing, ask whether the audience could mistake a draft, estimate, or generated interpretation for a verified fact.

Privacy and confidentiality are not solved by a good prompt. They depend on organizational policy, workspace configuration, access controls, retention, connected applications, and user behavior. Use approved environments and sources. Follow least-privilege access. Do not include sensitive information merely because it is available. Escalate high-impact decisions to the people responsible for them.

## Build a learning loop

The most valuable outcome of a first AI task is not just the artifact. It is a better understanding of how the task itself works. After reviewing the result, record what context was missing, which instruction was ambiguous, which checks caught errors, and what should be standardized. Re-run the task with the improved specification and compare the results.

This creates a simple improvement loop: perform, review, diagnose, refine. It prepares the transition from individual prompting to an agent workflow. The goal is not to eliminate judgment but to place judgment at the points where it has the greatest value.

## Practice: turn notes into a decision brief

This exercise adapts the instruction-and-review pattern taught in [AI Foundations](https://academy.openai.com/public/courses/ai-foundations-juzjs). Use a familiar, low-risk set of meeting notes so you can recognize omissions and mistakes.

**Prepare:** one page of approved notes containing at least two decisions, two proposed actions, an unresolved question, a date, and a number. Remove information that is not necessary for the exercise.

**Run:**

```text
Using only the attached meeting notes, create a one-page decision brief for the operations director.

Separate confirmed decisions, proposals, open questions, and follow-up actions. For every action, include the stated owner and date; write “not specified” when either is missing. Preserve the exact source wording for important numbers, but do not quote more than necessary. End with a short source-check table showing which note supports each decision.

Do not resolve contradictions or invent missing information. Flag them for review.
```

**Expected result:** a concise brief whose facts can be traced to the notes, with visible gaps rather than plausible inventions.

**Review before moving on:** verify every name, date, and number against the source. Confirm that proposals were not presented as decisions and that missing owners remained missing. Then revise one element of the instruction—audience, format, or acceptance criteria—and run it again. Record which change improved the output. The lesson is the improvement loop itself: specify, inspect, diagnose, and refine.

## Sources and further learning

- [AI Foundations — OpenAI Academy](https://academy.openai.com/public/courses/ai-foundations-juzjs)
- [OpenAI Academy](https://openai.com/academy/)
- [Security and privacy at OpenAI](https://openai.com/security-and-privacy/)

---

Previous: [Part I — ChatGPT and First Plugins](part-i-chatgpt-and-first-plugins.md) | Next: [Chapter 2 — Agents and Workflows](02-agents-and-workflows.md)
