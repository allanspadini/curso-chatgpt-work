Chapter 4. Patterns of Work with Agent Skills
A Note for Early Release Readers
With Early Release ebooks, you get books in their earliest form—the author’s raw and unedited content as they write—so you can take advantage of these technologies long before the official release of these titles.

This will be the 4th chapter of the final book. Please note that the GitHub repo will be made active later on.

If you’d like to be actively involved in reviewing and commenting on this draft, please reach out to the editor at rfernando@oreilly.com.

A product manager (PM) in 2024 would collect let’s say 50 customer interview transcripts and triage them manually or semi-automatically over the course of maybe a week. The same PM in 2026 drops a folder inside Claude and asks something along the lines of “what’s the most common pain point shared by customers?” and gets a CSV file plus an interactive HTML dashboard in like less than 10 minutes.

Nothing about the PM’s judgment changed necessarily here, what changed is the seam between this person’s judgment and the artifact it produces.

That’s the shape of the shift this chapter is about: not the disappearance of thinking, but the near-total compression of the distance between a thought and the thing it produces.

In 2024, the path maybe ran like this: A (raw transcripts) → B (manual triage — reading all 50, tagging themes by hand, tallying frequencies in a spreadsheet, building a summary) → C (the deliverable: ranked pain points plus a shareable dashboard). Step B was the week-long slog, and it was the part that felt like the work.

That same path now might collapse into this A → C structure where the transcripts go in, the artifact comes out, and B dissolves into a five-minute generation. Step B was never the judgment. Rather, it was the manual labor of getting judgment into a usable form. The PM still has to decide which folder to drop in, ask the right question, and trust or challenge the output.

Because this manual labor has dissolved, Skills will amplify your existing capabilities, but they’ll never compensate for a lack of domain expertise. A senior PM with agent Skills produces more senior-PM output; a confused PM with agent Skills produces more confused-PM output, faster. Amplification maximizes your output potential, but the quality of that output is a function of your own domain knowledge and expertise.1

We’ve seen this shape before. Accountants in the 80’s didn’t stop exercising judgment after the invention of the spreadsheet around 1979, but the manual labor of recalculating ledgers by hand vanished. When that happened, we observed the emergence of many new ways of doing “accounting work” that were tied to this new technological primitive (the spreadsheet).

Take one concrete example: the financial model as a living document. Before the spreadsheet, a question like “what if we raise prices by 10%?” meant an analyst re-running the math by hand across every dependent line, adding hours of work for a single scenario. After it, that same question became a cell edit, and the whole downstream model updated instantly.

This “tiny” shift birthed an entirely new work primitive: scenario planning as a casual, iterative act rather than a budgeted project you’d schedule a week for. And around that primitive grew whole roles (“financial analyst” as we know it now), new artifacts (the rolling forecast), and new habits (running ten scenarios before lunch), none of which existed in the ledger era because the seam was simply too expensive to cross more than once.

We are seeing something similar with agent Skills where it is not just that an old task got faster, but that new primitives are starting to show up and around them, new ways of working we hadn’t even thought to want.

In this chapter, I’ll discuss how work is changing, then walk you through the inner and outer patterns that are a result of my research into what goes inside useful Skills and what kinds of concrete workflows (seen as combinations of habits, artifacts, and new primitives) emerge as a result of their existence.

Patterns for Authoring Skills
In Chapter 3, I defined what makes a good skill and how to build one. With that mental model in place (clear criteria, single responsibility,..), let’s look at the design patterns emerging from proven real-world Skills.

These patterns reflect the structural moves that consistently appear in well-written Skills across unrelated domains. To make these inner patterns of agent Skills easy to compare and evaluate, each of the following describe a single pattern, followed by a real-world usage and other considerations.

Deterministic shell, dynamic core
Some of the best Skills I’ve come across separate very clearly two types of content living inside them. On one side sits everything that can be pinned down like file paths, output schemas, the exact command to run, the naming convention for the artifact. That stuff gets locked in with code or templated text because there is no good reason for it to vary from run to run.

On the other side sits everything that actually requires judgment, like the tone of the output, how wide to scope the work, or how to frame a tricky finding. That stays in prose (inside the SKILL.md body), where the model can reason about it in context.

Anthropic’s claude-api skill (their API documentation packaged as a skill) is a nice example of this split. The API endpoints themselves are perfectly deterministic, there is exactly one correct URL for creating a message, one correct shape for the request body, and no amount of “judgment” should ever invent a new one. So those live in the skill as fixed facts to be looked up. But the reasoning about which endpoint applies to the task in front of you, that part is genuinely dynamic, so it’s left to the model in prose. The shell holds the endpoints, the core decides which one the situation calls for.

I flagged this same idea back in Chapter 2: prose for judgment, code for the parts that must behave the same way every single time. The deterministic shell pattern is just that principle applied as a pattern for the SKILL.md body.

Separate skill, or accessible reference file?
If you have a chunk of design guidelines (a brand system, a style guide, a set of conventions), does it belong inside the skill as a references/ file, or does it deserve to be its own skill?

The answer lies in the shell/core distinction. If the guideline is something the agent reads before the work to shape its behavior (“here’s how our diagrams should look, internalize this and then draw”) then it’s a reference file. It’s input to the core, not a decision in itself. But if applying the guideline is itself a judgment call the agent has to make, like deciding when to apply it, when to override it, whether this particular case is an exception, then you have a decision with its own logic on your hands, and that wants to be its own skill.

In a nutshell: passive context that shapes the work is a reference, an active decision about the work is a skill. When you’re unsure about which one you’re holding, ask whether the agent is reading it or deciding with it.

