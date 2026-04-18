/**
 * Hushh Open Source Hiring Challenge 2026 — Static content
 * All text, links, dates, prizes, tracks, steps, and rules live here.
 * The UI imports from this file so content changes never touch layout code.
 */

/* ── Dates ── */
export const CONTRIBUTION_START = "12 April 2026";
export const CONTRIBUTION_END = "26 April 2026";

/* ── Hero ── */
export const HERO_TITLE = "Hushh Open Source Hiring Challenge";
export const HERO_YEAR = "2026";
export const HERO_SUBTITLE =
  "Build on real open-source products. Submit a real pull request. Get shortlisted for internship and full-time hiring opportunities at Hushh.";
export const HERO_DESCRIPTION =
  "This is not a hackathon. This is an open contribution window. Explore the repositories, understand the products, identify bugs, improve documentation, add meaningful features, optimize performance, and submit quality pull requests.";

/* ── Registration ── */
export const UNSTOP_EVENT_URL =
  "https://unstop.com/o/7jERowW?lb=A6M5aljg&utm_medium=Share&utm_source=ankitsin6546&utm_campaign=Online_coding_challenge";

/* ── Project Tracks ── */
export interface TrackLink {
  label: string;
  url: string;
}

export interface ProjectTrack {
  id: string;
  name: string;
  icon: string;
  description: string;
  idealFor: string;
  links: TrackLink[];
}

export const PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: "hushh-tech",
    name: "hushhTech",
    icon: "code",
    description:
      "Frontend experience, APIs, repo hygiene, testing, performance, documentation, and developer-facing improvements.",
    idealFor:
      "Contributors interested in frontend, APIs, testing, performance, documentation, and developer experience.",
    links: [
      {
        label: "Repository",
        url: "https://github.com/hushh-labs/hushh_Tech_website",
      },
      {
        label: "README",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/README.md",
      },
      {
        label: "License",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/LICENSE",
      },
      {
        label: "Contributing Guide",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/CONTRIBUTING.md",
      },
      {
        label: "Code of Conduct",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/CODE_OF_CONDUCT.md",
      },
      {
        label: "Support",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/SUPPORT.md",
      },
      {
        label: "Secret Audit",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/docs/OPEN_SOURCE_SECRET_AUDIT.md",
      },
      {
        label: "Issues",
        url: "https://github.com/hushh-labs/hushh_Tech_website/issues",
      },
      {
        label: "Bug Report",
        url: "https://github.com/hushh-labs/hushh_Tech_website/issues/new?template=bug_report.yml",
      },
      {
        label: "Feature Request",
        url: "https://github.com/hushh-labs/hushh_Tech_website/issues/new?template=feature_request.yml",
      },
      {
        label: "Pull Requests",
        url: "https://github.com/hushh-labs/hushh_Tech_website/pulls",
      },
      {
        label: "Open a PR",
        url: "https://github.com/hushh-labs/hushh_Tech_website/compare",
      },
      {
        label: "Security Policy",
        url: "https://github.com/hushh-labs/hushh_Tech_website/blob/main/SECURITY.md",
      },
      {
        label: "Security Tab",
        url: "https://github.com/hushh-labs/hushh_Tech_website/security",
      },
    ],
  },
  {
    id: "kai",
    name: "Kai",
    icon: "psychology",
    description:
      "Deeper AI-first product flow, architecture study, real issue identification, and meaningful improvements.",
    idealFor:
      "Contributors who want to explore AI-first product architecture, identify real gaps, and contribute meaningful improvements.",
    links: [
      {
        label: "Application",
        url: "https://kai.hushh.ai/",
      },
      {
        label: "Repository",
        url: "https://github.com/hushh-labs/hushh-research",
      },
    ],
  },
];

/* ── Participant Expectations ── */
export interface ParticipantExpectation {
  title: string;
  description: string;
  icon: string;
}

export const PARTICIPANT_EXPECTATIONS: ParticipantExpectation[] = [
  {
    title: "Study the codebase",
    description:
      "Go through the repository in detail and understand the product, architecture, and important flows before you start coding.",
    icon: "developer_guide",
  },
  {
    title: "Read the documentation",
    description:
      "Review the README, contribution guide, support and security documentation, and any other public material relevant to your chosen track.",
    icon: "menu_book",
  },
  {
    title: "Identify a real problem",
    description:
      "Look for meaningful bugs, missing tests, documentation gaps, UX gaps, performance bottlenecks, or useful feature opportunities.",
    icon: "search",
  },
  {
    title: "Build a real improvement",
    description:
      "Work on a contribution that is useful, relevant, reviewable, and aligned with the repository's contribution protocols.",
    icon: "build",
  },
  {
    title: "Raise a clean pull request",
    description:
      "Open your PR in the correct repository with clear context, implementation notes, and validation details before the deadline.",
    icon: "merge",
  },
  {
    title: "Submit your final entry",
    description:
      "Complete your platform submission with the required links and a short write-up explaining what you solved, why it matters, and how you validated it.",
    icon: "task_alt",
  },
];

