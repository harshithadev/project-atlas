# Project Atlas

## 04 AI Architecture

### Ask Harshitha AI, Recruiter Mode, RAG, Knowledge Base, and Future Intelligence Layer

**Version:** 0.1
**Owner:** Harshitha Devineni
**Document Type:** AI Product Architecture, RAG Blueprint, Conversation Design, Intelligence Layer Strategy
**Primary Audience:** AI engineers, full-stack engineers, designers, product strategists, AI agents, future collaborators
**Depends On:** `00-master-context.md`, `01-product-vision-experience-blueprint.md`, `02-design-system.md`, `03-information-architecture.md`, `AGENTS.md`
**Status:** Foundational Draft

---

# 1. Executive Summary

Ask Harshitha AI is the intelligent guide layer of Project Atlas.

It is represented visually by a subtle floating orb in the interactive workspace. Its purpose is not to act like a generic chatbot. Its purpose is to help visitors understand Harshitha’s work, thinking, values, projects, and role alignment through grounded, context-aware conversation.

The AI should help visitors answer questions such as:

* Who is Harshitha?
* How does she think?
* What projects best demonstrate strategy?
* What projects best demonstrate AI?
* How does she handle messy problems?
* What should a recruiter know?
* How does her background align with this role?
* Where should I start if I only have three minutes?
* What should I read if I want to understand her deeply?

The long-term AI vision includes:

* Ask Harshitha AI
* Recruiter Mode
* AI-assisted portfolio navigation
* job description alignment
* content recommendations
* Thinking Dossier search
* personalized summaries
* future voice tour
* future custom recruiter PDF generation
* future knowledge graph exploration

The guiding AI principle:

> AI should make Harshitha’s thinking easier to explore, never replace or exaggerate it.

---

# 2. AI Product Philosophy

## 2.1 AI as Guide, Not Gimmick

Ask Harshitha AI must not exist simply because AI is trendy.

It should solve a real problem:

> A thoughtful person is complex. AI helps visitors navigate that complexity without flattening it.

The AI gives visitors a way to ask:

* What matters here?
* Where should I go next?
* What evidence supports this?
* How does this connect to my interests?
* Why does this project matter?
* What does this reveal about Harshitha?

## 2.2 AI as Interpreter of Evidence

The AI should interpret structured portfolio content, not invent new claims.

It should connect:

* projects
* Thinking Dossiers
* books
* certifications
* principles
* weekly notes
* experiences
* career goals
* capabilities
* recruiter needs

## 2.3 AI as a Thoughtful Host

The AI should feel like a calm, intelligent guide inside the workspace.

It should be:

* professional
* curious
* warm
* concise
* grounded
* helpful
* honest
* lightly witty only when appropriate

It should not be:

* overly casual
* overly robotic
* salesy
* exaggerated
* fake-personal
* overconfident
* invasive
* gimmicky

## 2.4 AI Should Preserve Trust

Trust is the most important AI outcome.

The AI must:

* admit uncertainty
* cite source content when possible
* distinguish evidence from inference
* avoid inflated claims
* avoid making commitments
* avoid pretending to be Harshitha
* protect private content
* avoid hallucinations

---

# 3. AI Experience Goals

Ask Harshitha AI should help visitors feel:

1. **Guided**
   They know where to start.

2. **Understood**
   The AI responds to their intent.

3. **Confident**
   The AI surfaces relevant evidence.

4. **Curious**
   The AI invites deeper exploration.

5. **Trusting**
   The AI is honest about what it knows and does not know.

6. **Connected**
   The AI helps them understand Harshitha as a person, not just as a résumé.

---

# 4. AI Scope by Version

## 4.1 Version 1: Orb UI and Static Intelligence

Version 1 should not attempt a full AI backend.

Purpose:

* introduce the orb visually
* establish AI as part of the experience
* provide a clean interaction shell
* offer suggested questions
* route visitors to existing content

Version 1 capabilities:

* floating orb
* Ask Harshitha panel
* suggested prompts
* static responses or scripted guidance
* links to relevant pages
* no hallucination risk
* no job description upload
* no RAG yet

Version 1 examples:

Prompt:

> What should a recruiter know?

Static response:

> Start with Investigations and Principles. They show how Harshitha frames messy problems, communicates value, and connects technology with human outcomes.

Prompt:

> Where should I start?

Static response:

> If you have three minutes, start with About. If you have ten, open the notebook and explore an Investigation.

---

## 4.2 Version 2: RAG Over Approved Portfolio Content

Version 2 introduces retrieval-augmented generation over approved public content.