Progressive disclosure as a writing tactic
I introduced progressive disclosure back in Chapter 2 as an architectural property, the mechanism that lets a skill folder hold a hundred pages of reference material without paying for all of it on every invocation. As a skill pattern, think of progressive disclosure as a writing tactic you apply sentence by sentence while drafting the SKILL.md itself.

The discipline is to write the body as if every sentence was being charged a tax, because in a very real sense, it is. Everything you put in the body gets loaded into context the moment the skill fires, whether the agent needed that sentence or not.

So the question to ask of each line is simple: does the agent need this to decide what to do, or only to do it well? The first kind stays in the body. The second kind gets pushed out to references/ and pulled in on demand. Beyond just organizing files here, you’re actively writing the body to be as thin as it can possibly be while still carrying the entire decision layer.

Anthropic’s own pdf skill (the one their docs use to show how loading actually works) is the cleanest live example of this tactic I’ve found. The body of the SKILL.md holds the quickstart, basically how to pull text out of a PDF, and then a single decision-shaped sentence: “If you need to fill out a PDF form, read FORMS.md and follow its instructions.”. That’s the whole move. The how of filling forms lives in FORMS.md, the detailed API reference in REFERENCE.md , and the validation logic sits in a script the agent runs without ever reading.

So when you ask it to extract text from a PDF and summarize it, the agent loads the thin body, decides form filling isn’t needed, and FORMS.md never costs a single token. Every sentence that survived into the body is there to help the agent decide what to do; everything about doing it well got pushed one level down, waiting to be paid for only when the task actually calls for it.

The viewpoint-simulator shape
The next pattern is for a skill whose entire job is to read an artifact and react to it as a specific named stakeholder. Not “review this document” in the generic sense, but “react to this PRD as the privacy reviewer”, “look at this deck as the designer who thinks everything we ship looks generic”, “tear into this proposal as the senior engineer who has seen every brittle dependency before and has no patience left”. The skill encodes a single, sharply drawn perspective and runs your work through it.

I touched on the viewpoint test in Chapter 3 as something you’d do to stress-test a skill. The pattern here is the natural next move where instead of treating that as a one-off mental exercise, you bottle the perspective into a reusable skill you can point at anything. I see that everywhere, especially talking to folks in product management where multiplying their perspective has notable gains on the quality of the final product.

One of the cleanest examples I’ve found comes from the now-famous github repo by Pawel Huryn, where this strategy-red-team skill attacks the assumptions of a product requirements document to surface load-bearing assumptions to strengthen the quality of the plan. You can find many others where specific personas are created to bring different perspectives into the generation of a specific artifact, and this red-teaming approach is just a very good example of an actually valuable one.

Don’t Average Your Experts
Before you go ahead and build yourself a synthetic boardroom of generic personas, a quick caveat: single-viewpoint Skills work best (as exemplified by this red-teaming one).

You can simulate different viewpoints but make sure each reflects one sharp perspective with a clear contribution. This falls apart when people try to assemble full persona panels, with five synthetic stakeholders all reacting at once inside the same skill. What happens in practice is that the perspectives average each other out and you get a generic consensus that’s less useful than any one of the sharp views on its own. The move is to keep each persona as its own well-scoped skill, run them separately, and read across the outputs yourself. The value here is in the distinctness of each viewpoint, which could be destroyed by a merged panel.

The self-updating skill
Start with a basic version of the skill that you will use for real, and the moment you catch it failing (producing something off, missing a case, getting a convention wrong) you turn around and ask the agent to update the skill based on the very failure it just produced. The skill improves through its own mistakes, in the loop, while you’re working.

I find this pattern satisfying because it inverts the usual relationship we have with our tools. Instead of the skill being this fixed thing you maintain on a separate schedule, the act of using it becomes the act of maintaining it. The failure isn’t an interruption to the work, it’s the input that makes the skill better next time.

I’ve seen two flavors of this in the wild. One is fully autonomous, like the hermes-agent autonomous-update demo, where the agent observes its own shortfall and rewrites the skill without a human in the loop. The other is more lightweight where a human-owned skill folder carries this feedback.md file as a sort of grievance-log convention. I mentioned in Chapter 3, where you jot the surprise down in two lines the moment it happens and feed that log back in when you do a real edit. So, you capture the failure close to where it happened, and route it back into the skill.

Who owns the iteration loop?
You might notice that patterns like the self-updating skill or the viewpoint-simulator don’t sit cleanly inside the SKILL.md file at all. They straddle the line between “a pattern in the file” and a full blown work primitive of the kind we’ll get to in the next section.

To determine which category a pattern belongs to, look at who owns the iteration loop. If the author of the skill owns the loop (i.e., the person is the one refining it, versioning it, and deciding what good looks like) then it’s an inside-the-skill pattern. If the loop is owned by the workflow around the skill (i.e., by the team, the ritual, or the way work moves between people) then you’ve crossed over into work primitive territory.

New Work Primitives
Now it’s time to go beyond how to write a better SKILL.md file and talk about how work itself has changed as a result of the general availability of agents plus Skills.

If the first half of this chapter was about success patterns for the internal architecture of a skill, this half is about the external blast radius of using one. When agents and Skills become a seamless part of your environment, the basic building blocks of knowledge work begin to look different.

In this section, we’re going to look at these through the lens of work primitives. Work primitives are the smallest repeatable workflow units where the friction of manual execution has finally dissolved. The following are specific patterns that define these new primitives in practice.

Notice that the examples don’t necessarily reflect using an agent and a skill, but they paint a picture of how work is changing because such powerful capabilities are now easily compressible into natural language instructions.

