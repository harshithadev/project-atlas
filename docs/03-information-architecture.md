# Project Atlas

## 03 Information Architecture

### Pages, Routes, Objects, Hotspots, User Flows, and Content Relationships

**Version:** 0.1
**Owner:** Harshitha Devineni
**Document Type:** Information Architecture, UX Structure, Navigation Blueprint
**Primary Audience:** Designers, engineers, AI agents, content strategists, UX researchers
**Depends On:** `00-master-context.md`, `01-product-vision-experience-blueprint.md`, `02-design-system.md`, `AGENTS.md`
**Status:** Foundational Draft

---

# 1. Executive Summary

This document defines the information architecture for Project Atlas.

Project Atlas is not structured like a conventional portfolio website. It is structured like an interactive thinking space centered around a workspace scene: a desk, a window, a library, framed achievements, an open notebook, a laptop, and an Ask Harshitha AI orb.

The site must support two simultaneous navigation models:

1. **Experiential navigation**
   Visitors explore by interacting with meaningful objects in the room.

2. **Conventional navigation**
   Visitors can always access clear links to core sections without needing to understand the metaphor.

This dual architecture is essential.

The homepage should feel immersive, personal, and memorable.
The information architecture must still remain usable, accessible, responsive, and recruiter-friendly.

The core IA goal is:

> Make Harshitha’s thinking easy to explore without flattening it into a résumé.

---

# 2. IA Philosophy

Most portfolio sites organize information by category:

* About
* Projects
* Experience
* Contact

Project Atlas organizes information by meaning:

* What shaped her?
* What is she thinking about?
* What has she investigated?
* What evidence supports her capabilities?
* What would it feel like to collaborate with her?
* How can a visitor explore her work through their own intent?

The information architecture should help visitors move between:

* personal story
* professional credibility
* projects
* process
* reflections
* books
* certifications
* AI-assisted exploration
* recruiter alignment
* contact

The site should feel like discovery, not confusion.

---

# 3. Core Structural Model

Project Atlas has three layers.

## 3.1 Layer One: The Room

The homepage is a full-screen interactive workspace scene.

It is the emotional and experiential entry point.

It includes:

* desk
* window
* lamp
* laptop
* open notebook
* framed photo
* framed certifications
* bookshelf
* books
* planner
* plant
* clock
* Ask Harshitha orb
* top navigation
* optional bottom dock
* day/night toggle

This layer creates the first impression.

## 3.2 Layer Two: The Knowledge Spaces

Each meaningful object leads into a deeper content space.

Examples:

* open notebook → Investigations
* bookshelf → Library
* books on shelf → Weekly Notes
* framed photo → About
* framed wall items → Certifications
* laptop → Selected Work / Current Experiments
* orb → Ask Harshitha AI
* lamp/window → Day/Night Mode
* planner → Current Focus / Roadmap

This layer organizes the site into understandable areas.

## 3.3 Layer Three: The Evidence Layer

Each content space leads into evidence.

Evidence includes:

* project stories
* Thinking Dossiers
* certifications
* résumé data
* weekly notes
* book reflections
* field observations
* frameworks
* AI responses
* role alignment summaries
* source documents

This layer builds trust.

---

# 4. Primary Site Map

## 4.1 Version 1 Site Map

```txt id="7scpqe"
/
  Home / Interactive Workspace

/about
  About Harshitha

/investigations
  Investigations Index

/investigations/[slug]
  Individual Investigation Story

/library
  Library Index

/library/[slug]
  Individual Book / Influence Reflection

/weekly-notes
  Weekly Notes Index

/weekly-notes/[slug]
  Individual Weekly Note

/certifications
  Certifications and Awards

/principles
  How Harshitha Thinks / Principles

/contact
  Contact

/resume
  Resume page or redirect to PDF

/dossiers/[slug]
  Thinking Dossier landing page or PDF reference
```

---

## 4.2 Version 2 Site Map

```txt id="kq7rvh"
/
  Home / Interactive Workspace

/about
/investigations
/investigations/[slug]
/library
/library/[slug]
/weekly-notes
/weekly-notes/[slug]
/certifications
/principles
/contact
/resume
/dossiers/[slug]

/now
  Current Focus / What Is On My Desk

/curiosities
  Observations, Interfaces, Objects, Places

/frameworks
  Reusable Thinking Frameworks

/timeline
  Evolution of Ideas

/ask
  Dedicated Ask Harshitha AI page
```

