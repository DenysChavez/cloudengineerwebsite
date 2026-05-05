"use client"

import Image from "next/image"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-background to-secondary/10"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="w-56 h-56 shrink-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10 bg-slate-950">
            <Image
              src="/profile.jpg"
              alt="Professional profile picture"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              loading="eager"
            />
          </div>

          <div className="text-center md:text-left">
            <motion.h1
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="text-4xl md:text-6xl font-bold text-text-primary mb-4"
            >
              Denys V. Chavez Fuentes
            </motion.h1>
            <motion.h2
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
              className="text-xl md:text-2xl text-secondary mb-6"
            >
              Cloud Engineer
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.4}}
              className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto md:mx-0"
            >
              Results-driven Cloud Engineering candidate with hands-on
              experience across AWS and Microsoft Azure. I design secure cloud
              networking, implement least-privilege IAM/RBAC, and automate
              deployments with Python and Azure CLI. Open to entry-level Cloud
              Engineer roles focused on infrastructure, hybrid environments, and
              scalable application architecture.
            </motion.p>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.6}}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="bg-primary text-surface px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
              >
                View Projects
              </a>
              <a
                href="/Denys_Chavez-Fuentes_Cloud_Engineer_Resume.pdf"
                download
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
