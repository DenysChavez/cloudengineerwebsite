"use client"

import {motion} from "framer-motion"
import {Award} from "lucide-react"

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold text-center mb-12 text-text-primary"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="bg-surface rounded-lg shadow-md p-6 text-center border border-border"
          >
            <Award className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              AWS Certified Cloud Practitioner
            </h3>
            <p className="text-text-secondary">In Progress</p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className="bg-surface rounded-lg shadow-md p-6 text-center border border-border"
          >
            <Award className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-text-primary">
              Cloud Computing Certification Program (CCCP)
            </h3>
            <p className="text-text-secondary">
              Delaware County Community College
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
