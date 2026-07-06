# Project Atlas

## 05 Content Model

### Content Types, Schemas, Metadata, Publishing Rules, and Knowledge Base Structure

**Version:** 0.1
**Owner:** Harshitha Devineni
**Document Type:** Content Architecture, CMS Model, Knowledge Base Specification
**Primary Audience:** Designers, engineers, AI agents, content strategists, future CMS implementers
**Depends On:** `00-master-context.md`, `01-product-vision-experience-blueprint.md`, `02-design-system.md`, `03-information-architecture.md`, `04-ai-architecture.md`, `AGENTS.md`
**Status:** Foundational Draft

---

# 1. Executive Summary

The content model defines how Project Atlas stores, structures, relates, displays, and retrieves content.

Project Atlas is not a static portfolio. It is a living thinking system.

The content model must support:

* public portfolio pages
* project stories
* investigations
* Thinking Dossiers
* weekly notes
* library entries
* certifications
* experiences
* principles
* frameworks
* AI retrieval
* recruiter mode
* future knowledge graph
* future CMS migration
* versioning
* visibility control

Every content item should help answer one of these questions:

* Who is Harshitha?
* How does she think?
* What has she built?
* What shaped her?
* What evidence supports her capabilities?
* Why should someone trust her?
* What does it feel like to collaborate with her?

The content model exists so the website can grow for years without becoming messy.

---

# 2. Content Philosophy

Project Atlas content should not be a pile of pages.

It should be a connected system of evidence.

Every content item should be:

* intentional
* structured
* searchable
* reusable
* tagged
* connected
* AI-readable
* human-readable
* versioned where useful

The same content should be able to power:

* website pages
* Ask Harshitha AI
* Recruiter Mode
* custom summaries
* future PDFs
* future knowledge graph
* future search
* future content recommendations

---

# 3. Content Design Principles

## 3.1 Every content item needs a purpose

Do not add content just because it exists.

Ask:

* What does this reveal about Harshitha?
* What capability does this support?
* What question does this answer?
* Where does this belong in the experience?
* Is it public, AI-only, private, or internal?

## 3.2 Projects are evidence, not decoration

A project should not be stored only as a title, image, and tech stack.

It must include:

* question
* context
* problem
* thinking
* decisions
* outcome
* lesson
* capability evidence

## 3.3 Content should connect across the system

A book can connect to a project.
A project can connect to a principle.
A weekly note can connect to a capability.
A certification can connect to recruiter evidence.
A dossier can connect to AI answers.

## 3.4 AI requires structured truth

The AI layer depends on content quality.

If content is vague, AI answers become vague.
If content lacks evidence, AI should not invent it.

## 3.5 Personal content must remain intentional

The website should show Harshitha beyond work, but not become a diary.

Personal content should reveal:

* curiosity
* taste
* learning
* observation
* values
* thinking

Not unnecessary private details.

---

# 4. Content System Layers

Project Atlas has four content layers.

## 4.1 Public Display Layer

Content visible on the website.

Examples:

* About page
* Investigation pages
* Library entries
* Weekly Notes
* Certification cards
* Principles

## 4.2 AI Knowledge Layer

Content that Ask Harshitha can use.

Examples:

* public website content
* approved summaries
* selected dossier excerpts
* capability mappings
* recruiter-safe evidence

## 4.3 Private Reference Layer

Content not visible to visitors or AI.

Examples:

* draft notes
* personal context
* unfinished reflections
* sensitive documents
* internal strategy

## 4.4 Internal Development Layer

Content used to build the site.

Examples:

* prompts
* documentation
* rejected ideas
* design decisions
* testing examples

---

# 5. Visibility Model

Every content item must have a visibility field.

```ts id="2rikjl"
type Visibility = "public" | "ai_allowed" | "private" | "internal";
```

## 5.1 Public

Visible on the website and available to AI.

Use for:

* published investigations
* published weekly notes
* published library entries
* certifications intended for display
* approved principles
* approved bio content

## 5.2 AI Allowed

Not necessarily displayed directly, but safe for AI to use.

Use for:

* approved summaries
* capability mappings
* hidden metadata
* recruiter evidence notes
* approved internal context

## 5.3 Private

Not visible on the website. Not available to public AI.

Use for:

* personal drafts
* sensitive reflections
* unapproved notes
* raw documents
* private career planning

## 5.4 Internal

Used for engineering, design, or planning only.

Use for:

* prompts
* testing data
* design decisions
* rejected ideas
* source-of-truth docs
* implementation notes

---

# 6. Publishing Status Model

Every content item must have a status.

```ts id="6pne5c"
type PublishStatus = "draft" | "review" | "published" | "archived" | "future";
```

## 6.1 Draft

Content is being written.

