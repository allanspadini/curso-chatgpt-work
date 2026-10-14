# Chapter 3 — Meet ChatGPT Work

## A new agent for everyday work

ChatGPT Work is the agentic experience in ChatGPT for substantial, multi-step business work. It can research and analyze information, use files and approved tools, create finished deliverables, and keep working through a defined task until it has something for the user to review. Typical outputs include briefs, reports, documents, spreadsheets, presentations, recurring updates, workflows, and Sites.

The product is best understood by comparing three experiences. **Chat** is for questions, explanations, brainstorming, quick drafts, and interactive thinking. **Work** is for delegating a result that requires sources, steps, tools, or a finished artifact. **Codex** is specialized for software development and technical work such as editing repositories, running commands and tests, and reviewing code. The boundary is about the nature of the work, not whether a prompt sounds complex.

Use Chat to decide what should be done. Use Work when you can describe what “done” should look like. Use Codex when the job centers on code and development environments.

## The anatomy of a Work task

A Work task begins with an outcome. The user provides instructions, files, project context, or connected applications. Work determines a route through the job, uses the available capabilities, reports progress, asks questions when necessary, and produces a reviewable result. The user can redirect the task, answer a question, or approve an important action while it runs.

This pattern makes Work particularly valuable when the manual task would require moving between sources and tools. Preparing a leadership meeting, for example, may involve reviewing a project plan, recent messages, a spreadsheet of results, and a presentation template; identifying changes; deciding what matters to the audience; and assembling a deck. A single short answer cannot replace that workflow. A delegated task can.

## Local and cloud work

Work can run in different contexts depending on the surface, plan, and workspace configuration. Cloud work is useful when a task should continue after the computer is closed, be available across supported web, mobile, and desktop experiences, or run on a schedule. Local work in the desktop app is useful when the task requires files or applications on the computer. Local material remains local unless the user explicitly moves or shares it, while cloud tasks can synchronize across supported surfaces.

Choose the environment from the task's sources and operating requirements. If the authoritative spreadsheet exists only on the computer and policy permits local use, a local task is appropriate. If a weekly research task must run whether or not the laptop is awake, use the cloud. Do not choose cloud or local merely for convenience; data location, access, continuity, and workspace policy are part of the workflow design.

## A good first task

OpenAI's getting-started guidance recommends work with a clear outcome, a small number of source materials, and an output that can be reviewed. Three useful patterns are:

**Create a presentation.** Turn approved notes, research, and a reference deck into a structured presentation for a named audience. Ask Work to separate evidence from recommendation and flag claims needing review.

**Build a comparison spreadsheet.** Compare options against explicit criteria, preserve source links, identify missing information, and create a summary that supports a decision.

**Prepare a recurring update.** Review approved sources on a schedule, identify decisions, blockers, owners, and questions, and return a draft before anything is distributed.

These tasks are concrete enough to evaluate and complex enough to demonstrate the difference between Chat and Work.

## Working efficiently

Agentic work consumes more computation than a quick conversational answer because the system may inspect sources, call tools, generate files, and revise its result. Efficiency therefore means focusing effort on valuable outcomes. Use Work for tasks that would take meaningful manual time, need several steps or sources, create a reusable artifact, or recur over time. Use Chat for a quick rewrite or a question that does not require execution.

Bound the task. Limit the time period, number of options, source set, output size, or actions. A request to “research our market” has no natural stopping point. A request to compare five named competitors using public information from the last twelve months, document every source, and return a six-page briefing has one.

## What Work does not change

Delegation does not transfer accountability. The user still decides whether a source is appropriate, whether the result is correct, and whether an action should be taken. Workspace controls still determine which features, models, applications, browser capabilities, and local resources are available. Connected systems still have their own permissions. The fact that Work can attempt a task does not mean that the task is authorized or safe to run without review.

Work also does not make ordinary ChatGPT obsolete. Conversation remains the fastest way to explore a question, develop a strategy, or refine an instruction. A productive rhythm is often conversational framing followed by agentic execution: think with Chat, delegate with Work, and review together.

## Practice: build a comparison spreadsheet

This is adapted from the first-task examples in [Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work). It demonstrates a finished, inspectable artifact without requiring write access to an external system.

**Prepare:** three approved proposals or product descriptions for a real decision, plus five criteria you care about. If you cannot use business material, choose three public software plans and save their current product pages or PDFs.

**Choose the environment:** use local Work if the source files exist only on your computer. Use cloud Work when the approved sources are available there and you want the task to continue across supported devices.

**Run:**

```text
Create a spreadsheet comparing the three attached options for [decision].

Use these criteria: [criteria]. Add a source tab, a comparison tab, a risk-and-missing-information tab, and a summary tab. Explain the scoring scale before applying it. Link every material claim to its source and leave a cell blank when the evidence is unavailable. Recommend an option only if the evidence supports one.

Return the completed file for review. Do not contact vendors or make a purchase.
```

**Expected result:** a usable spreadsheet with transparent criteria, formulas or scoring logic, source links, gaps, risks, and a bounded recommendation.

**Review before moving on:** open the file rather than reviewing only the chat summary. Recalculate at least one score, test a different criterion weight, and follow three source links. A successful first Work task is one whose result you can challenge and reuse.

## Sources and further learning

- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [Get started with ChatGPT Work](https://learn.chatgpt.com/docs/get-started-with-work)
- [ChatGPT Work — OpenAI Academy](https://openai.com/academy/codex-for-work/)
- [ChatGPT Work for Every Team](https://openai.com/chatgpt-work/)
- [Get Started with ChatGPT Work — webinar](https://academy.openai.com/home/clubs/work-users-ynjqu/events/get-started-with-chatgpt-work-00rtqho2qa)
- [Get Started with ChatGPT Work — direct video replay](https://vimeo.com/1213736769?share=copy&fl=sv&fe=ci)

---

Previous: [Part II — ChatGPT Work and Skills](part-ii-chatgpt-work-and-skills.md) | Next: [Chapter 4 — Get Started with ChatGPT Work](04-get-started-with-chatgpt-work.md)
