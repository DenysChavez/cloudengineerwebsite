"use client"

import {motion} from "framer-motion"
import {Mail, Code, User} from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold text-center mb-12 text-text-primary"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className="bg-surface rounded-lg shadow-md p-6 border border-border"
        >
          <div className="space-y-4">
            <a
              href="mailto:denyschavezf@gmail.com"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Mail size={20} /> denyschavezf@gmail.com
            </a>
            <a
              href="https://github.com/DenysChavez"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Code size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/denyschavez-fuentes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
            >
              <User size={20} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