Brain Dumping
In Chapter 3, you used brain dumping as a step to design a skill. Here, brain dumping is the work itself. This pattern takes raw input, such as unstructured thoughts, recorded rants, or scattered process descriptions, and uses an agent like Claude Code, Codex or other process that turns it into a workable artifact.

The liberating power about this primitive is that it frees you to focus on what matters about the process, and leave to the AI the boilerplate stuff of transforming it into something actionable.

The shape this pattern takes is shown in Figure 4-1.


Figure 4-1. Brain dumping pattern.
This shape can take many faces, like you see companies now more than ever applying this pattern to their meetings, a common workflow is for people to record their meetings and then use an app like granola or notion to either transcribe it directly or like me you could set this all up with a skill but it does require some technical expertise for the transcription part (more on that later).

This is probably the more universal pattern I’ve seen folks from all backgrounds implement in their workflows. There are many different ways to use this pattern, so I’ll highlight just a few that reflect what this work primitive is about.

In the meeting operating system Granola, the app captures the meeting transcript live, with no note-taking happening during the conversation at all. The raw transcript gets processed into decision-ready files, such as follow-up emails drafted per owner, Slack messages queued, actionables extracted. The human’s contribution shrinks to showing up to the meeting, and reviewing what the pipeline produced. The manual labor of writing up the meeting has entirely dissolved.

The primitive scales effortlessly. For example, you could input 50 interview transcripts and output CSV and dashboards. Even better, you could compress interview recording directly into roadmap decision files cutting about four hours of triage work down to fifteen minutes.

The last example use case I’ll mention is my own. I’ve created a skill to transcribe and process my meetings, without the need for a paid transcription service. The skill is called meeting-recording-notes and essentially does the following:

I point Claude Code at a meeting recording (or just say “my latest meeting”, and the agent grabs the newest file from my Google Drive Meet Recordings folder).

Claude Code downloads the recording to my machine.

It runs my local transcribe CLI (a small wrapper around whisper.cpp), so transcription happens on-device, for free — no API calls, no subscription.

The raw transcript gets processed into clean, readable meeting notes.

The notes land as a markdown file in my Obsidian vault, and the agent replies with the file name and path so I can jump straight to it.

It is the same VOICE DUMP → TRANSCRIBE → PROCESS → GENERATE ARTIFACT shape, executed locally with a couple of lines of natural language wrapping a script.

Reactive brain-dumping
The reactive brain-dump pattern is when you record people’s reactions to some artifact like a prototype, a new feature on a website, even a PRD document, a draft, pretty much anything you can think of, and the transcript of that reaction containing the insights from that one (real) person is fed to a skill to be processed and produce some sort of useful artifact or an aggregate of artifacts (imagine like a notion database containing the feedback from an entire team).

The shape of this pattern is shown in Figure 4-2.


Figure 4-2. Reactive brain dumping pattern.
The only difference relative to the previous example is that here we start with a goal or artifact and we want insights on it from many people. Instead of subjecting them to annoying and sometimes useless meetings you can now just gather their reactions as simple audio or video recordings, and then process that input into something useful like an improved spec file, a list of tasks, and so on.

The sharpest version of this is the prototype-reaction loop: a PM records themselves reacting out loud to a prototype, the reaction gets transcribed, and the transcript feeds back into the spec that generated the prototype in the first place. The spec gets sharper, the next prototype gets regenerated from it, and the feedback was captured at the moment it was honest, not three days later in a polished comment.

The team-scale version replaces a certain kind of meeting. Say a new feature lands in staging and you want input from design, engineering and product. Instead of putting eight people in a room, each person records a two-minute reaction whenever they get to it, and a skill processes the pile of transcripts into one artifact: an improved PRD, a list of objections grouped by theme, a task list with owners. Everyone got heard, nobody scheduled anything, and the strongest objection arrives in the reviewer’s own words instead of a watered-down meeting note.

Hoarding the things you know how to do
The legendary Simon Willison once said:

“the key idea is that coding agents mean we only ever need to figure out a useful trick once”.

The core of this primitive is to save to files and notes, everything you know how to do, because now that knowledge itself is not static, but it’s a potential skill, therefore, potentially something that can become an automation.

So what should you be saving/hoarding? The answer depends on what your professional and personal goals are. In general, folks are now hoarding everything they figure out, and that pays off quite well.

Be it a coding problem, a guide to how to use a tool, a procedure for generating a nice artifact like an app’s special animated feature, whatever that is, if it matters to you, hoard it, because it now becomes something your potential agent + a skill can tackle for you and re-generate.

A good Skills example of this pattern is Matt Pocock’s Skills collection. The repo is literally his working directory, made public.

For the non-skills version, Simon Willison’s: tools repo holds over a hundred single-page HTML tools, almost entirely LLM-generated, and if you check out his colophon page where every tool links back to the commit messages and the chat transcript that produced it you start getting the picture of what hoarding can do for you (for him was the ability to generate rich html tools, for you this might be something different).

Think of this as hoarding the how: the transcript is the figured-out trick, saved where the next agent can find it, you can add in your personal customizations through a skill but the core to get here is about collecting solutions as bites somewhere easy to find.

Composability and the compounding skill
This next pattern is the process of composing artifacts and/or Skills together to form more complex workflows and generate more mature and ambitious outputs. One skill calls another, a workflow chains a brain dump into a spec, the spec into a prototype, the prototype into a viewpoint review of the kind we saw earlier in this chapter.

Outputs are now becoming future inputs (not always, especially due to the need of human checkpoints) so composability is becoming a practical trend for quality-aligned speed ups in productivity.

