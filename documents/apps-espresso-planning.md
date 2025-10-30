# Apps Espresso Planning

**Document:** Doc outlining Dia's Apps Espresso plan to make meetings best-in-class via Google Meet integrations and proactive suggestions, with goals, metrics, teams, risks, and dependencies.

**URL:** https://www.notion.so/browserinc/Apps-Espresso-Planning-2846125036768032aee2dbf910448d83

---

## Team

Alexandra, Rishi, Tara, Matt, Ben, Jlo, Charlie, Kasper, Freddy

## Planning Week Outcomes

By end of week, we will have:

1. **Clear workstream goals** aligned to company P0/P1 priorities and success metrics
2. **Quality & reliability metrics framework** to guide prioritization
3. **Day 1 projects** identified with owners and feature templates fillˇˇed
4. **How we work norms** (standups, channels, meeting cadence)

## Planning Week Questions

### Meetings

- **What’s our framework and definition of value for these integrations?**
    - Value is defined by improving in-app workflows were the browser has unique leverage (cross-app context, persistent panes, proactive suggestions), with a meet-first focus for Espresso
    - We think valuable integrations are:
        - Timely: show up exactly when and *where* you need them (prep, in-meeting, follow-up moments).
        - Reliable: data is fresh and correct.
        - Low‑noise: only appear if useful.
    - And success looks like…
        - Action features (e.g., Meeting Reminder, Follow‑up capture): prompted tasks get done faster than baseline.
            - Metric: Clicks/Completion, CTR, How fast action is completed vs before
        - Content features (e.g., Meeting PIP, pre‑meeting context pane): panes stay open and are actively used during the workflow.
            - Metric: % of windows kept open past a minimum dwell time during the workflow, interaction with window
- **How should we prioritize which Integrations to build?**
    - We will sequence by “fixable gaps now” and “browser leverage,” then generalize proven patterns to other apps.
    - Our most immediate priority is finding *extreme value* – before thinking about co-marketing opportunities. We will approach workflow by workflow (i.e. Meetings, Documents, Code, Issue Tracking) and prioritize specific integrations through:
        1. **Internal use**. If our priority is proving utility, we need to iterate very quickly. Prioritizing integrations our team actively help us to that.
        2. **Dia member use + Co-marketing opportunity.** Once we prove internally, prioritize tools Dia members currently use (that we can co-market with) to measure reliability and value. (If we’re ready to dogfood with Atlassian employees, we can consider them in this bucket as well).
        3. **Overall TAM.** 
    - We will address this with the following:
        - Phase 1: Prioritize integrations that unblock meeting prep/run/follow‑up and are feasible today, and that we have extreme confidence in given our history with Arc.
        - Phase 2: Apply the same integration primitives (timely surfacing, reliable context, proactive suggestions) to other popular web apps.
    - Tactically, this might look like: Notion (prove value internally), Confluence (Member/Co-marketing), Google Docs (TAM).
    - We think we can sequence such that in any given cycle, in parallel, we’re proving value for (1) new workflow and adding new integration for (1) proven workflow.
