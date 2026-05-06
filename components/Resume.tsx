"use client"

import {motion} from "framer-motion"
import {Download} from "lucide-react"

const Resume = () => {
  return (
    <section id="resume" className="py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold mb-12 text-text-primary"
        >
          Resume
        </motion.h2>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <a
            href="Denys_Chavez-Fuentes_Cloud_Engineer_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-surface px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors mb-8 font-medium"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          className="bg-background rounded-lg shadow-md p-6 border border-border"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Resume Snapshot
          </h3>
          <ul className="space-y-3 text-left text-text-secondary">
            <li>
              Hands-on Azure and AWS cloud engineering lab experience (2024-2026)
            </li>
            <li>
              Built secure IAM/RBAC strategies with least-privilege and
              permission boundaries
            </li>
            <li>
              Designed multi-tier VPC and VNet networking with peering, private
              connectivity, and monitoring
            </li>
            <li>
              Implemented serverless and event-driven workloads with Lambda,
              Azure Functions, EventBridge, Event Grid, and Service Bus
            </li>
            <li>
              Applied CI/CD and deployment automation using Azure CLI,
              deployment slots, Bash, and Python
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