Once I started putting on this type of composability hat, I started noticing how easy it can be sometimes to generate a first working version of anything (not a perfect final product but like a working prototype for classes, for client MVPs, presentations etc..) by just composing from the right places.

The notes from today’s meeting plus some brain dump I did to a file, plus some input I got from an email can now be quickly compiled into a rich briefing to an agent, plus some optional skill to generate a useful first draft. I see this as a major working primitive now because you start developing this skill of identifying the composability potential of any one input, and you learn to do this sort of context math in your head asking like: “Is this context enough to generate X?”.

Here’s what the context math for this pattern looks like in practice. In the canonical brief-generation sequence, multiple inputs are composed into a single, actionable briefing, as shown in Figure 4-3.


Figure 4-3. Composability and the compounding skill pattern
The most complete packaged example I know of is EveryInc’s compound-engineering-plugin, a set of Skills and commands built around exactly this idea. Workflows through planning, building and reviewing stages. Every piece of work makes the next piece of work slightly cheaper. The compounding isn’t a side effect of the design, it is the design.

Warning
Before you go and chain everything you own into a single giant pipeline, be aware that a chained mega-skill that runs brain-dump-to-final-artifact in one shot consistently underperforms when compared to the same steps running as isolated Skills with a human critique between each one. The compound is real, the mega-skill is the anti-pattern (more on that in the anti-patterns section later in this chapter). Keep the stations separate, and keep yourself standing between them.

Async delegation and the checkpoint loop
Delegating work asynchronously is the primitive where we queue several agents on independent tasks at a moment when you were going to be away anyway, and come back to results that need your verification.

The canonical version is the “6am dispatch” example: before your morning routine you fire off a handful of tasks, each one independent of the others, then you go make coffee, exercise, take the kids to school, whatever your morning looks like. By the time you sit down, the work is waiting for you instead of the other way around.

The shape of this pattern is shown in Figure 4-4.


Figure 4-4. Async delegation and the checkpoint loop pattern
And this goes one step beyond dispatching before you walk away, because agents can now be put on a schedule, meaning the agent can wake up without you. Work kicks off at a fixed time every day with nobody at the keyboard, which quietly turns delegation from something you initiate into something that just happens on a calendar.

The new discipline this creates is checkpoint design where the question is not whether you review the agent’s output (you do, always) but where in the flow you place that review. Place the checkpoint too early and you’re babysitting, doing the work you were supposed to delegate. If you place it too late you’re rubber-stamping something you can no longer meaningfully challenge. Picking the spot is the actual skill here (the human kind).

One of the sharpest executions of the 6am dispatch comes from a surgeon (yes, a surgeon) who queues five parallel tasks before his morning meditation: email triage with drafted responses, a PowerPoint reorganized into a resident training talk, a branded HTML content calendar, a Downloads folder cleanup, and an interactive brief generated from a healthcare pricing report. His core principle perfectly captures the defining motto for this primitive: “Your scarce resource isn’t time. It’s decision-making capacity.”

The scheduled flavor of this pattern is the morning-briefing primitive: a morning scheduled skill pulls Gmail, the calendar, Sentry, the financial markets and a website health check into a single three-minute brief. The human’s entire contribution is reading the brief over coffee and deciding what, if anything, deserves attention. That reading moment is the checkpoint which is deliberately placed after all the gathering, but before any of the deciding.

Session-persisting “status” files
At the end of each work session, you have the agent write a structured status.md file (or any file that reflects the state of an ongoing process) capturing three things: what was done, what’s pending, and what the next session needs to know to pick up. The next session reads that file instead of replaying the entire prior conversation.

You can easily play with this right now by going into a long chat session you had with your model of choice and ask for it with a prompt like:

Generate a status.md file with what we did in this session, what is still pending and how could I pick it up later with a fresh new model. Output bulletized:

The reason this matters is that long-running work (a multi-day refactor, a week-long initiative, ongoing research) doesn’t fit in a single context window. The status.md is the bridge across windows.

I’d place this one right next to async delegation in your mental map. The checkpoint loop is what happens within a session, status.md is what makes that loop survive across sessions.

I run this pattern as a pair of slash commands (reusable prompt templates) in Claude Code, a couple dozen lines of markdown each. At the end of a working session, /create_handoff writes a timestamped file into a handoffs/ folder in the project, always with the same shape: what I was working on, what changed (as file references rather than code snippets, so the next agent reads the live code instead of a stale copy), key learnings including the things we tried that didn’t work, and next steps.

The next morning, a fresh session starts with /resume_handoff pointed at that file and picks up the thread in seconds. The folder itself turns out to be a nice side effect: a dated trail of every working session the project has ever had.

The first few times it feels redundant, like writing a note to yourself about a conversation you just had. Then a week-long piece of work crosses its fourth session and you realize the note is the only reason the work still has a thread at all.

Specs as the persistent locus of refinement
Earlier in this chapter I described fix-don’t-hand-correct as an inner-skill pattern: when the output is wrong, fix the skill, not the output. This primitive is the same instinct promoted to the level of whole workflows, things you might do on a daily basis.

Whatever the persistent artifact is in your workflow (a spec, a skill, a template), you treat it as the living artifact, and every revision that would have been a one-off edit to some downstream output goes back into it instead.

Refinement belongs in the spec. The downstream artifacts (the tickets, the drafts, the prototypes) are disposable, regenerated on demand. The spec is the one thing that accumulates. I see specs everywhere, especially when I speak to those in Product Management.

The use case for this pattern is any skill or spec you’ve improved more than three times, and there’s a self-test hiding in that sentence: if the third revision didn’t touch the spec, the spec is dead. You’re back to hand-correcting outputs while a stale document pretends to be the source of truth.