---

## 4.3 Version 3 Site Map

```txt id="luql0v"
/
  Home

/recruiter
  Recruiter Mode

/recruiter/results
  JD Alignment Results

/thinking-graph
  Interactive Knowledge Graph

/failure-museum
  Lessons from Failed or Unfinished Work

/decision-journal
  Decisions, Tradeoffs, Reflections

/prompt-library
  AI Workflows and Prompts

/api/content
  Structured content endpoint

/api/ask
  Ask Harshitha AI endpoint

/api/recruiter
  Recruiter Mode endpoint
```

---

# 5. Homepage Information Architecture

## 5.1 Homepage Purpose

The homepage is not a standard landing page.

It is the visitor’s entry into Harshitha’s thinking space.

The homepage must:

* establish mood
* communicate identity
* introduce the room metaphor
* provide object-based navigation
* provide conventional navigation
* make Ask Harshitha visible
* allow fast recruiter access
* invite deeper exploration
* work on mobile
* remain accessible

---

## 5.2 Homepage Above-the-Fold Structure

### Required elements

1. Wordmark
2. Top navigation
3. Hero statement
4. Supporting line
5. Workspace scene background
6. Interactive hotspots
7. Ask Harshitha orb
8. Day/Night toggle
9. Contact or resume access
10. Accessible navigation fallback

---

## 5.3 Homepage Hero Copy

Primary direction:

```txt id="xgq0io"
Thinking alongside Harshitha.
```

Supporting line:

```txt id="w3sw1d"
I explore the intersection of strategy, technology, AI, design, and human experience to build meaningful systems.
```

Alternative:

```txt id="8s5ro4"
Pull up a chair.
This is where messy ideas become elegant systems.
```

Alternative:

```txt id="sdceoi"
Welcome to my thinking space.
Projects live here, but the questions come first.
```

The final homepage can use one primary statement and one secondary line.

---

## 5.4 Homepage Object Map

Each object in the room must map to a destination or function.

| Room Object          | Destination / Function                    | Meaning                           |
| -------------------- | ----------------------------------------- | --------------------------------- |
| Framed photo on desk | `/about`                                  | Who Harshitha is beyond résumé    |
| Open notebook        | `/investigations`                         | Projects as questions and stories |
| Laptop               | `/investigations` or `/now`               | Work, experiments, current builds |
| Bookshelf            | `/library`                                | Inputs shaping her thinking       |
| Individual books     | `/weekly-notes` or `/library/[slug]`      | Reflections, books, field notes   |
| Framed wall items    | `/certifications`                         | Awards, degrees, certifications   |
| Planner              | `/now` or `/principles`                   | Current goals and focus           |
| Lamp                 | Theme toggle                              | Day/Night mode                    |
| Window               | Theme/environment cue                     | Time, change, perspective         |
| Orb                  | Ask Harshitha AI                          | Guided exploration                |
| Clock                | `/timeline` or changelog later            | Evolution and versioning          |
| Pens/sketches        | `/dossiers/[slug]` or `/frameworks` later | Process and thinking artifacts    |
| Bottom dock          | Quick navigation                          | Usability layer                   |
| Top nav              | Standard navigation                       | Accessibility and clarity         |

---

## 5.5 Homepage Hotspot Rules

Hotspots are interactive labels over the workspace image.

Each hotspot must:

* be a real button or link
* have an accessible name
* be keyboard focusable
* have visible focus state
* not be baked into the image
* remain usable on tablet/mobile
* have a fallback in standard navigation
* be positioned relative to the scene container
* be hidden or transformed gracefully on small screens

Hotspots should include:

* About
* Investigations
* Library
* Weekly Notes
* Certifications
* Ask Harshitha AI
* Selected Work or Current Work
* Day / Night

Do not exceed 8 visible hotspots on the first screen unless carefully designed.

---

## 5.6 Homepage Navigation Priority

Primary priority:

1. Ask Harshitha
2. Investigations
3. About
4. Library
5. Contact / Resume
6. Weekly Notes
7. Certifications
8. Principles

Recruiter users must be able to find credibility and contact quickly.

Curious users must be able to explore the room.

---

## 5.7 Homepage Mobile Architecture

On mobile, the homepage should not depend on precise image hotspots.

Mobile structure:

1. Hero copy
2. Cropped workspace image
3. Ask Harshitha orb/button
4. Object navigation cards
5. Featured investigation
6. About preview
7. Library preview
8. Contact CTA

Mobile object navigation cards:

```txt id="m2zt6c"
Open the notebook → Investigations
Visit the library → Books and notes
Meet Harshitha → About
Ask the orb → Ask Harshitha AI
View the frames → Certifications
```

---

# 6. Conventional Navigation

## 6.1 Top Navigation

Desktop top nav:

```txt id="dg7aok"
About
Investigations
Library
Weekly Notes
Certifications
Ask Harshitha
```

Optional:

```txt id="ykx5fr"
Contact
Resume
```

If navigation becomes too crowded, Contact and Resume can move to a button or bottom dock.

---

## 6.2 Bottom Dock

The bottom dock is optional but useful for the workspace homepage.

Potential items:

```txt id="ohr3ea"
Projects
Thinking
Library
Contact
```

or

```txt id="ha4nmq"
Investigations
Principles
Weekly Notes
Contact
```

The dock should not duplicate too much of the top nav.

It should serve fast access and mobile-like clarity.

---

## 6.3 Footer Navigation

Footer should include:

* email
* LinkedIn
* GitHub
* résumé
* privacy note later
* version/changelog
* copyright

Possible footer line:

```txt id="1qvpx1"
Built as a living archive of questions, systems, and work in progress.
```

---

# 7. Page-Level IA

## 7.1 `/` Home

### Purpose

Create emotional entry and allow exploration.

### Content blocks

1. Workspace hero
2. Object navigation
3. Featured investigation
4. How I think preview
5. Library preview
6. Weekly note preview
7. Ask Harshitha prompt strip
8. Contact CTA

### Primary CTA

```txt id="bi09sg"
Explore the notebook
```

or

```txt id="zrgj11"
Start with a question
```

### Secondary CTA

```txt id="v3uf94"
Ask Harshitha
```

---

## 7.2 `/about`

### Purpose

Reveal Harshitha as a person, thinker, and collaborator.

### Page sections

1. Opening story
2. “Who I am when nobody is watching”
3. Professional evolution
4. How I think
5. What gives me energy
6. What I am learning now
7. Personal principles
8. Contact CTA

### Required content

* Indian international student in NYC
* NYU MOT student
* engineering background
* robotics startup experience
* Intel experience
* communications and leadership
* love for people, teaching, learning, reading
* psychology, AI, strategy consulting interests
* empathy as intellectual strength
* belief in change

### Object source

Framed photo on desk.

---

## 7.3 `/investigations`

### Purpose

Index all project stories.

### Page sections

1. Opening statement
2. Filter by capability
3. Featured investigations
4. Smaller investigations or experiments
5. Dossier links
6. Suggested path by role

### Filters

* AI
* Strategy
* Product
* Operations
* Robotics
* Communication
* UX
* Systems
* Consulting
* Human Behavior

### Card structure

Each investigation card includes:

* question
* short context
* capability tags
* evidence type
* outcome or expected outcome
* link

### Example cards

```txt id="h6wdd5"
Why do alarms assume everyone wakes up the same way?
SMART Alarm / Behavioral Design / AI Product
```

```txt id="67vtii"
How do you inspect an industrial system without putting people at risk?
Robotics Rover / Operations / Systems
```

```txt id="3501lg"
How do you make institutional communication feel human?
OGS Communications / Storytelling / Stakeholder Trust
```

---

## 7.4 `/investigations/[slug]`

### Purpose

Tell one project story in depth.

### Required structure

1. Opening question
2. Short answer / thesis
3. Context
4. Problem
5. Stakeholders
6. Why it mattered
7. Constraints
8. Research and discovery
9. Approach
10. Decisions and tradeoffs
11. Iterations
12. Outcome
13. So what?
14. What failed or changed
15. What I learned
16. What I would do next
17. Thinking Dossier CTA
18. Related notes/books/projects