Not public. Not AI-accessible unless explicitly allowed.

## 6.2 Review

Content is ready for review but not final.

Not public by default.

## 6.3 Published

Content is live on the website.

Can be AI-accessible if visibility is public.

## 6.4 Archived

Old content that should remain accessible or stored, but not emphasized.

## 6.5 Future

Planned content placeholder.

Useful for roadmap and content inventory.

---

# 7. Core Content Types

Project Atlas has the following core content types:

```txt id="h9h5ad"
Profile
Experience
Investigation
Thinking Dossier
Weekly Note
Library Entry
Certification
Principle
Framework
Capability
Question
Artifact
Curiosity
Timeline Event
Resume Item
Recruiter Evidence
```

Each type is defined below.

---

# 8. Base Content Schema

All content types should extend a base schema.

```ts id="i8pzgg"
export type ContentType =
  | "profile"
  | "experience"
  | "investigation"
  | "dossier"
  | "weekly-note"
  | "library-entry"
  | "certification"
  | "principle"
  | "framework"
  | "capability"
  | "question"
  | "artifact"
  | "curiosity"
  | "timeline-event"
  | "resume-item"
  | "recruiter-evidence";

export type BaseContent = {
  id: string;
  type: ContentType;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  status: PublishStatus;
  visibility: Visibility;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  archivedAt?: string;
  themes: string[];
  capabilities: string[];
  tags: string[];
  relatedIds: string[];
  sourceIds?: string[];
  seoTitle?: string;
  seoDescription?: string;
};
```

---

# 9. Profile Content Model

## 9.1 Purpose

The Profile model stores Harshitha’s core identity, bio, positioning, values, and public personal context.

This powers:

* About page
* Ask Harshitha answers
* recruiter summaries
* homepage copy
* future custom PDFs

## 9.2 Schema

```ts id="ymwavo"
export type Profile = BaseContent & {
  type: "profile";
  fullName: string;
  preferredName: string;
  location: string;
  currentRoleSummary: string;
  educationSummary: string;
  positioningStatement: string;
  coreBrandSentence: string;
  longBio: string;
  shortBio: string;
  personalTraits: string[];
  values: string[];
  interests: string[];
  targetRoles: string[];
  strengths: string[];
  growthAreas?: string[];
  communicationStyle: string[];
  operatingPrinciples: string[];
  publicContact: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
};
```

## 9.3 Required Fields

* fullName
* preferredName
* location
* shortBio
* positioningStatement
* coreBrandSentence
* interests
* targetRoles
* values

## 9.4 Example Content

```json id="b50d0y"
{
  "fullName": "Harshitha Devineni",
  "preferredName": "Harshitha",
  "location": "New York City",
  "positioningStatement": "I bridge technology, business, and people to turn complexity into clear, measurable, human-centered outcomes.",
  "coreBrandSentence": "I turn messy ideas into elegant systems.",
  "interests": ["Psychology", "AI", "Strategy Consulting", "Reading", "Teaching", "Human Behavior"],
  "targetRoles": ["Consulting", "Strategy", "AI Product", "Client Advisory", "Product Operations"]
}
```

---

# 10. Experience Content Model

## 10.1 Purpose

Experience content captures professional, academic, leadership, and extracurricular roles.

Experiences should not simply duplicate résumé bullets.

They should explain:

* what environment Harshitha was in
* what she learned
* what capability it built
* what evidence it provides
* how it connects to future roles

## 10.2 Schema

```ts id="lr9ps1"
export type Experience = BaseContent & {
  type: "experience";
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  employmentType?: "full-time" | "part-time" | "internship" | "student-role" | "leadership" | "project";
  industry?: string;
  context: string;
  responsibilities: string[];
  outcomes?: string[];
  lessons?: string[];
  tools?: string[];
  collaborators?: string[];
  relatedInvestigationIds?: string[];
  recruiterEvidence?: RecruiterEvidence[];
};
```

## 10.3 Required Fields

* organization
* role
* startDate
* context
* responsibilities
* capabilities
* summary

## 10.4 Initial Experience Entries

Create entries for:

* Mechonyx Automation, Co-founder and COO
* Mechonyx Automation, Software Developer
* Intel, GPU Software Intern
* NYU OGS, Communications/I-Hub Intern
* NYU Administrative Analyst
* Adobe Ambassador
* WIBE E-board Member
* MG-CY 6271 TA
* VIT Robotics Club leadership
* Roboprix coordination

---

# 11. Investigation Content Model

## 11.1 Purpose

Investigations are the core project stories.

They replace generic “projects.”

An Investigation is a structured story about a question worth solving.

## 11.2 Schema