This pattern pairs naturally with decision-log autogeneration, which we’ll get to in a few pages. Both are living artifacts that grow with the work, they just grow in different directions: the decision log captures what was decided, the spec captures what should always happen.

Surfacing the Priors
Institutional memory is only valuable if you actually use it. The moment a new request, a new ticket, or a new initiative lands on your desk, you can use a skill to automatically surface the related prior material, such as past research, old tickets, sales call transcripts, notes you took eight months ago and forgot existed, and integrate them into your current workflow. The institutional memory gets pulled into the new context instead of waiting for someone to remember it’s there.

The shape of this pattern is shown in Figure 4-5.

Notice how this inverts the shape of the earlier primitives. Brain dumping goes from raw input to artifact. Here the input is the new thing, and the artifact is a connection map back to old things.


Figure 4-5. Surfacing the Priors pattern
Institutional memory becomes a callable resource rather than a wiki you have to remember to search. The difference between “we documented that somewhere” and “the related context shows up on its own” is the difference between memory you have and memory you actually use.

I use this pattern in the form of a relate-notes skill pointed at my Obsidian vault, and I used it while doing the research for this very chapter. I hand it the outline I’m working on plus either specific source notes or just a description (“all my notes on context engineering”), and it mines those sources for the blocks that genuinely support specific bullets in the outline, plants an anchor on each one, and links them back into the outline exactly where they belong in the argument. The rules doing the heavy lifting are written into the skill itself: three high-signal links beat ten thematic ones, don’t invent connections, and placement is the argument, so no dumping links at the bottom.

The pattern is easily scalable. Imagine a product process where an incoming initiative automatically gets its related prior research, tickets and sales calls attached before anyone starts working on it, so the new work begins already standing on everything the team has previously learned.

Agents in the browser
Deploying agents in the browser means the agent acts on the web directly: clicking, scraping, screenshotting, navigating, filling forms, as a routine part of the workflow rather than as a one-off party trick to do things like testing web app features, do QA testing, give feedback on styling and layout among many many other examples.

The agent in the browser deals with the web as a human sees it: pixels, layouts, modals, cookie banners, the button that moved since last week. That turns out to be its own discipline, with its own failure modes, and treating it as just another integration is how people end up frustrated with it, so folks use a variety of approaches from writing their own Skills for small actions in the browser like taking screenshots, sometimes using full mcps like the playwright mcp, or using the built-in computer-use features of the main AI apps they use like Claude Chrome or computer use with codex.

You can see this pattern on the product side through the Claude Chrome extension, which runs browser tasks inside your actual logged-in browser, and Claude desktop can dispatch browser work the same way.

On the skill side, I’ve built screenshot-driven Skills for grabbing and processing whatever is on my screen, and I’ve found that a purpose-built agent-browser skill consistently outperforms pointing the agent at a raw Playwright MCP server, precisely because the skill encodes the discipline part: when to screenshot, when to re-find an element, when to give up and ask.

You can also see this pattern in Vercel Labs’s agent-browser.

Vibe-coded intermediary artifacts
When the output of a workflow is something you need to look at and reason about, the agent renders it as an interactive HTML artifact rather than a wall of text. The division of labor is that markdown is the substrate and HTML is the lens.

The durable knowledge lives in plain markdown files (notes, transcripts, logs), and whenever it’s time to actually see the work, the agent generates a disposable dashboard, an explorable view, a small interface on top of it, that’s the pattern, the in-between app you create for yourself usually via HTML to get something done.

This is, without a doubt, my absolute favorite primitive. It’s about generating functional software for intermediate crucial points in your workflow.

It could be a dashboard nobody but you will ever see, a one-off scraper, a temporary internal tool. The software itself is not a product to share per se but a link between two stages of someone’s work.

To give a more concrete notion for this without getting super specific, imagine that you want to visualize information from your calendar but mixed in with information from elsewhere. Instead of having a split browser layout with the app on the left and calendar on the right, you could ask your agent to code up an artifact that dynamically fetches the data from your calendar and the data from that other app (say its Slack, maybe local files, a table, database, doesn’t matter, see Figure 4-6) and you can generate something new that shows you exactly what you want instead of having to navigate and context switch between multiple apps.


Figure 4-6. VIbe coding an ultra custom calendar view.
The prototypes are durable thinking artifacts, not deliverables: you build the thing to understand the thing, and the understanding is what survives.

Intermediary artifacts have varying expiration dates depending on what they are for and how they are used. But if they get discarded the moment the next one is built that’s fine, because the role of this type of software is not to sustain thousands of users and the plague of production, but rather to solve a tiny little issue in your workflow, a thing so personal to you that’d be hilarious to share with others.

A small one from my own work: my quiz-generator skill. I point it at whatever I’m studying or about to teach, it generates a question file and opens it inside a quiz app that is itself a vibe-coded, single-file HTML page. This little app’s only audience is me, drilling content before a course, and each quiz gets discarded after the drill.

One of the Skills I reach for most is my decision-deck skill: hand it any list of options, twenty blog post ideas, fifteen candidate course titles, a pile of paper abstracts, and it generates a swipeable single-file deck, one card per option, arrow keys to move, K to keep, D to delete, and a button that exports the survivors as markdown. The app exists for exactly one decision. Once the shortlist is made, the file has no reason to live, and it doesn’t.

Another example skill I often use is my html-tool-generator skill, which works as a factory for this whole pattern: it vibe-codes new single-file browser tools on demand, following similar ideas I mentioned earlier in the hoarding section, plus the lessons Simon Willison taught on his piece about html tools: everything sits in a single HTML file (javasccript, css and html), dependencies from a Content Delivery Network (CDN)2, API keys in localStorage, no build step to break. None of these tools were engineered in any traditional sense: they were described into existence in natural language, and they are maintained the same way, one sentence of feedback at a time.