/* ── Participation Steps ── */
export interface ParticipationStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const PARTICIPATION_STEPS: ParticipationStep[] = [
  {
    step: 1,
    title: "Register",
    description: "Register for the opportunity on the platform.",
    icon: "person_add",
  },
  {
    step: 2,
    title: "Choose Track",
    description: "Choose one track: hushhTech or Kai.",
    icon: "route",
  },
  {
    step: 3,
    title: "Read Documentation",
    description:
      "Read the repository documentation carefully. Go through the README, contribution rules, and other public documentation.",
    icon: "menu_book",
  },
  {
    step: 4,
    title: "Identify Contribution",
    description:
      "Pick an existing issue, find a new bug, suggest and implement a useful feature, improve documentation, tests, developer experience, or optimize performance.",
    icon: "search",
  },
  {
    step: 5,
    title: "Build & Branch",
    description:
      "Create your working branch properly and make your contribution. Do not push directly to the main branch.",
    icon: "terminal",
  },
  {
    step: 6,
    title: "Test & Validate",
    description:
      "Test or validate your changes. Make sure your pull request is meaningful, clear, and reviewable.",
    icon: "verified",
  },
  {
    step: 7,
    title: "Raise Pull Request",
    description:
      "Raise a pull request in the correct repository before the deadline.",
    icon: "merge",
  },
  {
    step: 8,
    title: "Submit Entry",
    description:
      "Submit your final entry on the platform with your GitHub profile link, chosen track, repository name, issue/problem statement link, PR link, and a short write-up.",
    icon: "send",
  },
];

/* ── Final Submission Requirements ── */
export interface SubmissionRequirement {
  label: string;
  description: string;
  icon: string;
}

export const SUBMISSION_REQUIREMENTS: SubmissionRequirement[] = [
  {
    label: "GitHub profile link",
    description:
      "Include your public GitHub profile so the reviewers can map the final entry to the correct contributor history.",
    icon: "account_circle",
  },
  {
    label: "Chosen project track",
    description:
      "Clearly mention whether you contributed to hushhTech or Kai.",
    icon: "route",
  },
  {
    label: "Repository name",
    description:
      "Specify the exact repository where your contribution was made.",
    icon: "folder",
  },
  {
    label: "Issue link or problem statement",
    description:
      "Link an existing issue or describe the bug, gap, or opportunity you identified in a concise and reviewable way.",
    icon: "live_help",
  },
  {
    label: "Pull request link",
    description:
      "A proper PR link is required for evaluation. Submissions without one will not be considered.",
    icon: "link",
  },
  {
    label: "Short write-up",
    description:
      "Explain what you found, why it matters, what you changed, and how you tested or validated the work.",
    icon: "article",
  },
];

/* ── What We Look For ── */
export interface LookForItem {
  label: string;
  icon: string;
}

export const WHAT_WE_LOOK_FOR: LookForItem[] = [
  { label: "Understand a real codebase before coding", icon: "visibility" },
  {
    label: "Think from both product and engineering perspectives",
    icon: "lightbulb",
  },
  { label: "Identify meaningful problems worth solving", icon: "target" },
  { label: "Write clean and maintainable code", icon: "code" },
  {
    label: "Communicate clearly through pull requests",
    icon: "chat",
  },
  { label: "Show strong ownership", icon: "shield" },
];

/* ── Rules ── */
export const RULES: string[] = [
  "Read the README and contributor documentation before starting.",
  "Follow the contribution protocols of the selected repository.",
  "Do not push directly to the main branch.",
  "Create a proper topic branch.",
  "Keep your pull request focused, meaningful, and easy to review.",
  "Clearly explain what changed, why it changed, and how it was validated.",
  "Do not commit secrets, tokens, API keys, certificates, credentials, or .env files.",
  "Do not report security vulnerabilities publicly through open issues.",
  "Respect the project's Code of Conduct, Security Policy, and support workflow.",
  "AI-assisted coding is allowed, but participants must fully understand and justify their submitted work.",
  "Low-effort, copied, spammy, irrelevant, or cosmetic-only submissions may be rejected.",
];

/* ── Evaluation Criteria ── */
export interface EvaluationCriterion {
  label: string;
  icon: string;
}

