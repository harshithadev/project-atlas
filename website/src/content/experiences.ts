import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "experience-nyu-admin",
    type: "experience",
    slug: "nyu-admin-analyst",
    title: "Administrative Analyst — NYU",
    organization: "New York University",
    role: "Administrative Analyst",
    startDate: "Jan 2026",
    summary:
      "Workflow analysis and operational reporting — turning messy administrative data into decisions leadership can act on.",
    status: "published",
    visibility: "public",
    themes: ["Operations", "Data"],
    capabilities: ["Operations", "Data", "Communication"],
    tags: ["nyu", "salesforce"],
    relatedIds: [],
    context:
      "Administrative operations within a large university system, working with Salesforce, Advanced Excel, Smartsheets, Google Analytics, and QuickBooks.",
    responsibilities: [
      "Cleaned and standardized Salesforce datasets, identifying inconsistencies and improving data reliability for downstream analysis",
      "Produced operational reporting and presentation-ready materials for senior leadership",
      "Managed cross-functional communications and translated operational data into structured insights",
    ],
    outcomes: [
      "Reduced turnaround time by 28% through process optimization",
      "Improved data reliability supporting operational reporting and decision-making",
    ],
    lessons: [
      "Large organizations run on invisible systems — understanding them is a skill.",
    ],
  },
  {
    id: "experience-mechonyx-coo",
    type: "experience",
    slug: "mechonyx-coo",
    title: "Co-Founder & COO — Mechonyx Automation",
    organization: "Mechonyx Automation",
    role: "Co-Founder & Chief Operations Officer",
    startDate: "Jan 2024",
    endDate: "Jun 2025",
    summary:
      "Operationally led a B2B industrial robotics startup — fundraising, GTM strategy, financial discipline, and customer discovery.",
    status: "published",
    visibility: "public",
    themes: ["Operations", "Strategy", "Robotics"],
    capabilities: ["Operations", "Strategy", "Client Value", "Leadership"],
    tags: ["startup", "robotics"],
    relatedIds: ["project-robotics-rover"],
    context:
      "Early-stage B2B robotics startup building fully in-house autonomous robotic systems — hardware and software — from concept through customer validation to commercial launch.",
    responsibilities: [
      "Owned end-to-end product lifecycle, coordinating engineering, sales, and operations teams using Agile/Scrum",
      "Ran structured discovery interviews and competitor benchmarking across 3 target verticals; translated ambiguous client pain points into PRDs and feature roadmaps",
      "Built investor-grade financial models (TAM/SAM, unit economics, P&L scenarios); pitched to prospective investors and anchor clients",
      "Designed change management frameworks for 5+ B2B enterprise clients",
    ],
    outcomes: [
      "Secured seed funding with a data-driven investor pitch",
      "Increased product-market fit by 40% through structured competitor analysis, user interviews, and hypothesis-driven iteration",
      "Reduced monthly burn by 35% through cost optimization, vendor renegotiation, and zero-based budgeting",
      "Reduced client system downtime by 30% through structured implementation planning",
    ],
    lessons: [
      "Startup COO work is translation — between client fear and engineering action, between vision and unit economics.",
      "Cap tables, investor relations, and GTM positioning are learned by doing them under pressure.",
    ],
  },
  {
    id: "experience-mechonyx-swe",
    type: "experience",
    slug: "mechonyx-lead-engineer",
    title: "Lead Software Engineer — Mechonyx Automation",
    organization: "Mechonyx Automation",
    role: "Lead Software Engineer, R&D and Integration",
    startDate: "May 2023",
    endDate: "Dec 2023",
    summary:
      "Architected autonomous robotics systems — ROS2, SLAM, computer vision — while driving down cost and delivery time.",
    status: "published",
    visibility: "public",
    themes: ["Robotics", "Systems"],
    capabilities: ["Systems Thinking", "Robotics"],
    tags: ["ros2", "slam", "robotics"],
    relatedIds: ["project-robotics-rover"],
    context:
      "Technical foundation of the startup: ROS2, SLAM, Python, computer vision, ML, AWS, Docker, Kubernetes, RealSense SDK.",
    responsibilities: [
      "Led software architecture decisions for autonomous navigation pipelines",
      "Facilitated cross-functional retrospectives applying Agile methodology",
      "Designed automation frameworks for enterprise clients",
    ],
    outcomes: [
      "Reduced unit hardware cost by 22% through component sourcing innovation and sensor architecture refactoring",
      "Improved project delivery by 20% via cross-functional retrospectives",
      "Reduced system downtime by 30% for 5+ B2B clients",
    ],
    lessons: [
      "Technical elegance means nothing if field operators can't trust it.",
    ],
  },
  {
    id: "experience-intel",
    type: "experience",
    slug: "intel-gpu-intern",
    title: "Software Development Intern — Intel",
    organization: "Intel Corporation",
    role: "Software Development Intern, GPU Driver Development",
    startDate: "Aug 2022",
    endDate: "May 2023",
    summary:
      "GPU driver development — and the habit of solving problems nobody assigned me.",
    status: "published",
    visibility: "public",
    themes: ["Systems"],
    capabilities: ["Systems Thinking"],
    tags: ["intel", "gpu", "cpp"],
    relatedIds: [],
    context:
      "GPU driver development in a large, matrixed engineering organization. C++, SQL, DirectX10, Python, shell scripting.",
    responsibilities: [
      "Improved GPU rendering performance through systematic shader optimization and diagnostic analysis",
      "Automated regression testing with Python",
      "Participated in sprint planning, backlog grooming, and code reviews across the full SDLC",
    ],
    outcomes: [
      "Improved rendering performance by 12% frame rate and 7% latency, validated in production driver benchmarks",
      "Automated 80% of regression testing, eliminating 5+ hours of manual work per week",
      "Identified a systemic regression failure pattern nobody had asked about; the diagnostic framework reduced resolution time by 66% and was adopted across two teams",
    ],
    lessons: [
      "Job descriptions are not ceilings. Find the problem outside your scope and move on it.",
    ],
  },
  {
    id: "experience-leadership",
    type: "experience",
    slug: "leadership-community",
    title: "Leadership & Community",
    organization: "NYU · VIT",
    role: "Student Government, WIBE, Robotics Club, ViTeach",
    startDate: "2018",
    summary:
      "Elected representation, industry engagement, national-scale event coordination, and STEM teaching.",
    status: "published",
    visibility: "public",
    themes: ["Leadership", "Communication"],
    capabilities: ["Leadership", "Communication", "Stakeholder Alignment"],
    tags: ["leadership"],
    relatedIds: [],
    context:
      "Leadership roles spanning student government, professional clubs, robotics, and volunteer teaching.",
    responsibilities: [
      "NYU Student Government — Alternate Senator at Large representing Women in Business and Sustainability (Oct 2025–present)",
      "NYU WIBE Club — Graduate Representative, organizing industry engagement sessions and speaker coordination (Nov 2025–present)",
      "VIT Robotics Club — Vice President, orchestrated a national robotics competition with 500+ participants (2019–2020)",
      "ViTeach — Volunteer STEM teacher for underprivileged children across two academic years (2018–2020)",
    ],
    outcomes: [
      "Surfaced graduate student priorities in institutional decision-making",
      "Managed end-to-end logistics and multi-team coordination at national scale",
    ],
    lessons: [
      "Teaching forces clarity — if you cannot explain it simply, you do not understand it yet.",
    ],
  },
];
