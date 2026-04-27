"use client"

import {motion} from "framer-motion"
import ProjectCard from "./ProjectCard"
import {projects} from "../lib/projects"

const Projects = () => {
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
              key={project.slug}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
            >
              <ProjectCard
                {...project}
                detailsLink={`/projects/${project.slug}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
