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
            href="/resume.pdf"
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
          <p className="text-text-secondary">
            Resume preview would be displayed here. Please download the PDF to
            view the full resume.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
