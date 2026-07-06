import type { Certification } from "./types";

export const certifications: Certification[] = [
  {
    id: "cert-nyu-mot",
    type: "certification",
    slug: "nyu-mot",
    title: "M.S. Management of Technology",
    issuer: "New York University",
    issuedDate: "Expected May 2027",
    category: "degree",
    summary: "Merit Scholar, 4.0 GPA — strategy, financial analysis, economics, marketing, supply chain.",
    status: "published",
    visibility: "public",
    themes: ["Strategy", "Operations"],
    capabilities: ["Strategy", "Operations"],
    tags: ["education", "nyu"],
    relatedIds: [],
    whyItMatters:
      "Bridging engineering roots with business strategy — and pushing beyond the syllabus, especially in finance: SOFR, IRR, NPV, bond pricing, and capital structure studied independently for real fluency.",
    imageUrl: "/images/cert-placeholder.svg",
  },
  {
    id: "cert-vit-mtech",
    type: "certification",
    slug: "vit-mtech",
    title: "M.Tech Integrated, Software Engineering",
    issuer: "Vellore Institute of Technology",
    issuedDate: "May 2023",
    category: "degree",
    summary: "Merit Scholar, Top 1%, 3.9 GPA — five years of rigorous engineering education.",
    status: "published",
    visibility: "public",
    themes: ["Systems", "Robotics"],
    capabilities: ["Systems Thinking", "Robotics"],
    tags: ["education", "vit"],
    relatedIds: [],
    whyItMatters:
      "The technical core: the foundation for building full-stack robotics systems, contributing to GPU driver development at Intel, and leading software architecture in an early-stage company.",
    imageUrl: "/images/cert-placeholder.svg",
  },
  {
    id: "cert-google-data",
    type: "certification",
    slug: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    issuedDate: "PLACEHOLDER",
    category: "certification",
    summary: "Data cleaning, analysis, visualization, and data-driven decision-making.",
    status: "published",
    visibility: "public",
    themes: ["Data", "Learning"],
    capabilities: ["Data"],
    tags: ["data-analytics"],
    relatedIds: [],
    whyItMatters:
      "Formalized the data fluency used daily — from Salesforce dataset standardization at NYU to KPI dashboards and burn-rate tracking at Mechonyx.",
    imageUrl: "/images/cert-placeholder.svg",
  },
  {
    id: "cert-ibm-pm",
    type: "certification",
    slug: "ibm-program-manager",
    title: "IBM Program Manager Professional Certificate",
    issuer: "IBM",
    issuedDate: "PLACEHOLDER",
    category: "certification",
    summary: "Program management, cross-functional coordination, and structured delivery.",
    status: "published",
    visibility: "public",
    themes: ["Operations", "Strategy"],
    capabilities: ["Operations", "Leadership"],
    tags: ["program-management"],
    relatedIds: [],
    whyItMatters:
      "Supports the operational discipline demonstrated at Mechonyx — coordinating engineering, sales, and operations from concept to commercial launch.",
    imageUrl: "/images/cert-placeholder.svg",
  },
];

export function getCertification(slug: string) {
  return certifications.find((c) => c.slug === slug);
}