### Metadata

Each investigation must have:

* title
* question
* slug
* summary
* status
* date
* role
* collaborators
* tools
* skills
* capabilities
* outcomes
* dossier link
* related content

### Sticky side navigation

Desktop:

```txt id="u5i8tm"
Question
Context
Problem
Thinking
Outcome
Lessons
Dossier
```

Mobile:

Use collapsible section index.

---

## 7.5 `/dossiers/[slug]`

### Purpose

Provide deeper process artifacts.

### Version 1

Can be a landing page that links to PDF.

### Version 2

Can be a structured HTML page and downloadable PDF.

### Required sections

* overview
* original framing
* stakeholder map
* assumptions
* research
* decision log
* artifacts
* metrics
* lessons
* future work

### Relationship

Every flagship investigation should eventually link to a dossier.

---

## 7.6 `/library`

### Purpose

Show the inputs shaping Harshitha’s thinking.

### Page sections

1. Opening explanation
2. Currently reading
3. Books by theme
4. Influential books
5. Connected projects
6. Notes from books
7. Future Fable sync note, if relevant

### Themes

* Psychology
* AI
* Strategy
* Product
* Systems
* Human Behavior
* Leadership
* Communication
* Design
* Personal Growth

### Content types

* books
* articles
* papers
* podcasts
* frameworks
* resources

### Object source

Bookshelf.

---

## 7.7 `/library/[slug]`

### Purpose

Show one book/resource reflection.

### Required sections

1. Title and author/source
2. Why I picked this up
3. What stayed with me
4. What I disagreed with
5. How it changed my thinking
6. Connected investigations
7. Connected field notes
8. Related concepts

### Metadata

* title
* author
* status
* date started
* date completed
* themes
* rating optional
* related concepts
* related projects

---

## 7.8 `/weekly-notes`

### Purpose

Show short recurring reflections.

### Page sections

1. Opening note
2. Latest note
3. Notes archive
4. Theme filters
5. Related investigations

### Themes

* AI
* Psychology
* Strategy
* Systems
* Product
* NYC
* Cafés
* Learning
* Failure
* Client Thinking
* Interfaces

### Object source

Books on the shelf or weekly note book.

---

## 7.9 `/weekly-notes/[slug]`

### Purpose

Host one reflection.

### Required structure

1. Title
2. Date
3. Observation
4. Insight
5. Question I am leaving with
6. Related themes
7. Related content

### Length

Usually 300 to 800 words.

---

## 7.10 `/certifications`

### Purpose

Show credentials, awards, degrees, and proud proof points.

### Page sections

1. Introduction
2. Featured credentials
3. Certifications
4. Awards
5. Degrees
6. What each taught me
7. Download or verification links where available

### Object source

Framed wall items.

### Display metaphor

Frames on a wall, certificates in a drawer, or shelf archive.

### Important rule

Certifications should not be a badge dump.

Each should include why it matters or what capability it supports.

---

## 7.11 `/principles`

### Purpose

Explain Harshitha’s operating system.

### Page sections

1. Opening idea
2. Core principles
3. Examples in action
4. Connected investigations
5. Field notes
6. Ask Harshitha prompt

### Example principles

* Start with the outcome.
* Wear the customer’s shoes.
* Ask why until the shape changes.
* Break complexity into obvious pieces.
* Trust is built through clarity.
* Failure is data with emotion attached.
* AI should create space for human judgment.
* Beautiful systems are understandable systems.

---

## 7.12 `/contact`

### Purpose

Make next steps easy.

### Required elements

* email
* LinkedIn
* GitHub
* résumé
* optional form
* short note on what she is open to

### Contact copy

```txt id="vynqmj"
Have a messy idea, an interesting role, or a problem worth thinking through? I’d love to hear from you.
```

### Future

* calendar link
* AI-generated intro summary
* recruiter mode CTA

---

## 7.13 `/resume`

### Purpose

Provide conventional résumé access.

Options:

1. Standalone résumé page
2. Direct PDF download
3. Embedded PDF with download

