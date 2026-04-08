"use client"

import {motion} from "framer-motion"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "Cloud Resume Website",
      description:
        "A static website hosted on AWS with CI/CD pipeline for automated deployments.",
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
      description:
        "A serverless API built with AWS Lambda for handling contact form submissions.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB"],
      githubLink: "https://github.com/yourusername/serverless-contact-api",
      demoLink: "https://api-gateway-url.com/contact",
    },
    {
      title: "Infrastructure as Code Deployment",
      description:
        "Automated infrastructure provisioning using Terraform for cloud resources.",
      technologies: ["Terraform", "AWS", "Automation"],
      githubLink: "https://github.com/yourusername/iac-deployment",
      demoLink: "https://github.com/yourusername/iac-deployment",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold text-center mb-12 text-text-primary"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