```ts id="at1k63"
export type Investigation = BaseContent & {
  type: "investigation";
  question: string;
  shortAnswer?: string;
  context: string;
  problem: string;
  whyItMattered: string;
  stakeholders?: string[];
  constraints?: string[];
  assumptions?: string[];
  research?: string[];
  approach: string;
  decisions?: Decision[];
  tradeoffs?: string[];
  iterations?: Iteration[];
  outcome?: string;
  metrics?: Metric[];
  lessons?: string[];
  failures?: string[];
  futureWork?: string[];
  tools?: string[];
  role?: string;
  collaborators?: string[];
  duration?: string;
  coverImage?: string;
  artifactIds?: string[];
  dossierId?: string;
  relatedBookIds?: string[];
  relatedNoteIds?: string[];
  relatedPrincipleIds?: string[];
};
```

## 11.3 Supporting Types

```ts id="6k7v8t"
export type Decision = {
  title: string;
  context: string;
  optionsConsidered: string[];
  decisionMade: string;
  reasoning: string;
  impact?: string;
};

export type Iteration = {
  version: string;
  description: string;
  whatChanged: string;
  whyItChanged: string;
  artifactIds?: string[];
};

export type Metric = {
  label: string;
  value: string;
  explanation: string;
  confidence?: "measured" | "estimated" | "qualitative";
};
```

## 11.4 Required Fields

* title
* question
* summary
* context
* problem
* whyItMattered
* approach
* capabilities
* status
* visibility

## 11.5 Investigation Template

Every investigation should follow this narrative:

```txt id="1wta64"
1. The Question
2. The Context
3. The Problem Behind the Problem
4. Why It Mattered
5. Who It Affected
6. What Was Unclear
7. The Approach
8. Decisions and Tradeoffs
9. What Changed
10. The Outcome
11. The Lesson
12. What I Would Do Next
13. Thinking Dossier
```

## 11.6 Initial Investigation Candidates

Potential flagship investigations:

1. SMART Alarm
   Question: Why do alarms assume everyone wakes up the same way?

2. Robotics Inspection Rover
   Question: How do you inspect a harsh industrial environment without putting people at risk?

3. OGS Communications / Alumni Newsletter
   Question: How do you make institutional communication feel human?

4. Client Value Report Simulation
   Question: How do you prove that work made a client’s business better?

5. AI Portfolio / Project Atlas
   Question: What if a portfolio could explain not just what someone did, but how they think?

6. Automation Workflow Project
   Question: How can AI remove administrative friction without removing human judgment?

---

# 12. Thinking Dossier Content Model

## 12.1 Purpose

Thinking Dossiers are deep process documents attached to investigations.

They are the “workbench” behind the polished story.

A dossier proves how Harshitha thinks.

## 12.2 Schema

```ts id="ozqbxt"
export type ThinkingDossier = BaseContent & {
  type: "dossier";
  investigationId: string;
  originalQuestion: string;
  problemFraming: string;
  stakeholderMap?: Stakeholder[];
  assumptions?: string[];
  researchNotes?: ResearchNote[];
  decisionMatrix?: DecisionMatrixItem[];
  sketches?: string[];
  wireframes?: string[];
  artifacts?: string[];
  metrics?: Metric[];
  tradeoffs?: string[];
  failures?: string[];
  lessons?: string[];
  futureQuestions?: string[];
  pdfUrl?: string;
};
```

## 12.3 Supporting Types

```ts id="aujbwu"
export type Stakeholder = {
  name: string;
  role: string;
  needs: string[];
  painPoints?: string[];
  influence?: "low" | "medium" | "high";
};

export type ResearchNote = {
  title: string;
  source?: string;
  note: string;
  implication: string;
};

export type DecisionMatrixItem = {
  option: string;
  pros: string[];
  cons: string[];
  decision?: "selected" | "rejected" | "deferred";
  reason?: string;
};
```

## 12.4 Required Fields

* investigationId
* originalQuestion
* problemFraming
* summary
* status
* visibility

## 12.5 Dossier Format

Each dossier should exist in two forms:

1. Markdown source
2. Designed PDF output

Future:

* HTML dossier page
* AI-searchable dossier sections
* downloadable strategy brief

---

# 13. Weekly Note Content Model

## 13.1 Purpose

Weekly Notes show what Harshitha notices, learns, questions, and reflects on.

They are not blogs.

They are field notes.

## 13.2 Schema

```ts id="bwxi9a"
export type WeeklyNote = BaseContent & {
  type: "weekly-note";
  date: string;
  observation: string;
  insight: string;
  question?: string;
  body: string;
  locationContext?: string;
  mood?: string;
  relatedInvestigationIds?: string[];
  relatedBookIds?: string[];
  relatedPrincipleIds?: string[];
};
```

## 13.3 Required Fields

* title
* date
* observation
* insight
* body
* themes
* visibility
* status