Version 1 recommendation:

* `/resume` page with download button and summary
* downloadable PDF in `/public/Harshitha-Devineni-Resume.pdf`

---

## 7.14 `/now`

### Purpose

Show what is currently on Harshitha’s desk.

Version 2 or later.

Sections:

* currently learning
* currently building
* currently reading
* currently thinking about
* current questions
* latest field note

Object source:

Planner or laptop.

---

## 7.15 `/curiosities`

### Purpose

Show taste, attention, and everyday systems thinking.

Version 2 or later.

Content:

* interface observations
* café observations
* NYC observations
* product details
* quotes
* photos
* sketches

---

## 7.16 `/recruiter`

### Purpose

Future Recruiter Mode.

Version 3.

User can paste/upload a job description.

Output:

* role requirements
* Harshitha alignment
* evidence from portfolio
* relevant investigations
* possible gaps
* suggested next step

---

# 8. Content Relationship Model

Project Atlas content should be interconnected.

## 8.1 Core Content Types

```txt id="7iebm8"
Person
Experience
Investigation
Thinking Dossier
Weekly Note
Book / Resource
Certification
Principle
Framework
Skill / Capability
Question
Theme
Artifact
```

---

## 8.2 Relationship Examples

An Investigation can connect to:

* Thinking Dossier
* skills
* principles
* weekly notes
* books
* certifications
* experiences
* questions
* themes

A Book can connect to:

* principles
* investigations
* weekly notes
* themes

A Certification can connect to:

* skills
* experiences
* investigations
* recruiter mode evidence

A Weekly Note can connect to:

* questions
* themes
* books
* projects
* principles

A Principle can connect to:

* investigations
* weekly notes
* examples
* AI responses

---

## 8.3 Capability Tags

Use consistent capability tags.

Primary tags:

```txt id="n0sqwl"
Strategy
AI
Product
Consulting
Operations
Communication
Robotics
Systems Thinking
UX
Behavioral Design
Client Value
Data
Storytelling
Leadership
Learning
```

Secondary tags:

```txt id="1rc4i5"
Psychology
Cafés
NYC
Books
Teaching
Failure
Change
Decision Making
Human Behavior
Automation
Stakeholder Alignment
```

---

# 9. AI IA

## 9.1 Ask Harshitha Entry Points

Ask Harshitha should be accessible from:

* homepage orb
* top navigation
* bottom dock
* investigation pages
* recruiter mode page
* about page
* contact page

## 9.2 Ask Harshitha Suggested Prompts by Page

### Homepage

```txt id="n6ygcb"
Where should I start?
What should a recruiter know?
How does Harshitha think?
Show me her most strategic project.
```

### Investigation Page

```txt id="3eh97r"
Summarize this project.
What was the main tradeoff?
What does this show about Harshitha?
What would she improve next?
```

### Library Page

```txt id="dgwjr7"
What books shaped Harshitha’s thinking?
Which books connect to AI?
Which books connect to strategy?
```

### About Page

```txt id="gkuske"
What makes Harshitha different?
How does she approach ambiguity?
What gives her energy?
```

### Recruiter Page

```txt id="q7p29v"
Map this role to Harshitha’s experience.
Which projects should I review?
What are her strongest role-aligned capabilities?
```

---

## 9.3 AI Content Access Levels

AI should understand content visibility.

```txt id="aa5x5e"
public
  Safe for website and AI answers

ai_allowed
  Safe for AI but maybe not displayed directly

private
  Not available to public AI

internal
  Used for development only
```

The AI must never expose private or internal content.

---

# 10. Recruiter Mode IA

## 10.1 Recruiter Mode Flow

Version 3 flow:

1. Recruiter opens `/recruiter`
2. Pastes job description
3. Confirms privacy note
4. AI analyzes role
5. System extracts role capabilities
6. System maps capabilities to portfolio evidence
7. Results page displays summary
8. Recruiter can open relevant investigations
9. Recruiter can contact Harshitha

---

## 10.2 Recruiter Results IA

Results page sections:

1. Role summary
2. Key capabilities requested
3. Strongest matches
4. Evidence from Harshitha’s work
5. Relevant investigations
6. Relevant certifications
7. Relevant field notes
8. Possible growth areas
9. Suggested interview topics
10. Contact CTA