export const EVALUATION_CRITERIA: EvaluationCriterion[] = [
  { label: "Relevance & Quality", icon: "star" },
  { label: "Codebase Understanding", icon: "data_object" },
  { label: "Technical Depth", icon: "layers" },
  { label: "Code Quality", icon: "code" },
  { label: "PR Clarity", icon: "description" },
  { label: "Testing & Validation", icon: "bug_report" },
  { label: "Security Awareness", icon: "lock" },
  { label: "Product Thinking", icon: "lightbulb" },
  { label: "Ownership & Execution", icon: "rocket_launch" },
];

export const EVALUATION_INTRO =
  "Judging focuses on contribution quality and real impact, not just the number of pull requests submitted.";

export const EVALUATION_NOTES: string[] = [
  "Reviewers look at relevance, codebase understanding, technical depth, maintainability, and how clearly you communicate the change.",
  "Testing, validation, security awareness, and product thinking all strengthen your submission.",
  "One strong, well-scoped contribution with a clear PR and write-up will outperform multiple low-effort submissions.",
];

/* ── Why Join ── */
export interface WhyJoinItem {
  title: string;
  description: string;
  icon: string;
}

export const WHY_JOIN: WhyJoinItem[] = [
  {
    title: "Work on real open-source products",
    description:
      "Contribute to live codebases tied to real Hushh product surfaces and active engineering work.",
    icon: "public",
  },
  {
    title: "Show proof through contributions",
    description:
      "Get visibility through meaningful pull requests instead of relying only on resumes or static portfolios.",
    icon: "visibility",
  },
  {
    title: "Build engineering depth",
    description:
      "Demonstrate product thinking, technical judgment, testing discipline, and ownership in a real repository.",
    icon: "insights",
  },
  {
    title: "Turn strong PRs into opportunities",
    description:
      "Standout work can lead to internship and full-time shortlisting at Hushh.",
    icon: "work_history",
  },
  {
    title: "Contribute to ambitious products",
    description:
      "Build for hushhTech and explore deeper AI-first product work in Kai.",
    icon: "rocket_launch",
  },
];

/* ── Prizes ── */
export interface Prize {
  position: string;
  amount: string;
  highlight: boolean;
}

export const PRIZES: Prize[] = [
  { position: "1st Position", amount: "₹50,000", highlight: true },
  { position: "2nd Position", amount: "₹25,000", highlight: false },
];

/* ── Hiring Opportunities ── */
export interface HiringOpportunity {
  type: "internship" | "fulltime";
  title: string;
  stipend: string;
  perks: string[];
}

export const HIRING_OPPORTUNITIES: HiringOpportunity[] = [
  {
    type: "internship",
    title: "Internship",
    stipend: "₹30,000 – ₹40,000 / month",
    perks: [
      "Fully furnished accommodation support (Pune-based).",
      "Remote option available for candidates outside Pune.",
      "Access to Mac, Apple developer account, Prime membership, and role-based developer resources.",
    ],
  },
  {
    type: "fulltime",
    title: "Full-Time",
    stipend: "₹80,000 – ₹1,00,000 / month",
    perks: [
      "Fully furnished flat or accommodation support (Pune-based).",
      "Room, rent, food, and essential living support covered.",
      "Apple ecosystem work resources — MacBook, iPhone access, Apple developer account support, and related tools.",
    ],
  },
];

/* ── Eligibility ── */
export const ELIGIBILITY: string[] = [
  "College students",
  "Freshers",
  "Professionals",
  "Open-source contributors",
  "Frontend developers",
  "Backend developers",
  "Full-stack developers",
  "AI and product builders",
];

export interface FormatDetail {
  title: string;
  description: string;
  icon: string;
}

export const FORMAT_DETAILS: FormatDetail[] = [
  {
    title: "Online",
    description:
      "Participate from anywhere during the open contribution window.",
    icon: "language",
  },
  {
    title: "Individual or Team",
    description: "Solo participation is allowed, and teams can have 1 to 2 members.",
    icon: "group",
  },
  {
    title: "GitHub PR + Short Write-up",
    description: "This is the expected submission format for final evaluation.",
    icon: "description",
  },
];

/* ── Contact ── */
export const CONTACT_EMAIL = "ankit@hushh.ai";
export const COMPANY_WEBSITE = "https://www.hushh.ai/";

/* ── Submission Clarity ── */
export const SUBMISSION_NOTES: string[] = [
  "Only submissions with a proper pull request link will be considered.",
  "Your pull request must be raised on or before 26 April 2026.",
  "Quality matters more than quantity. One strong PR is better than multiple weak submissions.",
  "If you raise more than one PR, evaluation will focus on overall impact, quality, and relevance.",
  "Low-effort, cosmetic-only, copied, spammy, or irrelevant submissions may be rejected.",
];