Capabilities:

* answer questions using approved portfolio content
* retrieve relevant chunks from projects, notes, books, certifications, and dossiers
* cite source pages
* suggest next pages
* summarize investigations
* explain Harshitha’s principles
* answer basic recruiter questions

No job description upload yet unless simple paste-only prototype is approved.

---

## 4.3 Version 3: Recruiter Mode

Version 3 introduces Recruiter Mode.

Capabilities:

* paste or upload job description
* extract key role requirements
* map Harshitha’s evidence to role requirements
* surface strongest matches
* identify potential gaps
* recommend specific investigations and dossiers
* generate recruiter-friendly summary
* optionally produce a downloadable alignment brief

Recruiter Mode should be honest and evidence-based.

---

## 4.4 Version 4: Thinking Graph

Version 4 introduces connected idea exploration.

Capabilities:

* map books to projects
* map projects to principles
* map notes to themes
* map certifications to capabilities
* map capabilities to recruiter needs
* visualize idea relationships

The Thinking Graph turns the knowledge base into an explorable system.

---

## 4.5 Future Versions

Potential future capabilities:

* voice tour
* returning visitor memory
* adaptive homepage
* personalized recruiter paths
* custom portfolio PDF generation
* AI-generated interview prep
* AI-generated “why Harshitha” summary
* Fable reading sync
* Spotify inspiration layer
* private admin ingestion tool
* automatic field note tagging
* semantic search across all public content

---

# 5. AI User Personas

## 5.1 Recruiter

Needs:

* quick relevance
* role fit
* proof
* résumé-level clarity
* confidence in next step

Likely questions:

* What should I know about Harshitha?
* How does she fit a strategy role?
* What projects show AI capability?
* What experience shows client communication?
* Can she work in ambiguity?

AI goal:

Surface role-relevant evidence quickly.

---

## 5.2 Hiring Manager

Needs:

* judgment
* working style
* depth
* ability to handle ambiguity
* examples

Likely questions:

* How does Harshitha solve messy problems?
* What is her strongest project?
* What does she do when requirements are unclear?
* How does she handle tradeoffs?
* What would she bring to my team?

AI goal:

Demonstrate thinking style through evidence.

---

## 5.3 Founder

Needs:

* ownership
* adaptability
* resourcefulness
* business and technical bridge
* speed with thoughtfulness

Likely questions:

* Can Harshitha figure things out?
* What startup experience does she have?
* How does she approach client problems?
* What does she know about operations?
* How does she use AI?

AI goal:

Show ambiguity tolerance, ownership, and execution.

---

## 5.4 Consulting / Strategy Professional

Needs:

* structured thinking
* business value framing
* communication
* problem decomposition
* stakeholder understanding

Likely questions:

* Does she think like a consultant?
* How does she quantify impact?
* How does she frame client value?
* What would she do with a vague client ask?
* What projects show strategy?

AI goal:

Map portfolio content to consulting capabilities.

---

## 5.5 Curious Visitor

Needs:

* orientation
* interesting paths
* personal understanding
* exploration

Likely questions:

* Where should I start?
* What is this site?
* What is the desk?
* What is she currently exploring?
* What does she read?

AI goal:

Make the site enjoyable and understandable.

---

# 6. AI Entry Points

Ask Harshitha should be available from multiple places.

## 6.1 Homepage Orb

Primary entry.

The orb floats in the workspace.

Click opens Ask Harshitha panel.

## 6.2 Top Navigation

Navigation link:

```txt
Ask Harshitha
```

## 6.3 Content Page Contextual Prompt

On pages like investigations, show contextual prompts.

Example:

```txt
Ask Harshitha to summarize this investigation.
```

## 6.4 Recruiter Mode Page

Dedicated AI workflow for role alignment.

## 6.5 Contact Page

AI can suggest what to mention when reaching out.

Version 1 can be static.

---

# 7. Ask Harshitha UI Architecture

## 7.1 Orb Component

Component name:

```txt
AskOrb
```

Purpose:

Visual entry point for AI.

Properties:

```ts
type AskOrbProps = {
  state: "idle" | "hover" | "active" | "thinking" | "error";
  position?: "workspace" | "fixed";
  onOpen: () => void;
};
```

States:

* idle
* hover
* active
* thinking
* unavailable
* reduced-motion

Behavior:

* gentle float
* subtle glow
* hover expansion
* click opens panel
* respects reduced motion

---

## 7.2 Ask Panel Component

Component name:

```txt
AskPanel
```

Purpose:

Conversation interface.

Desktop:

* right-side slide panel
* width 400 to 480px
* warm glass surface
* rounded corners
* accessible modal behavior if overlaying

Mobile:

* full-screen modal or bottom sheet
* input fixed near bottom
* large tap targets

Sections:

1. Header
2. AI intro
3. Suggested prompts
4. Conversation stream
5. Input field
6. Grounding/privacy note
7. Close button

---

## 7.3 Ask Panel Intro Copy

Recommended:

```txt
Hi, I’m Ask Harshitha.

I’m a guide trained on Harshitha’s public work, projects, notes, and thinking system. Ask me where to start, what she has built, or how she approaches messy problems.
```

Short version:

```txt
I can help you explore Harshitha’s work, thinking, projects, and role fit.
```

---

## 7.4 Suggested Prompt Groups

### General

```txt
Where should I start?
Who is Harshitha?
How does Harshitha think?
What makes this portfolio different?
```

### Recruiter

```txt
What should a recruiter know?
Which project best shows strategy?
Which project best shows AI?
How does Harshitha handle ambiguity?
```

### Project

```txt
Summarize her strongest project.
Show me projects related to consulting.
Show me projects related to product thinking.
What evidence shows client-facing ability?
```

### Personal

```txt
What is Harshitha currently learning?
What shapes how she thinks?
What books influence her work?
```

---

# 8. Conversation Design

## 8.1 Tone

Ask Harshitha should sound like:

* an intelligent guide
* a thoughtful host
* a calm assistant
* a portfolio interpreter

It should not sound like:

* Harshitha pretending to speak in first person
* a hype machine
* a recruiter bot
* an overly casual friend
* a cold enterprise assistant

Preferred pronouns:

Use “Harshitha” or “she” when answering.

Example:

```txt
Harshitha’s strongest evidence for strategy is her ability to reframe messy problems into clear decision structures.
```

Avoid:

```txt
I am amazing at strategy.
```

The AI is not Harshitha.
It is Ask Harshitha.

---

## 8.2 Response Structure

Use concise structured responses.

Preferred answer format:

1. Direct answer
2. Evidence
3. Suggested next step

Example:

```txt
Harshitha’s strongest strategy signal is how she frames ambiguous problems before jumping into execution.

Evidence:
- Her robotics startup work required translating client pain points into technical action.
- Her OGS communications work shows stakeholder-aware storytelling.
- Her portfolio investigations are structured around questions, tradeoffs, and outcomes.

You may want to start with the Investigations section.
```

---

## 8.3 Response Length

Default:

* 100 to 200 words

For recruiter mode:

* 300 to 700 words

For summaries:

* brief unless user asks for detail

For project deep dives:

* can be longer, but structured

---

## 8.4 Uncertainty Language

When unsure:

```txt
I don’t have enough evidence in Harshitha’s public portfolio to answer that confidently.
```

When partially sure:

```txt
Based on the available portfolio content, the strongest signal is...
```

When content is missing:

```txt
That part of the knowledge base has not been added yet.
```

When user asks private/personal question:

```txt
I can only answer from Harshitha’s approved public content.
```

---

## 8.5 Light Wit

The AI may use occasional personality.

Example:

```txt
The short answer: start with the notebook. It is doing most of the intellectual heavy lifting here.
```

Do not overdo jokes.

No forced puns.

No “girlboss” clichés.

No excessive emojis.

---

# 9. Knowledge Base Architecture

## 9.1 Knowledge Base Purpose

The knowledge base is the structured source of truth for AI and content.

It should contain:

* approved public content
* structured metadata
* source documents
* portfolio pages
* Thinking Dossiers
* weekly notes
* books
* certifications
* experiences
* principles
* capabilities
* project artifacts

The AI should only answer from this knowledge base and approved system instructions.

---

## 9.2 Knowledge Base Content Types

### Person Profile

Contains:

* name
* bio
* location
* education
* professional summary
* interests
* values
* current goals
* preferred roles
* communication style

### Experience

Contains:

* role
* organization
* dates
* context
* responsibilities
* outcomes
* capabilities demonstrated
* related projects

### Investigation

Contains:

* question
* context
* problem
* process
* outcome
* lessons
* capabilities
* related dossier
* related notes
* related books

### Thinking Dossier

Contains:

* project process
* research
* assumptions
* tradeoffs
* decision log
* metrics
* artifacts
* lessons
* future work

### Weekly Note

Contains:

* observation
* insight
* date
* themes
* related ideas
* related projects

### Library Entry

Contains:

* title
* author
* status
* themes
* reflection
* key idea
* connected content

### Certification

Contains:

