"use client"

import {motion} from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/10"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-4xl md:text-6xl font-bold text-text-primary mb-4"
        >
          Denys V. Chavez-Fuentes
        </motion.h1>
        <motion.h2
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className="text-xl md:text-2xl text-secondary mb-6"
        >
          Aspiring Cloud Engineer
        </motion.h2>
        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          As a Cloud Computing student, I am committed to learning and staying
          current with new technologies. I invest time in studying, reading, and
          practicing technical skills to prepare myself to contribute
          effectively in a professional IT or cloud environment.
        </motion.p>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-primary text-surface px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