## 13.4 Weekly Note Template

```md id="ficz8d"
# Title

**Date:**  
**Theme:**  

## Observation

What did I notice?

## Insight

Why did it matter?

## Question

What am I still wondering?

## Connection

What does this connect to?
```

## 13.5 Suggested Weekly Note Categories

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
* Books
* Teaching
* Change

---

# 14. Library Entry Content Model

## 14.1 Purpose

Library entries represent books, articles, podcasts, papers, or resources that shape Harshitha’s thinking.

The library is not a reading list.
It is evidence of evolving thought.

## 14.2 Schema

```ts id="x6o4ok"
export type LibraryEntry = BaseContent & {
  type: "library-entry";
  resourceType: "book" | "article" | "paper" | "podcast" | "video" | "course" | "other";
  author?: string;
  creator?: string;
  status: PublishStatus;
  readingStatus?: "want-to-read" | "reading" | "read" | "revisiting";
  dateStarted?: string;
  dateCompleted?: string;
  coverImage?: string;
  externalUrl?: string;
  keyIdea: string;
  reflection: string;
  disagreement?: string;
  changedThinking?: string;
  quotes?: Quote[];
  relatedInvestigationIds?: string[];
  relatedNoteIds?: string[];
  relatedPrincipleIds?: string[];
};
```

## 14.3 Supporting Type

```ts id="5ihxhg"
export type Quote = {
  text: string;
  source?: string;
  note?: string;
};
```

## 14.4 Required Fields

* title
* resourceType
* keyIdea
* reflection
* themes
* visibility
* status

## 14.5 Library Entry Template

```md id="ojcznk"
# Title

**Author / Creator:**  
**Status:**  
**Themes:**  

## Why I picked this up

## What stayed with me

## What I disagreed with

## How it changed my thinking

## Connected ideas
```

---

# 15. Certification Content Model

## 15.1 Purpose

Certifications, degrees, awards, and credentials provide proof points.

They should be displayed tastefully, often as frames or shelf artifacts.

They should not become a badge dump.

## 15.2 Schema

```ts id="mx6x9n"
export type Certification = BaseContent & {
  type: "certification";
  issuer: string;
  issuedDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: "degree" | "certification" | "award" | "course" | "recognition";
  skillArea?: string[];
  whyItMatters: string;
  evidenceStrength?: "strong" | "moderate" | "emerging";
  displayAsFrame?: boolean;
  imageUrl?: string;
};
```

## 15.3 Required Fields

* title
* issuer
* category
* whyItMatters
* visibility
* status

## 15.4 Initial Certification/Award Candidates

* NYU MOT degree context
* VIT Integrated M.Tech
* Kaggle 5-year certificate
* Adobe Ambassador / ACE
* DTU Hackathon 2022 first prize
* VIT Robotics Club award
* AWS Agentic AI session
* relevant AI/course certificates
* Salesforce/Power BI certificates once earned

---

# 16. Principle Content Model

## 16.1 Purpose

Principles make Harshitha’s operating system explicit.

They should not be generic values.

They should explain how she works.

## 16.2 Schema

```ts id="b81n7p"
export type Principle = BaseContent & {
  type: "principle";
  statement: string;
  explanation: string;
  example?: string;
  antiPattern?: string;
  relatedInvestigationIds?: string[];
  relatedNoteIds?: string[];
  relatedBookIds?: string[];
};
```

## 16.3 Required Fields

* title
* statement
* explanation
* visibility
* status

## 16.4 Initial Principles

1. Start with the outcome.
2. Wear the customer’s shoes.
3. Ask why until the shape changes.
4. Break complexity into obvious pieces.
5. Trust is built through clarity.
6. Failure is data with emotion attached.
7. AI should create space for human judgment.
8. Beautiful systems are understandable systems.
9. Curiosity before certainty.
10. Evidence over performance.

---

# 17. Framework Content Model

## 17.1 Purpose

Frameworks are reusable ways of thinking.

They position Harshitha as someone who creates structure, not just output.

## 17.2 Schema

```ts id="zqn9qx"
export type Framework = BaseContent & {
  type: "framework";
  problemItSolves: string;
  steps: FrameworkStep[];
  whenToUse: string[];
  example?: string;
  relatedInvestigationIds?: string[];
  relatedNoteIds?: string[];
};
```

```ts id="92tpu7"
export type FrameworkStep = {
  title: string;
  description: string;
  question?: string;
};
```

## 17.3 Initial Framework Candidates

* Messy Ideas to Elegant Systems
* Client Value Report Framework
* Empathetic Decomposition Framework
* AI Workflow Evaluation Framework
* Failure Reflection Framework
* Weekly Field Note Framework
* Stakeholder Alignment Framework

---

# 18. Capability Content Model

