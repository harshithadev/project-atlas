export type Visibility = "public" | "ai_allowed" | "private" | "internal";
export type PublishStatus = "draft" | "review" | "published" | "archived" | "future";

export type ContentType =
  | "profile"
  | "experience"
  | "project"
  | "dossier"
  | "weekly-note"
  | "library-entry"
  | "certification"
  | "principle"
  | "capability";

export type BaseContent = {
  id: string;
  type: ContentType;
  slug: string;
  title: string;
  summary: string;
  status: PublishStatus;
  visibility: Visibility;
  themes: string[];
  capabilities: string[];
  tags: string[];
  relatedIds: string[];
};

export type Profile = {
  fullName: string;
  preferredName: string;
  location: string;
  education: string;
  positioningStatement: string;
  coreBrandSentence: string;
  shortBio: string;
  longBio: string;
  values: string[];
  interests: string[];
  targetRoles: string[];
  strengths: string[];
  contact: {
    email: string;
    linkedin: string;
    github?: string;
  };
};

export type Experience = BaseContent & {
  type: "experience";
  organization: string;
  role: string;
  startDate: string;
  endDate?: string;
  context: string;
  responsibilities: string[];
  outcomes: string[];
  lessons: string[];
};

export type Project = BaseContent & {
  type: "project";
  question: string;
  context: string;
  problem: string;
  whyItMattered: string;
  stakeholders: string[];
  approach: string;
  tradeoffs: string[];
  outcome: string;
  lessons: string[];
  failures?: string[];
  futureWork?: string[];
  dossierId?: string;
};

export type ThinkingDossier = BaseContent & {
  type: "dossier";
  projectId: string;
  originalQuestion: string;
  problemFraming: string;
  assumptions: string[];
  researchNotes: { title: string; note: string; implication: string }[];
  decisionLog: { option: string; decision: string; reason: string }[];
  lessons: string[];
};

export type WeeklyNote = BaseContent & {
  type: "weekly-note";
  date: string;
  observation: string;
  insight: string;
  question: string;
  body: string;
};

export type LibraryEntry = BaseContent & {
  type: "library-entry";
  author: string;
  resourceType: "book" | "article" | "course";
  readingStatus: "reading" | "read" | "revisiting";
  keyIdea: string;
  reflection: string;
  changedThinking: string;
};

export type Certification = BaseContent & {
  type: "certification";
  issuer: string;
  issuedDate: string;
  category: "degree" | "certification" | "award" | "recognition";
  whyItMatters: string;
  credentialUrl?: string;
  imageUrl?: string;
};

export type Principle = BaseContent & {
  type: "principle";
  statement: string;
  explanation: string;
  example: string;
};

export type KnowledgeChunk = {
  id: string;
  sourceId: string;
  sourceType: ContentType;
  title: string;
  section: string;
  text: string;
  url: string;
  themes: string[];
  capabilities: string[];
};

export type WorkspaceHotspot = {
  id: string;
  label: string;
  href?: string;
  action?: "toggle-theme" | "open-ask";
  description: string;
  /** Anchor dot position (%) — sits directly on the object in the scene. */
  position: { x: number; y: number };
  /** Connector stem length in px between the anchor dot and the pill. */
  stem: number;
  /** Whether the label pill hangs below the anchor dot (default: above). */
  labelBelow?: boolean;
};