* title
* issuer
* date
* verification link
* capability
* relevance

### Principle

Contains:

* title
* explanation
* example
* related content

### Capability

Contains:

* name
* description
* evidence
* related content

### Artifact

Contains:

* file
* type
* description
* visibility
* related content

---

## 9.3 Knowledge Base Visibility Levels

Every content item should have a visibility level.

```ts
type Visibility = "public" | "ai_allowed" | "private" | "internal";
```

Definitions:

### public

Displayed on website and available to AI.

### ai_allowed

Not necessarily shown directly, but safe for AI to use in answers.

### private

Not available to public AI.

### internal

Used only for development, planning, or drafts.

AI retrieval must exclude private and internal content.

---

## 9.4 Knowledge Base File Structure

Suggested structure:

```txt
/content
  /profile
    harshitha.md

  /experiences
    intel.md
    mechonyx.md
    ogs.md
    nyu-admin.md
    adobe.md
    wibe.md

  /investigations
    smart-alarm.md
    robotics-rover.md
    ogs-communications.md

  /dossiers
    smart-alarm-dossier.md
    robotics-rover-dossier.md

  /weekly-notes
    2026-07-idea-001.md

  /library
    atomic-habits.md
    design-of-everyday-things.md

  /certifications
    adobe.md
    kaggle.md

  /principles
    start-with-outcome.md
    wear-the-customers-shoes.md

  /capabilities
    strategy.md
    ai.md
    consulting.md
    communication.md
```

This structure may later be replaced by a CMS, but the content model should remain stable.

---

# 10. RAG Architecture

## 10.1 RAG Overview

Retrieval-Augmented Generation allows Ask Harshitha to answer questions using approved content.

Process:

1. User asks question.
2. System classifies intent.
3. System retrieves relevant content chunks.
4. System constructs answer using only retrieved and approved context.
5. System cites or links to source pages.
6. System suggests next action.

---

## 10.2 Retrieval Flow

```txt
User Query
↓
Query preprocessing
↓
Intent classification
↓
Embedding search
↓
Metadata filtering
↓
Top-k retrieval
↓
Context ranking
↓
Prompt assembly
↓
LLM response
↓
Citation/link generation
↓
UI display
```

---

## 10.3 Chunking Strategy

Content should be chunked by semantic sections.

Do not chunk arbitrarily by character count alone.

Recommended chunk types:

* investigation overview
* investigation problem
* investigation process
* investigation outcome
* dossier decision
* weekly note insight
* book reflection
* certification relevance
* principle explanation
* experience summary

Chunk metadata:

```ts
type KnowledgeChunk = {
  id: string;
  sourceId: string;
  sourceType: ContentType;
  title: string;
  slug: string;
  section: string;
  text: string;
  summary?: string;
  themes: string[];
  capabilities: string[];
  visibility: "public" | "ai_allowed";
  url?: string;
  date?: string;
};
```

---

## 10.4 Embedding Metadata

Every embedded chunk should include:

* source type
* slug
* title
* section
* themes
* capabilities
* date
* visibility
* public URL
* related content IDs

This enables filtered retrieval.

Example:

```json
{
  "id": "investigation-smart-alarm-problem",
  "sourceType": "investigation",
  "title": "SMART Alarm",
  "section": "Problem",
  "themes": ["Product", "Behavioral Design", "AI"],
  "capabilities": ["Product Thinking", "UX", "Human Behavior"],
  "visibility": "public",
  "url": "/investigations/smart-alarm"
}
```

---

## 10.5 Retrieval Filters

Filters should support:

* public only
* source type
* capability
* theme
* project
* date
* recruiter mode relevance
* content depth

Examples:

For recruiter queries:

```txt
sourceType: investigation, experience, certification, principle
capabilities: role-derived
visibility: public or ai_allowed
```

For book queries:

```txt
sourceType: library, weekly-note
themes: requested topic
```

---

## 10.6 Retrieval Ranking

Rank by:

1. Semantic similarity
2. Capability match
3. Source quality
4. Recency where relevant
5. Content depth
6. Visibility
7. Relationship to current page

Preferred source priority for recruiter mode:

1. Investigations
2. Experiences
3. Thinking Dossiers
4. Certifications
5. Principles
6. Weekly Notes
7. Library entries

Preferred source priority for personal exploration:

1. About
2. Principles
3. Weekly Notes
4. Library
5. Investigations
6. Experiences

---

# 11. Prompt Architecture

## 11.1 System Prompt Principles

The system prompt should tell Ask Harshitha:

* it is not Harshitha
* it is a guide to Harshitha’s public work
* answer only from approved context
* admit uncertainty
* avoid exaggeration
* cite or link sources when possible
* be concise and warm
* recommend next pages
* protect private content

---

## 11.2 Base System Prompt Draft

```txt
You are Ask Harshitha, an AI guide for Harshitha Devineni’s portfolio website, Project Atlas.

You help visitors understand Harshitha’s work, thinking, projects, experiences, principles, and role alignment.

You are not Harshitha. Do not speak as Harshitha in first person unless quoting approved content.

Answer only using the provided portfolio context and approved knowledge base content. If the evidence is incomplete, say so clearly.

Be professional, curious, warm, concise, and grounded. Avoid hype, exaggeration, and unsupported claims.

When useful, recommend specific pages, investigations, dossiers, or notes the visitor should explore next.

Never invent experience, metrics, awards, certifications, private details, or future commitments.

If a question asks for private information or something outside the approved knowledge base, explain that you can only answer from approved public content.
```

---

## 11.3 Answer Prompt Template

```txt
User question:
{question}

Current page:
{currentPage}

Visitor mode:
{visitorMode}

Retrieved context:
{retrievedContext}

Instructions:
Answer the question using only the retrieved context.
If relevant, include:
- direct answer
- evidence from Harshitha’s work
- suggested next page or action

Do not invent details.
If the answer is uncertain, say so.
```

---

## 11.4 Recruiter Mode Prompt Template

```txt
You are Ask Harshitha in Recruiter Mode.

Your task is to analyze a job description and map it to Harshitha Devineni’s approved portfolio evidence.

Do not exaggerate. Do not claim perfect fit unless strongly supported.

Job description:
{jobDescription}

Extracted role requirements:
{roleRequirements}

Relevant portfolio evidence:
{retrievedEvidence}

Output:
1. Role summary
2. Key capabilities required
3. Strongest alignment areas
4. Evidence from Harshitha’s portfolio
5. Potential growth areas or gaps
6. Recommended investigations or dossiers to review
7. Suggested interview questions
8. Recommended next step

Tone:
Professional, grounded, strategic, concise.
```

---

## 11.5 Page Context Prompt

The AI should know the current page context.

Example:

If user is on `/investigations/smart-alarm`, retrieval should prioritize:

* smart alarm investigation
* smart alarm dossier
* related field notes
* related principles
* related books

This enables contextual answers.

---

# 12. Intent Classification

Before answering, classify user intent.

## 12.1 Intent Categories

```ts
type AskIntent =
  | "site_navigation"
  | "about_harshitha"
  | "project_summary"
  | "role_alignment"
  | "recruiter_question"
  | "capability_question"
  | "library_question"
  | "weekly_notes_question"
  | "contact_question"
  | "private_or_unsupported"
  | "general";
```

---

## 12.2 Intent Examples

### site_navigation

User asks:

```txt
Where should I start?
```

### about_harshitha

User asks:

```txt
Who is Harshitha?
```

### project_summary

User asks:

```txt
Tell me about SMART Alarm.
```

### role_alignment

User asks:

```txt
Is Harshitha a good fit for strategy roles?
```

### recruiter_question

User asks:

```txt
What should I know before interviewing her?
```

### private_or_unsupported

User asks:

```txt
What is her personal phone number?
```

---

# 13. Recruiter Mode Architecture

## 13.1 Recruiter Mode Product Goal

Recruiter Mode helps hiring teams understand how Harshitha’s background maps to a specific role.

It should feel like:

> a strategic alignment brief

Not:

> a keyword-matching résumé bot

---

## 13.2 Recruiter Mode User Flow

1. User opens Recruiter Mode.
2. User pastes or uploads job description.
3. System shows privacy note.
4. User submits.
5. System extracts role requirements.
6. System maps requirements to portfolio capabilities.
7. System retrieves evidence.
8. AI generates alignment summary.
9. Results show evidence and suggested pages.
10. User can ask follow-up questions.
11. User can contact Harshitha.

---

## 13.3 Role Requirement Extraction

Extract:

* title
* function
* seniority
* industry
* required skills
* preferred skills
* responsibilities
* soft skills
* tools
* business outcomes
* stakeholder needs
* AI requirements
* strategy requirements
* communication requirements

Example output:

```json
{
  "roleTitle": "Client Advocate",
  "primaryFunctions": [
    "strategic account management",
    "client success",
    "business value reporting",
    "AI-enabled operations"
  ],
  "requiredCapabilities": [
    "stakeholder communication",
    "business value framing",
    "proactive problem solving",
    "AI workflow understanding",
    "relationship management"
  ],
  "toolsMentioned": ["Salesforce", "Excel", "Power BI"],
  "softSkills": ["executive presence", "active listening", "consulting communication"]
}
```