## 18.1 Purpose

Capabilities are skills or strengths supported by evidence.

Capabilities power:

* recruiter mode
* AI answers
* filters
* project tags
* role mapping

## 18.2 Schema

```ts id="rj0k9z"
export type Capability = BaseContent & {
  type: "capability";
  name: string;
  description: string;
  evidenceIds: string[];
  strength: "strong" | "moderate" | "emerging";
  roleRelevance: string[];
  relatedSkills?: string[];
};
```

## 18.3 Initial Capabilities

Primary:

* Strategy
* AI
* Consulting
* Product Thinking
* Communication
* Stakeholder Alignment
* Systems Thinking
* Operations
* Robotics
* UX
* Behavioral Design
* Client Value
* Storytelling
* Leadership
* Learning

Secondary:

* Psychology
* Teaching
* Failure Reflection
* Decision Making
* Automation
* Human Behavior
* Change
* Executive Communication

---

# 19. Question Content Model

## 19.1 Purpose

Questions are central to Project Atlas.

They power:

* investigations
* homepage copy
* weekly notes
* Ask Harshitha prompts
* future Thinking Graph

## 19.2 Schema

```ts id="hqh2zy"
export type Question = BaseContent & {
  type: "question";
  questionText: string;
  status: "open" | "explored" | "answered" | "archived";
  whyItMatters: string;
  relatedIds: string[];
};
```

## 19.3 Example Questions

* Why do alarms assume everyone wakes up the same way?
* What would a client lose if our work disappeared tomorrow?
* How do you make institutional communication feel human?
* How can AI remove friction without removing human judgment?
* What makes people trust technology?
* How do you measure strategic thinking?

---

# 20. Artifact Content Model

## 20.1 Purpose

Artifacts are files or media attached to content.

Examples:

* screenshots
* PDFs
* sketches
* wireframes
* certificates
* photos
* diagrams
* videos
* documents

## 20.2 Schema

```ts id="wlh99z"
export type Artifact = BaseContent & {
  type: "artifact";
  artifactType: "image" | "pdf" | "video" | "audio" | "document" | "diagram" | "sketch" | "link";
  fileUrl?: string;
  externalUrl?: string;
  altText?: string;
  caption?: string;
  credit?: string;
  relatedContentIds: string[];
};
```

## 20.3 Required Fields

* title
* artifactType
* relatedContentIds
* visibility
* status

For images:

* altText is required.

---

# 21. Curiosity Content Model

## 21.1 Purpose

Curiosities capture small observations that reveal taste and attention.

These are lighter than weekly notes.

## 21.2 Schema

```ts id="tgugyz"
export type Curiosity = BaseContent & {
  type: "curiosity";
  observation: string;
  imageUrl?: string;
  location?: string;
  whyItCaughtAttention: string;
  relatedThemes: string[];
};
```

## 21.3 Examples

* café layout observation
* airport signage
* app onboarding detail
* packaging design
* bookshop arrangement
* NYC street behavior
* interface microcopy

---

# 22. Timeline Event Content Model

## 22.1 Purpose

Timeline Events track evolution.

Not just jobs, but ideas.

## 22.2 Schema

```ts id="qnwo50"
export type TimelineEvent = BaseContent & {
  type: "timeline-event";
  date: string;
  eventType: "career" | "education" | "idea" | "project" | "move" | "award" | "learning";
  description: string;
  significance: string;
  relatedIds: string[];
};
```

## 22.3 Timeline Philosophy

The timeline should show:

* how Harshitha’s ideas evolved
* what changed her
* what she learned
* how experiences connect

Not only:

* titles and dates

---

# 23. Resume Item Content Model

## 23.1 Purpose

Resume Items power conventional résumé views and downloads.

## 23.2 Schema

```ts id="2kji7d"
export type ResumeItem = BaseContent & {
  type: "resume-item";
  section: "education" | "experience" | "projects" | "skills" | "awards" | "leadership";
  organization?: string;
  role?: string;
  startDate?: string;
  endDate?: string;
  bullets: string[];
  order: number;
};
```

The résumé can be generated or maintained separately, but structured resume data helps recruiter mode.

---

# 24. Recruiter Evidence Content Model

## 24.1 Purpose

Recruiter Evidence maps content to hiring criteria.

This powers Recruiter Mode.

## 24.2 Schema

```ts id="yqc39f"
export type RecruiterEvidence = BaseContent & {
  type: "recruiter-evidence";
  capability: string;
  evidenceType: ContentType;
  sourceId: string;
  sourceTitle: string;
  strength: "strong" | "moderate" | "emerging";
  explanation: string;
  roleFamilies: string[];
  proofPoints?: string[];
  gaps?: string[];
};
```

## 24.3 Example