---

## 10.3 Recruiter Mode Navigation

After results, user can:

* ask follow-up AI questions
* open matched investigation
* download tailored summary later
* contact Harshitha
* clear JD

---

# 11. Search and Discovery

## 11.1 Version 1

No global search required.

Use:

* clear nav
* hotspots
* content cards
* tags
* related content

## 11.2 Version 2

Add site search for:

* investigations
* notes
* library
* certifications

## 11.3 Version 3

Ask Harshitha becomes semantic search and guidance layer.

---

# 12. Taxonomy

## 12.1 Primary Themes

```txt id="m1ix90"
AI
Strategy
Psychology
Product
Systems
Human Experience
Communication
Operations
Learning
Design
```

## 12.2 Role Alignment Themes

```txt id="ffgkia"
Consulting
Strategy
AI Product
Product Management
Customer Success Strategy
Founder’s Office
Operations
Client Advisory
```

## 12.3 Evidence Types

```txt id="fzixlt"
Project
Dossier
Reflection
Certification
Experience
Book Note
Framework
Award
Case Study
```

## 12.4 Status Types

```txt id="7995vn"
Published
Draft
In Progress
Archived
Private
Future
```

---

# 13. URL and Slug Rules

Use clear, readable slugs.

Examples:

```txt id="eqq3sd"
/investigations/smart-alarm
/investigations/robotics-rover
/investigations/humanizing-institutional-communication

/library/atomic-habits
/library/design-of-everyday-things

/weekly-notes/cafe-queue-ux
/weekly-notes/ai-should-create-space

/dossiers/smart-alarm-thinking-dossier
```

Rules:

* lowercase
* hyphenated
* no dates unless needed
* no vague slugs like `/project-1`
* preserve meaning

---

# 14. Breadcrumbs

Breadcrumbs should appear on deeper pages.

Example:

```txt id="y6p9zo"
Home / Investigations / SMART Alarm
```

For dossiers:

```txt id="tvuqs6"
Home / Investigations / SMART Alarm / Thinking Dossier
```

Breadcrumbs help visitors understand the site structure beneath the immersive homepage.

---

# 15. Related Content Strategy

Every detail page should include related content.

## 15.1 Investigation Related Content

Show:

* related weekly notes
* related books
* related principles
* related certifications
* related investigations
* Ask Harshitha prompt

## 15.2 Book Related Content

Show:

* connected investigations
* related notes
* related themes

## 15.3 Weekly Note Related Content

Show:

* related principles
* related books
* related investigations

This creates the foundation for the future Thinking Graph.

---

# 16. Versioning and Changelog IA

Future feature.

Possible route:

```txt id="vfl0zm"
/changelog
```

or integrated into footer.

Purpose:

Show that the portfolio evolves like software.

Content:

* version
* date
* what changed
* why it changed
* new investigations
* new notes
* AI improvements

---

# 17. Error and Empty States

## 17.1 404 Page

Should feel on-brand.

Possible copy:

```txt id="u0coqk"
This door does not seem to open.
```

Supporting:

```txt id="8ya2g9"
Try returning to the desk or asking the orb where to go next.
```

Actions:

* Return home
* Ask Harshitha
* View investigations

---

## 17.2 Empty Library State

```txt id="6dqtzh"
This shelf is still being filled.
```

---

## 17.3 Empty Weekly Notes State

```txt id="29m9t3"
The notebook is open. The first note is coming soon.
```

---

## 17.4 AI Unavailable State

```txt id="h7hwz9"
Ask Harshitha is reorganizing her notes right now.
```

Actions:

* Explore investigations
* Contact Harshitha

---

# 18. Accessibility IA

Because the homepage is visual, accessibility structure is essential.

## 18.1 Required Semantic Structure

Homepage should include:

```txt id="ttbs3p"
<header>
  top navigation
</header>

<main>
  hero section
  workspace navigation
  featured content
</main>

<footer>
  contact and links
</footer>
```

## 18.2 Hotspot Fallback

All hotspots must appear in a hidden or visible structured navigation list.

Screen readers should not need to interpret the image.