---

## 13.4 Capability Mapping

Map role requirements to Harshitha’s capability graph.

Example:

```txt
Role requirement: stakeholder communication
Portfolio evidence:
- OGS communications work
- alumni outreach
- presentations
- newsletters
- stakeholder emails
```

Example:

```txt
Role requirement: AI-enabled operations
Portfolio evidence:
- Ask Harshitha AI architecture
- AI workflow exploration
- product thinking around AI
- future automation projects
```

Example:

```txt
Role requirement: business value reporting
Portfolio evidence:
- startup COO experience
- client-facing robotics project
- future Drive Value-style case study
```

---

## 13.5 Recruiter Mode Output Structure

### Section 1: Role Snapshot

Briefly summarize what the role appears to need.

### Section 2: Strongest Alignment

List strongest matches with evidence.

### Section 3: Portfolio Evidence

Show linked content:

* investigations
* dossiers
* experiences
* certifications
* principles

### Section 4: Potential Gaps

Be honest.

Example:

```txt
The role appears to value Salesforce depth. Harshitha’s current profile shows technology management and operations experience, but Salesforce-specific depth should be strengthened or evidenced through a project/certification.
```

### Section 5: Suggested Interview Questions

Example:

```txt
Ask Harshitha how she would translate a completed technical project into a monthly client value report.
```

### Section 6: Next Step

CTA:

```txt
Invite Harshitha to discuss how she would approach your client’s value reporting process.
```

---

## 13.6 Recruiter Mode Privacy

Recruiter Mode should state:

```txt
Job descriptions are used only to generate this alignment response. Do not paste confidential information unless you are comfortable sharing it.
```

If storing is enabled later, users must be informed.

Version 1 or 2 should avoid storing pasted JDs.

---

# 14. Thinking Graph Architecture

## 14.1 Purpose

The Thinking Graph connects Harshitha’s ideas.

It shows how:

* books influence projects
* projects reveal principles
* weekly notes connect to capabilities
* certifications support role readiness
* experiences demonstrate themes
* questions evolve over time

## 14.2 Node Types

```ts
type GraphNodeType =
  | "investigation"
  | "book"
  | "weekly-note"
  | "principle"
  | "certification"
  | "experience"
  | "capability"
  | "question"
  | "framework";
```

## 14.3 Edge Types

```ts
type GraphEdgeType =
  | "influenced"
  | "demonstrates"
  | "supports"
  | "expands"
  | "questions"
  | "reflects"
  | "evolved_from"
  | "relates_to";
```

## 14.4 Example Connections

```txt
Atomic Habits → influenced → SMART Alarm
SMART Alarm → demonstrates → Behavioral Design
OGS Communications → demonstrates → Stakeholder Communication
Failure Reflection → supports → Resilience
AI Architecture → demonstrates → AI Product Thinking
```

---

# 15. Data Model Overview

## 15.1 Content Type Enum

```ts
type ContentType =
  | "profile"
  | "experience"
  | "investigation"
  | "dossier"
  | "weekly-note"
  | "library-entry"
  | "certification"
  | "principle"
  | "capability"
  | "artifact";
```

---

## 15.2 Base Content Interface

```ts
type BaseContent = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  type: ContentType;
  visibility: "public" | "ai_allowed" | "private" | "internal";
  status: "draft" | "published" | "archived" | "future";
  createdAt: string;
  updatedAt: string;
  themes: string[];
  capabilities: string[];
  relatedIds: string[];
};
```

---

## 15.3 Investigation Interface

```ts
type Investigation = BaseContent & {
  type: "investigation";
  question: string;
  context: string;
  problem: string;
  stakeholders?: string[];
  constraints?: string[];
  approach: string;
  tradeoffs?: string[];
  outcome?: string;
  lessons?: string[];
  dossierId?: string;
  tools?: string[];
  role?: string;
};
```

---

## 15.4 Recruiter Evidence Interface

```ts
type RecruiterEvidence = {
  capability: string;
  evidenceType: ContentType;
  sourceId: string;
  sourceTitle: string;
  strength: "strong" | "moderate" | "emerging";
  explanation: string;
  url?: string;
};
```

---

# 16. AI Backend Architecture

## 16.1 Version 1 Backend

No AI backend required.

Use static data and UI shell.

## 16.2 Version 2 Backend

Suggested architecture:

```txt
Next.js app
↓
API route /api/ask
↓
Query processing
↓
Vector search
↓
LLM response
↓
Return answer with source links
```

## 16.3 Version 3 Backend

Add:

```txt
/api/recruiter
/api/ingest
/admin/knowledge
```

Potential services:

* Postgres with vector extension
* hosted vector database
* file-based MDX with build-time embeddings
* serverless functions
* OpenAI-compatible LLM provider

Final provider decisions belong in Engineering Blueprint.

---

# 17. AI Frontend States

Ask Panel states:

```ts
type AskPanelState =
  | "closed"
  | "intro"
  | "ready"
  | "loading"
  | "answering"
  | "error"
  | "empty"
  | "offline";
```

## 17.1 Loading Copy

```txt
Looking through Harshitha’s notes...
```

```txt
Finding the clearest evidence...
```

```txt
Opening the right drawer...
```

Use lightly. Do not overdo cute copy.

## 17.2 Error Copy

```txt
I could not reach the knowledge base right now. You can still explore the notebook or contact Harshitha directly.
```

## 17.3 Empty State

```txt
Ask me where to start, what Harshitha has built, or how she thinks through messy problems.
```

---

# 18. AI Safety and Guardrails

## 18.1 No Hallucinated Experience

The AI must not invent:

* job titles
* dates
* employers
* awards
* certifications
* metrics
* technical skills
* personal details
* future commitments

## 18.2 No Overstated Fit

For role alignment:

Avoid:

```txt
Harshitha is the perfect candidate.
```

Prefer:

```txt
Based on the available evidence, Harshitha appears strongly aligned with the role’s emphasis on stakeholder communication, structured problem-solving, and technology-business translation.
```

## 18.3 No Private Information

AI must not reveal private notes, internal planning documents, or hidden content.

## 18.4 No Hiring Guarantees

AI must not claim:

* she will accept a role
* she is available for specific dates unless public
* she can perform a skill not evidenced
* she guarantees outcomes

## 18.5 Sensitive Content

If user asks overly personal questions, respond:

```txt
I can only answer from Harshitha’s approved public portfolio content.
```

---

# 19. Evaluation Strategy

## 19.1 AI Quality Tests

Test questions:

```txt
Who is Harshitha?
Where should I start?
What project shows strategy?
What project shows AI?
How does Harshitha think?
What are her strongest skills?
What is her startup experience?
Does she know Salesforce?
Is she a fit for this job description?
What are her weaknesses?
What is her phone number?
```

Evaluate for:

* accuracy
* groundedness
* helpfulness
* tone
* refusal quality
* source linking
* no hallucination
* no exaggeration

---

## 19.2 Recruiter Mode Tests

Use sample job descriptions for:

* Client Advocate
* Product Manager
* Strategy Analyst
* AI Product Intern
* Customer Success Strategy role
* Founder’s Office role

Check whether output:

* extracts real requirements
* maps evidence honestly
* identifies gaps
* recommends relevant content
* avoids keyword stuffing
* sounds professional

---

## 19.3 Human Review

Harshitha should review:

* all system prompts
* all recruiter mode outputs
* all capability mappings
* all public content ingestion
* all AI-generated summaries before major launch

---

# 20. Analytics for AI

Track:

```txt
orb_opened
suggested_prompt_clicked
question_submitted
answer_generated
source_link_clicked
recruiter_mode_started
jd_submitted
alignment_generated
contact_clicked_after_ai
ai_error
```

Do not collect sensitive personal data unnecessarily.

For recruiter mode, avoid storing job descriptions unless explicitly enabled.

---

# 21. AI Accessibility

Ask Harshitha must be accessible.

Requirements:

* keyboard accessible orb
* aria-label on orb
* focus trap in panel
* screen-reader friendly chat transcript
* input label
* escape closes panel
* visible focus states
* reduced motion support
* no color-only state communication
* loading state announced politely

Orb accessible label:

```txt
Open Ask Harshitha AI
```

---

# 22. AI Performance Requirements

Version 2 AI responses should target:

* initial response under 5 seconds
* streaming if possible
* fallback if unavailable
* graceful loading state
* no blocking of page navigation
* efficient retrieval
* limited context size
* caching for common questions

---

# 23. AI Content Ingestion Workflow

Future workflow:

1. Harshitha adds or uploads content.
2. Content receives metadata.
3. Visibility is assigned.
4. Content is reviewed.
5. Content is chunked.
6. Embeddings are generated.
7. Knowledge base is updated.
8. AI test questions are run.
9. Content becomes available to Ask Harshitha.

No content should be AI-accessible without a visibility decision.