```json id="xdylih"
{
  "capability": "Stakeholder Communication",
  "sourceTitle": "OGS Communications Work",
  "strength": "strong",
  "roleFamilies": ["Consulting", "Client Advisory", "Customer Success Strategy"],
  "explanation": "Harshitha has written stakeholder emails, alumni outreach, newsletters, social media content, and professional updates requiring clarity and audience awareness."
}
```

---

# 25. Taxonomy

## 25.1 Themes

Use consistent themes.

```txt id="h580ps"
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
Robotics
Client Value
Behavioral Design
Storytelling
```

## 25.2 Role Families

```txt id="cepjmv"
Consulting
Strategy
AI Product
Product Management
Product Operations
Customer Success Strategy
Client Advisory
Founder’s Office
Operations
Business Development
```

## 25.3 Content Depth

```ts id="7nh8uy"
type ContentDepth = "quick" | "standard" | "deep" | "reference";
```

Definitions:

* quick = skimmable
* standard = normal page content
* deep = long-form investigation or dossier
* reference = used for AI or internal structure

## 25.4 Evidence Strength

```ts id="8rblnt"
type EvidenceStrength = "strong" | "moderate" | "emerging";
```

Definitions:

* strong = substantial evidence
* moderate = some evidence
* emerging = developing capability or learning path

---

# 26. Content File Naming Rules

Use clear filenames.

## 26.1 Investigations

```txt id="9rqolo"
content/investigations/smart-alarm.md
content/investigations/robotics-rover.md
content/investigations/ogs-communications.md
```

## 26.2 Weekly Notes

```txt id="8d1hz5"
content/weekly-notes/2026-07-06-cafe-queue-ux.md
```

Format:

```txt id="y72nvw"
YYYY-MM-DD-short-slug.md
```

## 26.3 Library Entries

```txt id="7lnj0k"
content/library/atomic-habits.md
```

## 26.4 Certifications

```txt id="lsjt1g"
content/certifications/kaggle-5-year.md
```

---

# 27. Frontmatter Standard

If using Markdown or MDX, every file should include frontmatter.

## 27.1 Investigation Frontmatter

```yaml id="oc80pj"
---
id: investigation-smart-alarm
type: investigation
slug: smart-alarm
title: SMART Alarm
question: Why do alarms assume everyone wakes up the same way?
summary: A behavioral design investigation into habit-aware wake-up systems.
status: draft
visibility: public
createdAt: 2026-07-06
updatedAt: 2026-07-06
themes:
  - Product
  - Behavioral Design
  - AI
capabilities:
  - Product Thinking
  - UX
  - Human Behavior
tags:
  - alarms
  - habits
  - mobile
relatedIds:
  - principle-wear-the-customers-shoes
  - library-atomic-habits
dossierId: dossier-smart-alarm
---
```

## 27.2 Weekly Note Frontmatter

```yaml id="r8tn7d"
---
id: weekly-note-cafe-queue-ux
type: weekly-note
slug: cafe-queue-ux
title: What a quiet café taught me about UX
date: 2026-07-06
summary: A short observation about how physical spaces guide behavior without instructions.
status: draft
visibility: public
themes:
  - Design
  - Human Experience
  - Systems
capabilities:
  - UX
  - Observation
tags:
  - cafes
  - signage
  - behavior
relatedIds:
  - principle-wear-the-customers-shoes
---
```

---

# 28. Content Relationships

Content relationships are central.

## 28.1 Relationship Types

```ts id="4jv70o"
export type RelationshipType =
  | "influenced"
  | "demonstrates"
  | "supports"
  | "expands"
  | "questions"
  | "reflects"
  | "evolved_from"
  | "relates_to"
  | "evidence_for";
```

## 28.2 Relationship Schema

```ts id="dvw2r5"
export type ContentRelationship = {
  id: string;
  fromId: string;
  toId: string;
  type: RelationshipType;
  description?: string;
  strength?: "strong" | "moderate" | "weak";
};
```

## 28.3 Example Relationships

```json id="6hq6jy"
{
  "fromId": "library-atomic-habits",
  "toId": "investigation-smart-alarm",
  "type": "influenced",
  "description": "Atomic Habits influenced the behavioral design framing of SMART Alarm.",
  "strength": "strong"
}
```

```json id="uqngkn"
{
  "fromId": "experience-ogs",
  "toId": "capability-stakeholder-communication",
  "type": "evidence_for",
  "description": "OGS communications work demonstrates audience-aware professional communication.",
  "strength": "strong"
}
```

---

# 29. Search and AI Indexing

## 29.1 AI Indexing Rules

Only index content where:

```txt id="r1wad2"
visibility = public
```

or

```txt id="97s3fw"
visibility = ai_allowed
```

Do not index:

* private
* internal
* drafts unless explicitly allowed
* raw files without review

## 29.2 Chunking Rules

Chunk by semantic section.

Examples:

* investigation question
* investigation problem
* investigation outcome
* dossier decision
* weekly note insight
* book reflection
* certification relevance
* principle example

## 29.3 Chunk Metadata

Each chunk should include:

```ts id="62ljno"
export type IndexedChunk = {
  id: string;
  sourceId: string;
  sourceType: ContentType;
  title: string;
  sectionTitle: string;
  text: string;
  summary?: string;
  slug: string;
  url?: string;
  visibility: "public" | "ai_allowed";
  themes: string[];
  capabilities: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
};
```

---

# 30. Content Governance

## 30.1 Content Review Checklist

Before publishing content, verify:

* Is it accurate?
* Is it public-safe?
* Does it reveal something meaningful?
* Does it support the site thesis?
* Does it have metadata?
* Does it have related content?
* Is it tagged correctly?
* Is it AI-safe?
* Does it avoid unsupported claims?
* Does it answer “So what?”

## 30.2 AI Safety Checklist

Before allowing AI access:

* visibility is public or ai_allowed
* no private details
* no unsupported metrics
* no confidential information
* no unverified claims
* source context is clear
* content is not misleading without surrounding context

---

# 31. Content Lifecycle

## 31.1 Draft

Content starts as draft.

## 31.2 Review

Content is checked for:

* accuracy
* tone
* privacy
* usefulness
* metadata

## 31.3 Publish

Content becomes visible.

## 31.4 Index

Content becomes AI-searchable if approved.

## 31.5 Update

Content can be revised.

## 31.6 Archive

Old or outdated content can be retained without emphasis.

---

# 32. Version 1 Content Requirements

Version 1 should include at minimum:

## 32.1 Profile

* short bio
* long bio
* positioning
* interests
* values
* target roles

## 32.2 Experience

At least 5 entries:

* Mechonyx COO
* Intel intern
* NYU OGS communications
* NYU MOT
* Adobe/WIBE/leadership entry

## 32.3 Investigations

At least 2 strong entries:

1. Project Atlas itself
2. Robotics Rover or SMART Alarm

If content is still in progress, mark status clearly.

## 32.4 Library

At least 3 entries:

* one psychology or behavior book
* one AI or strategy resource
* one design/product resource

## 32.5 Weekly Notes

At least 1 published note.

## 32.6 Certifications

At least 3 credentials or awards.

## 32.7 Principles

At least 5 principles.

## 32.8 Capabilities

At least 8 capability definitions.

---

# 33. Version 2 Content Requirements

Version 2 should add:

* 5 or more investigations
* 3 or more Thinking Dossiers
* 10 or more weekly notes
* 10 or more library entries
* full certification archive
* framework library
* richer capability evidence
* searchable content
* AI indexing

---

# 34. Version 3 Content Requirements

Version 3 should add:

* recruiter evidence mappings
* role family mappings
* JD test examples
* custom role alignment templates
* AI answer evaluations
* capability gap notes
* role-specific content summaries

---

# 35. Recommended Initial Content Folder

```txt id="mzmbo9"
content/
  profile/
    harshitha.md

  experiences/
    mechonyx-coo.md
    intel-gpu-software-intern.md
    nyu-ogs-communications.md
    nyu-admin-analyst.md
    nyu-mot.md
    adobe-ambassador.md
    wibe.md

  investigations/
    project-atlas.md
    smart-alarm.md
    robotics-rover.md
    ogs-communications.md

  dossiers/
    project-atlas-dossier.md
    smart-alarm-dossier.md

  weekly-notes/
    2026-07-06-first-note.md

  library/
    atomic-habits.md
    psychology-resource-placeholder.md
    ai-strategy-resource-placeholder.md

  certifications/
    kaggle-5-year.md
    adobe-ambassador.md
    dtu-hackathon.md

  principles/
    start-with-the-outcome.md
    wear-the-customers-shoes.md
    ask-why-until-the-shape-changes.md
    break-complexity-into-obvious-pieces.md
    failure-is-data-with-emotion.md

  capabilities/
    strategy.md
    ai.md
    consulting.md
    communication.md
    systems-thinking.md
    product-thinking.md
    stakeholder-alignment.md
    client-value.md
```

---

# 36. CMS Considerations

Version 1 can use Markdown or MDX.

Potential future CMS options:

* Sanity
* Contentlayer with MDX
* Payload CMS
* Notion as source, if needed
* GitHub-based content editing

Recommendation:

Start with MDX or Markdown files for simplicity and version control.

Move to CMS only when content volume increases.

## 36.1 Why Markdown First

Benefits:

* easy to version
* easy for Codex/Cursor to edit
* works well with GitHub
* simple content review
* AI indexing friendly
* no vendor lock-in
* suitable for a personal site

## 36.2 When to Move to CMS

Move to CMS if:

* weekly publishing becomes frequent
* image management becomes painful
* non-technical editing is needed
* content relationships become too complex
* AI indexing needs admin controls

---

# 37. Content Quality Bar

Content should be published only if it meets at least one of these standards:

1. It reveals how Harshitha thinks.
2. It provides evidence of a capability.
3. It helps a visitor navigate her work.
4. It adds human depth.
5. It connects two ideas meaningfully.
6. It supports recruiter trust.
7. It documents meaningful learning.
8. It strengthens the site’s long-term memory.

If it does none of these, do not publish.

---

# 38. Content Anti-Patterns

Avoid:

* generic project blurbs
* résumé bullets copied directly
* long unsupported claims
* excessive personal diary entries
* irrelevant certificates
* book lists without reflection
* weekly notes with no insight
* AI-accessible private content
* empty buzzwords
* too many tags
* duplicate content
* confusing relationships
* overclaiming impact without evidence

---

# 39. Example Complete Investigation Entry

```md id="7mu10g"
---
id: investigation-project-atlas
type: investigation
slug: project-atlas
title: Project Atlas
question: What if a portfolio could explain not just what someone did, but how they think?
summary: A living, AI-enabled portfolio system built around Harshitha’s desk, library, investigations, and thinking process.
status: draft
visibility: public
createdAt: 2026-07-06
updatedAt: 2026-07-06
themes:
  - AI
  - Product
  - Strategy
  - Design
capabilities:
  - Product Thinking
  - AI
  - Systems Thinking
  - Storytelling
tags:
  - portfolio
  - RAG
  - UX
  - personal-brand
relatedIds:
  - principle-start-with-the-outcome
  - principle-ai-should-create-space
dossierId: dossier-project-atlas
---

# What if a portfolio could explain not just what someone did, but how they think?

Most portfolios are organized around outputs. Project Atlas is organized around thinking.

The core idea is to turn Harshitha’s workspace into an interface, allowing visitors to explore her projects, books, notes, certifications, and AI guide through objects in a room.

The goal is not to impress visitors with a website. The goal is to help them feel what it would be like to collaborate with Harshitha.
```

---

# 40. Example Complete Weekly Note Entry

```md id="6s1p52"
---
id: weekly-note-first-note
type: weekly-note
slug: first-note
title: The first note on the desk
date: 2026-07-06
summary: A short reflection on why this portfolio begins with a workspace instead of a résumé.
status: draft
visibility: public
themes:
  - Design
  - Identity
  - Systems
capabilities:
  - Reflection
  - Storytelling
tags:
  - portfolio
  - workspace
  - thinking
relatedIds:
  - investigation-project-atlas
---

# The first note on the desk

I kept thinking about why most portfolios feel like they are trying to prove something.

I do not want this one to feel like proof first.

I want it to feel like an invitation.

A desk felt right because that is where unfinished questions live. A library felt right because ideas rarely arrive alone. The orb felt right because AI should help people find meaning, not replace the work of understanding.

This website begins with a room because I want people to feel like they are entering the place where thinking happens.
```

---

# 41. Implementation Notes for Cursor / Codex

When implementing content:

1. Create TypeScript types for all content models.
2. Start with Markdown or MDX files.
3. Keep content separate from UI components.
4. Create helper functions for loading content.
5. Validate frontmatter.
6. Ensure visibility is respected.
7. Create relationship helpers.
8. Do not expose private or internal content.
9. Use static content for Version 1.
10. Prepare for AI indexing later.

Suggested files:

```txt id="gxfqa2"
website/src/content/types.ts
website/src/content/loaders.ts
website/src/content/relationships.ts
website/src/content/filters.ts
website/src/content/sample-data.ts
```

---

# 42. Open Content Questions

1. Which investigations will launch in Version 1?
2. What are the first 3 library entries?
3. What is the first weekly note?
4. Which certifications should be framed on the homepage?
5. Should personal photos be included in Version 1?
6. Should the résumé be generated from structured content or maintained manually?
7. Should Thinking Dossiers be public from launch?
8. What content should be AI-allowed but not directly displayed?
9. How should Fable data be imported if available?
10. Should certifications include verification links?
11. Should metrics be estimated or only included when measured?
12. Should unfinished projects be shown if the thinking is strong?

---

# 43. Final Content North Star

Project Atlas content succeeds when it makes Harshitha easier to understand without making her feel smaller.

The content model should preserve complexity while creating clarity.

Every note, project, book, certification, and artifact should help the visitor understand:

> This is how Harshitha thinks.
> This is what shaped her.
> This is why I would trust her.
