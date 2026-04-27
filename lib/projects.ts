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
    title: "Cloud Resume Website",
    slug: "cloud-resume-website",
    description:
      "A static website hosted on AWS with a CI/CD pipeline for automated deployments.",
    details:
      "Built a portfolio resume website deployed on AWS using S3, CloudFront, and Route 53. The project includes an automated GitHub Actions pipeline for continuous deployment and HTTPS support.",
    technologies: [
      "AWS S3",
      "CloudFront",
      "Route 53",
      "HTTPS",
      "GitHub Actions",
    ],
    githubLink: "https://github.com/yourusername/cloud-resume",
    demoLink: "https://your-resume-domain.com",
  },
  {
    title: "Serverless Contact Form API",
    slug: "serverless-contact-form-api",
    description:
      "A serverless API built with AWS Lambda for handling contact form submissions.",
    details:
      "Designed and deployed a serverless contact form API using AWS Lambda, API Gateway, and DynamoDB. The API validates submissions, stores message data, and can be extended to send email notifications.",
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB"],
    githubLink: "https://github.com/yourusername/serverless-contact-api",
    demoLink: "https://api-gateway-url.com/contact",
  },
  {
    title: "Infrastructure as Code Deployment",
    slug: "infrastructure-as-code-deployment",
    description:
      "Automated infrastructure provisioning using Terraform for cloud resources.",
    details:
      "Implemented reusable Terraform modules to provision AWS infrastructure and streamline environment deployment. The project demonstrates IaC best practices for managing cloud resources and automation.",
    technologies: ["Terraform", "AWS", "Automation"],
    githubLink: "https://github.com/yourusername/iac-deployment",
    demoLink: "https://github.com/yourusername/iac-deployment",
  },
]