Another public example is the visual-explainer skill, which turns whatever you point it at into a visual interactive explanation.

Dashboarding and html slides
Remember the 2026 PM from the start of this chapter, the one who got a CSV plus an interactive HTML dashboard out of 50 transcripts? That dashboard wasn’t a special request. This output mode is becoming the default, because when generating an interface costs nothing, “here’s a page you can click through” beats “here’s a summary you can read” for almost anything with more than one dimension.

The same move works for slides. Markdown-to-deck tools (such as Marp) let an agent turn the same substrate into a presentation instead of a dashboard. If presentations are a big part of your output, know that the markdown-substrate, HTML-lens logic applies to decks too.

Decision-log autogeneration
From any rich raw input, a meeting, a long conversation, a code review, the agent generates a structured log of what was decided and why. Not a summary, not minutes, specifically decisions plus the reasoning behind them.

Logging decisions (not just outputs) is the missing primitive for team communication. Everything else a team produces is some form of report, and reports tell you what happened. Decision logs tell you why the world is shaped the way it is, which is exactly the thing new team members, future you, and every downstream agent keep having to reconstruct from scratch.

One version of the pattern in practice is a decision log auto-generated from the working conversation and attached directly to the spec, capturing the discarded paths future readers will want to see. Pair this with the “Specs at Persistent Locus of Refinement” pattern and you get a tidy pair of living artifacts, the spec holding what should always happen, the log holding what was decided along the way.

Structured note-OS / digital-brain Skills
Structured note-OS or digital-brain Skills have become increasingly popular, partially because notable experts such as Andrej Karpathy publicized them. You talk, and the system files and structures your notes the, tagging, and linking them into the existing graph of everything you’ve previously captured. I see it as a sort of merge between the brain dumping primitive combined with a filing system that works as a full operating system for what you know.

My first time approaching this type of workflow was by writing custom commands that would take input and write a sort of summary note to my obsidian vault and then linking them to what I call my “main” note which is essentially this one note approach I was doing a lot inspired by this piece by Andrej Karpathy on the subject.

From that, realized I wanted a more systematic way to “ingest” and connect my notes together, specially when it came to relating them to my projects. That led me to this repository, Daniel Agrici’s claude-obsidian project, which layers an agent-maintained wiki on top of a plain Obsidian vault without touching the notes you already have.

The workflow is exactly the systematic “ingest” step I was missing. It allows me to drop a source into a .raw/ folder (a transcript, an article, a PDF, a URL) and say “ingest”, and an agent reads it, extracts the entities and concepts worth keeping, files each one as its own small wiki page, and cross-links the new pages into everything I’ve captured before, including my existing project notes. Every operation gets appended to a log, and every session ends by rewriting a ~500-word “hot cache” note of recent context, so the next session starts already knowing where things stand instead of rediscovering the vault from scratch.

The shape of this pattern is shown in Figure 4-7.


Figure 4-7. Structured Note-OS / Digital Brain pattern
Docs converted into Skills
Documentation is increasingly being packaged directly into Skills. In this pattern, API references and system documentation live as fixed facts the agent looks up rather than pages a human reads.

The scale of this shift is what makes this pattern more than a curiosity. At the time of writing, Anthropic’s own API documentation is shipped as a skill. The Google Workspace CLI ships with over 40 Skills out of the box. These are large vendors converting their own docs into skill form, not just users doing it for them, which tells you where they think the docs are actually going to be read from now on.


Figure 4-8. The raw input → actionable artifact shape. On top, the generic form of the primitive: unstructured input goes in, an agent does the transformation, a decision-ready artifact comes out. Below, the meeting OS as one instance — a live meeting transcript becomes follow-up emails, queued Slack messages, and extracted actionables, with the human’s job reduced to showing up and reviewing.
The implication, stated plainly: documentation and Skills are becoming interchangeable artifacts. There’s early benchmark evidence that Skills outperform plain docs on procedural tasks, which if it holds means “write the docs” and “write the skill” stop being two different jobs.

The single high-leverage artifact
Workflows are increasingly converging into one big principle: the human’s intellectual contribution concentrates into one document, and the agent propagates that document downstream into everything else. From one roadmap, spec, or research synthesis, an agent can generate the related tickets, drafts, and reports.

This pattern is the quiet thesis of this whole chapter: the goal of the rest of the workflow is to shrink the human’s surface area until what they touch is genuinely load-bearing. Every primitive we’ve covered, the dumps, the checkpoints, the specs, the vibe coded html tools, is in service of that concentration.

The shape of this pattern is shown in Figure 4-9.


Figure 4-9. The single high-leverage artifact pattern
You don’t want the human touching less because the human matters less. You want the human touching less because everything they touch should matter more.

In practice, I’ve seen this concentration of effort can look like the following: First, a PM roadmap that auto-generates a hundred tickets, each one carrying the strategic context of the roadmap down into the work. Second, public-roadmap autodrafts generated from the internal artifact get accepted at a 70 to 80% rate, which tells you the single document is carrying enough signal to survive propagation. Third, the Bloom skill for early feedback, where a solo PM uses one skill as the leverage point for what used to require a full feedback team.

Anti-Patterns
Every pattern you’ve learned so far is something people are doing more of because it works. But, the core pattern of this chapter, that of compressing the manual labor of A → B → C down to A → C, has a dark mirror. These are shapes that look like compression and feel productive while you’re inside them, but secretly make the work worse. You adopt a workflow that makes you think you are now doing A → C while actually you’re doing A → C → B → A.

