# Apps Espresso Kickoff

**Document:** Kickoff doc outlining Dia's Apps Espresso milestone to make meetings and proactive suggestions best‑in‑class, with teams, goals, success metrics, and initial projects.

**URL:** https://www.notion.so/browserinc/Apps-Espresso-Kickoff-28c61250367680f0b859e167f1192eb6

---

## People

Alexandra, Rishi, Tara, Matt, Ben, Jlo, Charlie, Kasper, Freddy

## Mandate

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

### Proactive Suggestions

**What Success Looks Like at End of Espresso**

We will have defined, prototyped, and shipped one configurable surface that aggregates and ranks suggestions via a custom prompt, with clear decisions on cadence, placement, and presentation.

**Specifically, we will:**

- **Proves overwhelming utility:** members report they’d be very disappointed to lose it, and daily, low‑noise proactive suggestions help people prepare, continue where they left off, and complete actions with less cognitive load.

## Workstream 1: Meetings

- **Team:** Freddy, Ben, Charlie
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
- **Day 1 Projects**
- **Other projects this Milestone**
    - As we see opportunities to scale these primitives to new Web Apps, we will invest our resources into this.
        - Eg: “PIP Everything” exploration: Extend preview/PIP primitives to media players (Arc heritage) and meeting-adjacent surfaces.

## Workstream 2: Proactive Suggestions

- **Team:** Rishi, Matt, Kasper, Jlo
- **What are our goals for the milestone?**
    - Dia reduces cognitive overload by synthesizing context across apps and providing relevant suggestions.
- **How will we know we succeeded?**
    - When we survey employees, > 50% say “I’d be very disappointed if this feature went away”.
    - We have added a thumbs-up/thumbs-down feedback system that primarily cites fixable polish / timeliness but not correctness or usefulness.
    - Users click at least one proactive suggestion per day.
    - Feedback about these being distracting is minimal.
    - By the end of Espresso, users prefer using web apps in Dia over native desktop apps, because the aggregate experience is better in Dia.
- **Day 1 Projects**
    - [Proactive Suggestions](https://www.notion.so/Proactive-Suggestions-2866125036768003b3eff697588bd67f?pvs=21)
- **Other projects this Milestone**
    - Some tentative ideas.
        - A finder or wiki style experience for exploring people, projects, events, and files synthesized by memory.
        - A dock-style navigation paradigm for moving between web apps that acts as the central hub for the synthesis experience.
        - New first-party skills (eg, Journal) aimed at synthesizing context across apps.
- UXR:
    - Contrast is helpful, it would be good to show “do you prefer A or B”.
    - While we are unsure what this looks like, there is a lot of value in having some level of contrast.

## Cycle 1

### Meetings: Knock out the basics

- **Auto** Google Meet PIP
- Proactive Meet Tab

### Proactive Suggestions: Stand up the basics

- Prototype suggestions on NTP using simple prompting
- Basic feedback mechanism and analytics

## How we work

- Monday: Weekly meeting
    - 12pm 30min
- Tuesday / Thursday: Standup
    - 30min

## PTO / Oncall

[Untitled](https://www.notion.so/28c61250367680189ae3fd6551104d70?pvs=21)

[Freddy Windows Oncall](https://www.notion.so/Freddy-Windows-Oncall-29a61250367680319cb7e611b57d4389?pvs=21)

[Alexandra: PTO](https://www.notion.so/Alexandra-PTO-28c612503676805fb851f98065ce9b39?pvs=21)

## Docs / Links

[Apps Espresso Planning](https://www.notion.so/Apps-Espresso-Planning-2846125036768032aee2dbf910448d83?pvs=21) 

[Linear Hub](https://linear.app/the-browser-company/team/APS/active)

[Apps Espresso Weekly](https://www.notion.so/Apps-Espresso-Weekly-29961250367680199b5cc2f780ffd176?pvs=21)