- **What are the first few after the google meet suite?**
    - After Google Meet Suite, we will split our efforts into the following:
        - First, fleshing out the primitives we introduced with the google meet features across more apps
        - Second, finding new primitives based on use cases from other web apps (eg, docs).
    - Fleshing out the primitives: Continue to invest in the “PIP Everything” approach, and building out a preview / PIP system specifically for:
        - Media player (from Arc)
        - Continuing
    - Finding new primitives: (Likely blocked by tab management work): Github Live Folder + Builder
        - Ship GH Live Folder on top of new folder primitive
        - Builder is a simple prompt-based input for describing what you want in a live folder or widget (a la rishi's proposal)
        - Use builder to try lots of ideas, with an eye towards Jira and Linear

### Proactive Suggestions

- **How do we ensure overwhelming utility and consistent responses — e.g. a process for prototyping widely (to de-risk value) and then dialing in quality? What’s our success metric?**
    - We want to orient around 2-3 golden use cases (since the space is so broad), e.g. “continue where you left off” “prepare for your day given context” “remind me about action items”.
    - While we’re internally prototyping, keeping these features very loud will maximize feedback (same as how we did Memory Profile). We’ll also designate a consistent set of people will do 2x/week live vibe checks (we did this for overall AI quality leading up to GA and it was very helpful).
    - Success metric: when we survey employees, > 50% say “I’d be very disappointed if this feature went away”. We can look at individual CTR/x-out rates but think this will be most illustrative.

## Team Mandate & Milestone Goal

**North Star:** People find value in using their Web Apps in Dia more than they do the native desktop client, or any other browser.

### Meetings

**What Success Looks Like at End of Espresso**

Make Dia the best browser for meetings by end of Espresso. We will do this by attacking the journey: pre, mid, and post-meeting. 

We’re starting with Google Meet to deliver immediate, high‑impact improvements we can port from Arc to Dia, and we’ll go deep: ship 5 dedicated Meet integrations on a steady cadence so members feel “can’t use Meet without Dia” value. To do this, we will need to leverage the context of Dia in order to bring you what you need in the right moment, via integrations with your Calendar, Mail, etc. 

**Specifically, we will:**

- **Improve the pre-meeting experience**
    - Ship a proactive-tab, so that you don’t miss a meeting (Calendar Integration)
    - Ship a high quality experience for viewing upcoming meetings, so you know what is next. (Calendar Integration)
- **Ship mid-meeting improvements**
    - Don’t lose context when you switch tabs, Meeting PIP will help you stay in the meeting while navigating within the browser
    - Never ask again whether people can see your tab, Dia has your back and makes it obvious with UI indicators
    - When you reach for resources during a call, we can bring the most likely URLs to you by leveraging memory, and metadata from the meeting invite
- **Explore post-meeting improvements**
    - Leverage the AI notes from the meeting to suggest action items, likely leveraging the UI components we build in Workstream #2
- **Build an extensible system that we can scale for other apps**
    - Introduced new primitives which can be used across popular web apps, not just limited to calendar, such as proactive suggested tabs, custom document pip, etc

**What we want to measure:**

- Success via WAU, with DAU observability - given we are focusing first on Google Meet, d4/d7 is a reasonable first measure (assuming peoples meetings are 4/7 days frequency).
- Users of the integrations features are highly retained - both to Dia and to the integration itself. Eg, people continue to rely on the proactive tab suggestions, and also retain on Dia.

### Proactive Suggestions

**What Success Looks Like at End of Espresso**

We will have defined, prototyped, and shipped one configurable surface that aggregates and ranks suggestions via a custom prompt, with clear decisions on cadence, placement, and presentation.

**Specifically, we will:**

- **Proves overwhelming utility:** members report they’d be very disappointed to lose it, and daily, low‑noise proactive suggestions help people prepare, continue where they left off, and complete actions with less cognitive load.

**What we want to measure:**

- When we survey employees, > 50% say “I’d be very disappointed if this feature went away”.
- The “downvote” button feedback is less about general feature feedback and more about polish / quality feedback of suggestions

## Principles

1. **Play to the browser’s strengths**: Many web apps are building native AI tools with a level of access and context we cannot match at the browser layer. We should focus on features where the browser is uniquely positioned to improve the experience.
2. **Focus first, design for reuse**: We’ll start with sharp, specific use cases, and build them to scale across apps. We’ll build features that benefit many apps beyond the focused use case, with each one acting as a scalable proof of concept.
3. **Prioritize automatic value, and allow auth for added value**: Automatic authentication is a nice-to-have, but we should not shy away from valuable features simply because they require app specific authentication. 

## Day 1 Insights priorities

We have line of sight to extremely valuable features due to our experience with Arc, so we do not have any Day 1 asks. However, we will be working closely with Data + UXR as features are released to ensure we are learning from what members say. 

## Workstreams

## Workstream 1: Meetings

- **What are our goals for the milestone?**
    - P0: Prove extreme value in a Meet-first workflow where the browser has unique leverage (cross-app context, persistent panes, proactive suggestions) by shipping 5 features that ladder up to an experience that people cannot live without.
    - P1: Close the biggest, known product gaps quickly, then generalize the proven primitives to other high-usage web apps.
    - P1: Establish reliability and low-noise standards so integrations feel timely, fresh, and helpful—not distracting.
- **How will we know we succeeded?**
    - *What do we want to hear members say?*
        - “Dia is the best browser for Google Meet.”
    - *What measurable results do we want to see?*
        - Action features (e.g., Meeting Reminder) have a high click-through-rate.
        - Content features (e.g., Meeting PIP, pre-meeting context pane) stay open and are actively used during meetings.
    - *What demos do we want to enable?*
- **Team:** Freddy, Ben, Charlie
- **Day 1 Projects**
    - [Open Resources for Meetings](https://www.notion.so/Open-Resources-for-Meetings-28861250367680bfa994cf9d504a58bd?pvs=21)
    - [Meet Tab UI](https://www.notion.so/Meet-Tab-UI-2886125036768073b96ac5fd9d6d3acb?pvs=21)
    - [Tab Sharing UI](https://www.notion.so/Tab-Sharing-UI-28861250367680f5aea6f43bbf9b9145?pvs=21)
    - [Proactive Meet Tab](https://www.notion.so/Proactive-Meet-Tab-2886125036768074b7a4eed7ead98d1b?pvs=21)
    - [Google Meet PIP](https://www.notion.so/Google-Meet-PIP-2886125036768029a3f7dd67a2646d89?pvs=21)
- **Other projects this Milestone**
    - As we see opportunities to scale these primitives to new Web Apps, we will invest our resources into this.
        - Eg: “PIP Everything” exploration: Extend preview/PIP primitives to media players (Arc heritage) and meeting-adjacent surfaces.

## Workstream 2: Proactive Suggestions

- **What are our goals for the milestone?**
    - Dia reduces cognitive overload by synthesizing context across apps and providing relevant suggestions.
- **How will we know we succeeded?**
    - When we survey employees, > 50% say “I’d be very disappointed if this feature went away”.
    - We have added a thumbs-up/thumbs-down feedback system that primarily cites fixable polish / timeliness but not correctness or usefulness.
    - Users click at least one proactive suggestion per day.
    - Feedback about these being distracting is minimal.
    - By the end of Espresso, users prefer using web apps in Dia over native desktop apps, because the aggregate experience is better in Dia.
- **Team:** Rishi, Matt, Kasper
- **Day 1 Projects**
    - [Proactive Suggestions](https://www.notion.so/Proactive-Suggestions-2866125036768003b3eff697588bd67f?pvs=21)
- **Other projects this Milestone**
    - Some tentative ideas.
        - A finder or wiki style experience for exploring people, projects, events, and files synthesized by memory.
        - A dock-style navigation paradigm for moving between web apps that acts as the central hub for the synthesis experience.
        - New first-party skills (eg, Journal) aimed at synthesizing context across apps.

## Risks

1. We spend a lot of time building really specific features for Google Meet that do not scale to other Web Apps, and we have to start from 0 again with App #2. 
2. We go too broad and introduce a lot of new primitives to the system, which do not have a cohesive experience within the app.
3. Getting reliable data is harder than we expect
4. If apps make changes, we will have to adapt and ensure we are keeping up. 
5. We spend a lot of time prototyping Cross-Context in workstream #2 but never have enough confidence to ship something

## Dependencies

**Our asks OF other teams**

- **Browser**:
    - **The tab management system**: will be a prerequisite for us introducing some sort of live-folder system.
    - **Tab strip integrations:** will be part of the way we make web apps feel unique and special in Dia
    - **Navigation intercepts**: so that we can intercept when the user has joined a meeting.
- **Chat**
    - **Memory**: will be important for us building a useful list of suggestions
    - **Tools**: will be important for taking action via suggestions

**Asks FOR us from other teams**

- …

## Open Questions

- Do we need to block live-folder work on a tab management primitive landing in the product?
- Should no-auth be a pre-requisite for features that we build?
- Should we limit the first few projects to Arc parity, or go more blue-sky?
- Should we continue to go deep on another app, or try to go more broad with our primitives once we have landed on them?

---

# Kickoff Meeting

## Workstream 1: Integrations

![image.png](attachment:ea455e08-d209-4304-80d0-a65bcf80cb36:image.png)

### **Crit Presentations**

- #2 (Rishi): Pulling information with skills as a building block - a replacement for github folders
    - May be convinced this is not the right model. Problem statement still stands, but building a platform for widgets is quite manual for solving out goals.
- #4 (Tara): Instagram Stories for your pinned tabs
    - Not a lot of conviction here, but there is a hypothesis on navigation + catch up. Could we treat your tabs the same way Instagram treats your close friends?
    - Ideally the content would be good, and this reminds us of the previews we had in Arc.
- #5 (Charlie): PIP Everything
    - This is re-usable. Once we have the user behavior, they will have exceptions here.
    - There is only so much room for UI, and the user will be in control of how much UI they are seeing.
- #10 (Ben): Head Start
    - Identify pressing work across services, and start a first draft of it.
    - 

https://www.figma.com/board/7o94CD17gEZrNT6ftZHugH/Shaping-Week-%7C-Crit?node-id=0-1&p=f&t=nBL4m0O9M7JXlTQa-0

### Problems to Solve

- Ben:
    - Fragmentation is a big problem in the modern work world. In a browser, this feels overwhelming.
    - Github live folders takes something that was hidden and important and brings it to the organizational layer of your browser.
    - Search. it's hard to quickly find stuff across services (people tokens was a proposal around this problem)
- Freddy:
    - Choices are: allow notifications from web pages, or have a bunch of sites that you need to pull data from.
    - Live calendar + github folders was a way to bring this information to you at a glance where you would look for it.
- Tara:
    - Missing the moment - specifically thinking about meetings. Pre meeting making sure I join on time and that I have what I need. Ideally there is just one workflow for this.
- Rishi:
    - Feels like there is a distinction between push and pull models. The only option for a push model is a live feed of aggressive notifications that you have to triage. We could have the push notifications when they are extremely timely (eg, calendar)
- Matt:
    - Repetitive workflows, you send out a weekly update that requires you to combine notes. We could anticipate this and invite people to take action proactively.
- Jlo:
    - How can we be the Cursor of x website. How can we get you 80% of the way to completing your task so that you only need to do that last 20%. How could we do this for google sheets, for example?
- Charlie:
    - Is there a way that we can improve navigation? We have a layer above you, what can we do?
    - Can we reduce noise?
    - And can we do this automatically?

### First 2 Features

- Charlie:
    - Impending meeting feature was very successful in Arc, and we probably should do this again.
    - Upcoming events
- Ben:
    - Would be great to get github live folders back, especially with the folder primitive in the works
    - Retained engagement could be a good metric for us.
    - Could we have an integration for linear / a task management tool?
- Rishi:
    - Some of the best features used our existing primitives. On thing that was nice about the PIP everything suggestion was that users don’t need to learn a new flow, they are using what they are already familiar with.
- **What are our goals for the milestone?**
    - *Push yourself to think in terms of an outcome – not only projects and shipped deliverables.*
- **How will we know we succeeded?**
    - *What do we want to hear members say?*
    - *What measurable results do we want to see?*
    - *What demos do we want to enable?*
- **Team:**
- **Day 1 Projects**
    - *Outline these projects as a bullet list and short description for our Wednesday check-in. By end of week, all Day 1 projects should have a [Template](https://www.notion.so/Template-27761250367680afa863c0ecb4e5e160?pvs=21) filled out.*
- **Quality Projects**
    - *Deeplink to specific quality initiatives you’re taking, example: [**Separate URL bars per split pane**](https://www.notion.so/Separate-URL-bars-per-split-pane-2726125036768054aa57c5d3f6cf08b3?pvs=21)*
- **Other projects this Milestone**
    - *This can be a high-level list.*

## Workstream 2: Synthesize

### **Crit Presentations**

- #3 (Gem): Suggestions on NTP
    
    [Dia: The Operating System for Work](https://www.notion.so/Dia-The-Operating-System-for-Work-2806125036768089b20cdf0c850a7757?pvs=21)
    
- #6 (Jlo): Weekly summary

### Problems to Solve

- Rishi:
    - Cognitive overload, how can we help you manage cognitive overload easier
    - Present around suggestions, if it is not the definitive list it becomes less high pressure to get everything perfect
- Tara:
    - How do we use all of your memory, context to synthesize in one spot.
- Matt:
    - How can we anticipate and do work for you on your behalf? If we could suggest synthesizing things from your calendar + slack, can we give you suggestions and give you a wow moment?
- Kasper:
    - You are doing something in one tab, and then you go to another tab, and you are constantly swapping between tabs to fill in a form for example. Could a suggestion help you not copy paste here?
- Jlo:
    - Spent a lot of time working on memory + building the prompt around memory. We did it in a way that we built the playdoe but didn’t figure out where it was useful. At the moment, memory doesn’t make chat meaningfully better than anyone elses.
    - How can we narrow in on a specific use case? Being narrowly focused could help here.
- Charlie:
    - The most value here could be something as simple of “where did I leave off?”
    - A Monday Morning feature

### Discussion:

- **Day 1 Projects**
    - *Outline these projects as a bullet list and short description for our Wednesday check-in. By end of week, all Day 1 projects should have a [Template](https://www.notion.so/Template-27761250367680afa863c0ecb4e5e160?pvs=21) filled out.*
- **Quality Projects**
    - *Deeplink to specific quality initiatives you’re taking, example: [**Separate URL bars per split pane**](https://www.notion.so/Separate-URL-bars-per-split-pane-2726125036768054aa57c5d3f6cf08b3?pvs=21)*
- **Other projects this Milestone**
    - *This can be a high-level list.*

## Risks

- Pre-mortem reasons why you might not reach your goal, and how you plan to mitigate them.

## Open Questions

- List questions you’d like Product Leads to answer in check-ins

# Brainstorms

[Integrations Brainstorm](https://www.notion.so/Integrations-Brainstorm-28661250367680f0ba63ee7919ac45c8?pvs=21)

https://www.figma.com/board/6Xci7elpbFytds2IbIGYqg/Apps---Synthesis-Brainstorm?node-id=0-1&t=s3LXJ9KofJwKjx7q-1

Context:

[Dia members](https://www.notion.so/Dia-members-28761250367680a0b9cbc1dde4027d7c?pvs=21)