These anti-patterns are not simply the opposite of good practice. Each one is the failure mode of one of the legitimate patterns we just covered, and that’s exactly what makes them dangerous.

They’re good practice with a missing piece. Some of them are about writing the skill wrongly, most of them are about working with these capabilities wrongly, and the line between those two is blurrier than you’d expect.

Fix the skill not the output
If a skill gives you a bad output, don’t hand-correct that output. This one is closely related to the self-updating pattern. Take the lessons from the mistake and feed them back into the skill as improved instructions.

When you log the error into a feedback.md file or rely on an autonomous improvement loop, the underlying principle remains the same. Manual corrections are a signal that the domain knowledge you’re bringing to the table has not been properly encoded. Every time you fix a generated draft instead of fixing the skill, you are wasting your expertise on a disposable artifact. Feed that knowledge back into the skill so the mistake never happens again.

One common thing that happens is people overdoing it on hand correction to an extent where they’ll never find out what Agents are truly capable because they’re stuck fixing small issues that were easily avoidable by just adding them as one liner instructions in the SKILL.md.

The mega-skill
A mega-skill is one enormous skill that tries to do five things at once. It brainstorms, drafts, formats, publishes and notifies, all from a single SKILL.md, and the model loads the whole thing into context for tasks where only one of the five is relevant.

This is the failure mode of composability. The entire reason to keep Skills isolated is that human critique must sit between steps. A mega-skill removes the space you were supposed to occupy. The chain runs end to end, a bad intermediate output poisons everything downstream, and by the time you see the final artifact you can’t tell which station produced the rot.

The single-responsibility test from Chapter 3 applies here with full force: if you can’t describe the skill in one sentence without the word “and”, you’re looking at a mega-skill wearing one hat.

Fine-tuning a bad output instead of fixing the spec
Consider a research-report skill that generates markdown reports with linked sources. An early version of it produced reports that looked finished and read hollow. The temptation is to hand-edit the output: tighten the summary, cut the padding, fix the sourcing. Good edits, every time.

Three reports later, you realize that you are making the exact same edits for the third time, because the skill had never seen a single one of your corrections. You are domain knowledge into disposable outputs while the thing producing them stayed frozen.

The fix is the pattern I already named: refinement belongs in the spec. Apply the “Fix the Skill, Not the Output” rule. Don’t just fix the bad output, hand it back to the agent, and ask it to improve the skill so this class of mistake doesn’t happen again. One conversation, and the correction becomes permanent instead of weekly.

This is the failure mode of the self-updating skill and of brain-dumping like workflows. Both are very common, so watch out!

Reporting slop
Reporting slop refers to AI-generated reports that look professional, with the formatted tables, the confident summaries, the executive headers, and encode no real signal. The reader can’t tell from the surface that the content is hollow, which is precisely the problem: the surface is all there is.

This is the failure mode of brain dumping and could be really the failure mode for most patterns we’ve discussed so far. The shape of the artifact gets preserved while the substance dissolves, and at organizational scale it compounds into something worse: more low-signal documents circulating, bots triggering bots, one automated report feeding another until a label change from one bot kicks off a cascade nobody designed.

Note that this is different from treating outputs as copy-pasteable. That is a user failure, accepting a draft uncritically. Reporting slop is an artifact failure: the artifact itself is camouflage.

Trusting AI scores over your gut
The trap of trusting AI scores over your gut can unfold like this: A PM builds a scoring system for prioritization. The ranked list comes back and disagrees with the PM’s intuition about what actually matters, so they start tweaking the weights, the criteria, the scoring system itself, anything except the simpler move: trusting the judgment they already had.

The disagreement was the valuable part. When a model’s ranking conflicts with your gut, that conflict is information, either about the inputs you gave it or about an assumption you’re holding. Fiddling the weights until the conflict disappears destroys the information and launders your intuition through a spreadsheet so it looks objective. The right contract is absolute: the agent gathers, frames and synthesizes, and the human keeps the final decision, because deciding is the part that was never in the 85% of setup work.

This is the failure mode of running structured input through a rubric to get a scored output: the human at the end forgot the score was supposed to inform the decision, not become it.

Treating outputs as copy-pasteable
Treating outputs as copy-pasteable ignores a fundamental rule of agentic workflows: Outputs are drafts. Always. Even when they look done. Especially when they look done, because the polish is the trap: a generated artifact arrives wearing the visual signals of finished work, and those signals used to mean a human had checked it.

This is the failure mode of the checkpoint loop. Skipping the review because the output looks finished is rubber-stamping with extra steps.

One concrete defense you can build into the skill itself is to instruct it to flag missing information as questions instead of papering over the gaps. A draft that says “I couldn’t find the Q3 number, confirm before sending” keeps you in the loop. A draft that confidently invents the Q3 number is betting your reputation on nobody checking.

Downloading random Skills from strangers
While finding and sharing Skills is incredibly useful, it has a dark side. When an agent loads an unvetted skill into context, and you’ve effectively pasted a stranger’s prompt into your professional workflow, possibly one with access to your files.

The defense against this is a strict, but brief hygiene checklist:

Who wrote the skill? This tells you the skill’s provenance.

How many stars does the repo have?

Have you actually read the SKILL.md?

Does the skill touch your data?

These are four questions that will take you maybe two minutes. If you wouldn’t run a shell script you’ve never opened, don’t install a skill you’ve never read, because that’s what a skill is: instructions someone else wrote, executed with your access.