## 18.3 Keyboard Flow

Suggested keyboard order:

1. Skip to main
2. Wordmark/home
3. Top nav
4. Day/night toggle
5. Ask Harshitha
6. Hero CTA
7. Workspace hotspots in logical order
8. Bottom dock
9. Featured content

---

# 19. Analytics IA

Track meaningful interactions, not vanity.

Events to track later:

```txt id="rjve3k"
homepage_view
hotspot_click
orb_open
ask_question_submitted
investigation_open
dossier_open
resume_download
contact_click
theme_toggle
library_book_open
weekly_note_open
recruiter_mode_started
recruiter_mode_completed
```

Use analytics to understand whether visitors explore, not to create invasive tracking.

---

# 20. Version 1 IA Acceptance Criteria

The IA is successful for Version 1 if:

* homepage supports both room navigation and standard navigation
* all core pages are reachable without hotspots
* mobile does not depend on hover
* project stories have clear structure
* library and weekly notes have scalable structure
* Ask Harshitha has a clear place even before full AI
* recruiters can quickly find relevant information
* the site can grow without restructuring
* content types are defined clearly enough for a CMS later
* every major section connects back to the central thesis

---

# 21. Implementation Notes for Cursor / Codex

When implementing IA:

1. Create routes first.
2. Use placeholder content if needed.
3. Build reusable data structures.
4. Keep content separate from components.
5. Avoid hardcoding everything into the homepage.
6. Hotspots should be generated from a configuration object.
7. Content types should be defined in TypeScript.
8. Use accessible links and buttons.
9. Mobile layout should be planned from the beginning.
10. Do not implement AI backend in Version 1.

Suggested hotspot config:

```ts id="xft87t"
export const workspaceHotspots = [
  {
    id: "about",
    label: "About",
    href: "/about",
    object: "framed-photo",
    position: { desktop: { x: 32, y: 68 }, tablet: { x: 36, y: 62 } },
    description: "Meet Harshitha beyond the résumé."
  },
  {
    id: "investigations",
    label: "Investigations",
    href: "/investigations",
    object: "open-notebook",
    position: { desktop: { x: 38, y: 82 }, tablet: { x: 42, y: 76 } },
    description: "Explore projects that begin with questions."
  },
  {
    id: "library",
    label: "Library",
    href: "/library",
    object: "bookshelf",
    position: { desktop: { x: 78, y: 52 }, tablet: { x: 74, y: 48 } },
    description: "See what is shaping her thinking."
  },
  {
    id: "weekly-notes",
    label: "Weekly Notes",
    href: "/weekly-notes",
    object: "books",
    position: { desktop: { x: 80, y: 35 }, tablet: { x: 76, y: 34 } },
    description: "Read observations from the week."
  },
  {
    id: "certifications",
    label: "Certifications",
    href: "/certifications",
    object: "wall-frames",
    position: { desktop: { x: 52, y: 33 }, tablet: { x: 54, y: 34 } },
    description: "View credentials and proud proof points."
  },
  {
    id: "ask",
    label: "Ask Harshitha AI",
    action: "openAskPanel",
    object: "orb",
    position: { desktop: { x: 88, y: 66 }, tablet: { x: 84, y: 62 } },
    description: "Ask where to start."
  }
];
```

---

# 22. Open IA Questions

1. Should “Investigations” be final, or should we test “Questions Worth Solving”?
2. Should `/principles` be a standalone page in Version 1 or part of About?
3. Should `/resume` be public page or direct PDF?
4. Should `/now` be included in Version 1?
5. Should Certifications and Awards be one page or two?
6. Should Weekly Notes and Field Notes be the same thing?
7. Should the bottom dock exist on all pages or only homepage?
8. Should Ask Harshitha have a dedicated `/ask` route in Version 1?
9. Should the homepage include scroll sections after the room, or should the room link outward?
10. How many hotspots are too many?

---

# 23. Final IA North Star

Project Atlas should make complex identity feel easy to explore.

The room makes the site memorable.
The navigation makes it usable.
The content relationships make it deep.
The AI makes it adaptive.
The evidence makes it trustworthy.

The architecture succeeds when visitors can enter through curiosity and leave with clarity.