---

# 24. Admin Interface Future Scope

Future admin panel could support:

* add weekly note
* add book
* upload certification
* upload dossier
* mark content public/private
* trigger reindexing
* preview AI answer
* approve AI summary
* view most asked questions

This is not Version 1.

---

# 25. Example AI Responses

## 25.1 “Where should I start?”

```txt
If you have only a few minutes, start with About and then open the notebook for Investigations.

If you want to understand how Harshitha thinks, start with Principles. If you want evidence of her work, start with Investigations. If you want the more personal layer, visit the Library and Weekly Notes.
```

## 25.2 “What makes Harshitha different?”

```txt
Harshitha’s strongest differentiator is empathetic decomposition: she breaks messy problems into clearer pieces while staying close to the human context.

That shows up in how she asks “why,” how she thinks about customers, and how she connects technology, communication, and strategy.
```

## 25.3 “Is Harshitha good for consulting?”

```txt
Based on the portfolio content, Harshitha shows several consulting-relevant strengths: structured problem framing, stakeholder-aware communication, technology-business translation, and comfort with ambiguity.

The strongest evidence is likely in her startup operations work, communications work, and project investigations that show how she frames problems before proposing solutions.
```

## 25.4 “Does Harshitha know Salesforce?”

```txt
The current public knowledge base does not show deep Salesforce expertise as a completed capability. It does show related operations and technology management experience. If Salesforce becomes important to a target role, adding a Salesforce project, certification, or learning note would strengthen the evidence.
```

This is the correct style: honest and strategic.

---

# 26. AI Roadmap

## Phase 0: Documentation

* Define AI behavior
* Define content model
* Define safety rules
* Define recruiter mode
* Define RAG architecture

## Phase 1: UI Shell

* Build AskOrb
* Build AskPanel
* Add suggested prompts
* Add static guidance
* Add accessible modal behavior

## Phase 2: Basic Retrieval

* Create structured content files
* Build embeddings pipeline
* Create `/api/ask`
* Retrieve relevant chunks
* Generate grounded answers
* Add source links

## Phase 3: Recruiter Mode Prototype

* Add `/recruiter`
* Paste JD
* Extract requirements
* Map evidence
* Generate alignment output
* Add contact CTA

## Phase 4: Knowledge Graph

* Add graph data model
* Connect content nodes
* Visualize relationships
* Use graph for AI recommendations

## Phase 5: Advanced Personalization

* Returning visitor state
* Custom summaries
* AI-guided paths
* Voice tour
* PDF generation

---

# 27. Version 1 AI Acceptance Criteria

Version 1 is successful if:

* orb is visible and beautiful
* orb feels integrated into the workspace
* Ask Panel opens smoothly
* suggested prompts are useful
* static answers route users correctly
* AI is clearly framed as future-capable
* no fake AI claims are made
* UI is accessible
* mobile experience works
* implementation can later connect to backend without redesign

---

# 28. Version 2 AI Acceptance Criteria

Version 2 is successful if:

* users can ask natural questions
* answers are grounded in approved content
* AI admits uncertainty
* source links are included when relevant
* no private content is leaked
* answers are concise and warm
* AI recommends relevant pages
* system handles errors gracefully
* common recruiter questions work reliably

---

# 29. Version 3 AI Acceptance Criteria

Version 3 is successful if:

* recruiter can paste a JD
* role requirements are extracted accurately
* evidence mapping is honest
* strengths and gaps are clearly stated
* relevant pages are recommended
* output feels like a strategic brief
* recruiter has a clear next step
* JD privacy is respected

---

# 30. Open AI Questions

1. Which AI provider will be used?
2. Will embeddings be generated at build time or runtime?
3. Will content live in MDX, CMS, or database?
4. Will recruiter mode accept file upload or paste only?
5. Should AI responses cite exact sources from launch?
6. Should Ask Harshitha have a dedicated `/ask` page?
7. Should the orb proactively suggest paths later?
8. Should returning visitor memory be implemented?
9. Should custom recruiter PDFs be generated?
10. Should Harshitha approve all AI summaries before publication?
11. Should private notes ever be used for AI but not displayed?
12. Should voice mode exist, and what should it sound like?

---

# 31. Final AI North Star

Ask Harshitha AI succeeds when it helps visitors understand Harshitha more clearly than a static website could.

It should make complexity easier to navigate.
It should connect evidence to questions.
It should help recruiters see fit without exaggeration.
It should help curious visitors discover depth.
It should protect trust above all else.

The AI should never be the main character.

The main character is Harshitha’s way of thinking.