The Deliberately Bad Prototype
One technique that looks like an antipattern but is actually a powerful tool is the deliberate bad prototype. You intentionally build a bad version of the spec, the manipulative onboarding flow, the dashboard that buries the number that matters, to probe the extremes and surface what could break or be misused before anyone builds the real thing. It looks like reporting slop from a distance (a polished artifact that’s wrong on purpose), but the difference is the whole point: the badness is deliberate, bounded, and produces insight. The anti-patterns previously discussed are accidental, and what they produce is false confidence.

The Emerging Skill “Economy”
So far every pattern you’ve learned lives between one person and their agent. But a skill is, at the end of the day, a folder of text, and a folder of text is a transferable artifact. The moment it leaves your machine, it stops being personal, and that’s when things get interesting: Skills start moving between people, between teams, and between wallets. This movement of Skills between people is exactly how technology is being absorbed.

Unsanctioned skill economies
People have started asking coworkers for a skill for a given task the way they used to ask for a script or a spreadsheet template. “Hey, can you send me the skill you use for those reports?” This is an informal, unsanctioned economy of skill files moving through direct messages, kind of like a shadow skills market going on inside companies.

Skill authorship is becoming a visible form of organizational influence. The person whose Skills everyone borrows occupies a strange new position on the org chart, somewhere between “the person with the good template” and “the person who trained half the team”, except their training scales without them being in the room.

Organizational skill directories
An organizational skill directory is the legitimate sibling of the unsanctioned skill market: a company-internal directory of reusable Skills, referenced from every team’s claude.md or agent.md, version-controlled the way wiki pages never were. The informal flow gets noticed, and the company makes it official.

The clearest live example is Anthropic itself, where teams across the company, including non-engineering ones like legal, build and share Claude-powered workflows internally, and where the plugin system in Claude Cowork exists for exactly this, deploying curated skill collections across an organization. The directory turns “ask Maria for her skill” into “it’s in the company folder”, which is considerably more durable than the DM economy it replaces.

Skill-finding as its own skill
When skills become assets, finding the right one becomes a task. The de facto public index, as of writing, is VoltAgent’s awesome-agent-skills list, which is where you’d start if you’re hunting for prior art instead of writing from scratch.

The section title is meant literally, by the way. Skill-finding has already been packaged as a skill: Vercel’s find-skills skill triggers when you ask “is there a skill for X?”, searches the skills.sh registry, weighs install counts and source reputation, and installs the winner through the npx skills CLI3. The agent now shops for its own capabilities. The pattern also has an inward-facing sibling: Jesse Vincent’s superpowers bundle ships a meta-skill whose only job is to make the agent check its already-installed library before improvising, on the theory that an agent that forgets it owns a skill functionally doesn’t own it.

Discovery pointing outward, recall pointing inward: both are skills about skills, and both exist because the bottleneck has moved from “can the agent do this” to “does the agent know someone already taught it how.”

However, the strict hygiene from the anti-patterns section applies double here. Ask: who wrote it, how many stars, read the SKILL.md before it reads your data. Finding a skill is cheap now. Auditing one still costs exactly what it always did.

Skills as runbooks for teams
Treating skills as runbooks for teams reveals why this sociotechnical movement is happening: a skill is a new kind of documentation, readable by humans and executable by agents at the same time. In the old paradigm, a tip shared in a meeting would evaporate, a wiki page would maybe survive but rot. A skill, on the other hand, survives, runs, and fails visibly the day it goes stale, which is more than you can say for any runbook your company currently maintains.

I’ve watched this play out in internal training sessions where the demo is the deliverable: you present the workflow live, then share the folder, and everyone in the room leaves with the working version of what they just watched. The presentation and the handoff stop being two separate acts. And notice what actually changes hands when a skill moves: the author’s seam, their decisions about where judgment ends and automation begins, now running in someone else’s workflow. That property, more than status or money, is what’s actually pushing Skills between people, and it’s why organizational skill directories will ultimately outlive the shadow skill markets or whatever you decide to call it.

When a technology is new, the first users reach for the shape of the previous technology, because that’s the reference point everyone holds. Early television was radio with a camera pointed at it. We are seeing the same phenomenon play out of the emerging sociotechnical patterns: Early skill markets are wiki pages with money attached. Early organizational directories are SharePoint folders with version control. Whatever you see people doing with Skills today will look quaint in a few years’ time, and that’s not a reason to dismiss the field report, it’s a reason to hold it lightly.

Conclusion
The pattern beneath the patterns of this chapter is the compression of the seam, meaning the action of reducing the friction that exists between a thought and the thing it can produce. This seam is present at different scales. Inside the Skill, we try to condense expertise inside the SKILL.md body to get around it. Outside the Skill, the placement of necessary human checkpoints interleaved with moments of restricted agent autonomy allow a strategic pause to the workflow for the load-bearing human contribution. The anti-patterns are what happens when we compress the seam either too much or in the wrong place. The socioeconomic patterns are what happens when the removing friction for one person becomes valuable enough that is worth sharing it with others. Each layer closes one gap and exposes the next.

The goal of all these patterns is the same, to shrink the human’s surface area until everything they touch is genuinely load-bearing. The artifact gets bigger, the interaction gets smaller, and Skills are the mechanism that makes that shrinkage repeatable instead of a one-off productivity story.

Ultimately, the shift boils down to the core question: how do we optimize human intervention while leveraging what agents and Skills can do, and does that inform how we work or how we should work?

Every pattern in the work primitives section designs for the human checkpoint and every anti-pattern sabotages the human intervention.

Patterns describe what people are doing. The harder question that remains is how you tell, in your own work, which pattern is the right one to reach for. In the next chapter we’ll be covering concrete examples where Skills can bring in genuine value.


