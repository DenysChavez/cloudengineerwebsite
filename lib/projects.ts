export interface Project {
  title: string
  slug: string
  description: string
  details: string
  technologies: string[]
  githubLink: string
  demoLink: string
  image?: string
}

export const projects: Project[] = [
  {
    title: "AWS Static Website Hosting & Security",
    slug: "aws-static-website-hosting-security",
    description:
      "Deployed a production-style static website on Amazon S3 with secure bucket policy controls and hardened access settings.",
    details:
      "Designed and deployed an AWS S3 static website with public access controls, IAM-based least-privilege permissions, S3 versioning, and server-side encryption to improve data integrity and security posture.",
    technologies: [
      "AWS S3",
      "IAM",
      "Bucket Policies",
      "S3 Versioning",
      "Server-Side Encryption",
    ],
    githubLink: "https://github.com/denyschavez",
    demoLink: "https://denyschavez.github.io",
  },
  {
    title: "AWS VPC Network Architecture & Security",
    slug: "aws-vpc-network-architecture-security",
    description:
      "Built a multi-tier VPC architecture with segmented subnets, controlled routing, and private service access for secure cloud networking.",
    details:
      "Designed a secure multi-AZ AWS VPC with public/private subnet segmentation, Internet and NAT Gateways, VPC Peering, VPC Endpoints for private S3 access, and CloudWatch-integrated Flow Logs for monitoring and audit readiness.",
    technologies: [
      "AWS VPC",
      "Subnets",
      "Route Tables",
      "Internet Gateway",
      "NAT Gateway",
      "VPC Peering",
      "VPC Flow Logs",
      "CloudWatch",
      "VPC Endpoints",
    ],
    githubLink: "https://github.com/denyschavez",
    demoLink: "https://denyschavez.github.io",
  },
  {
    title: "Spotify Clone (AI-Assisted Full-Stack)",
    slug: "spotify-clone-ai-assisted-full-stack",
    description:
      "Created a full-stack music streaming app using AI-assisted development workflows and modular React architecture.",
    details:
      "Built a full-stack music app with queue management, playback sequencing, and state-driven UI behavior. Used Cursor-assisted code exploration workflows and secure project configuration practices including .cursorignore optimization.",
    technologies: [
      "React",
      "TypeScript",
      "Full-Stack Architecture",
      "State Management",
      "Cursor AI",
    ],
    githubLink: "https://github.com/denyschavez",
    demoLink: "https://denyschavez.github.io",
  },
]
