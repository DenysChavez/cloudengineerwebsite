"use client"

import {motion} from "framer-motion"

const Skills = () => {
  const skillCategories = {
    Cloud: ["AWS", "Azure", "IAM", "EC2", "S3", "VPC", "Lambda", "CloudWatch"],
    DevOps: ["Git", "GitHub Actions", "Terraform", "Docker"],
    Networking: ["DNS", "TCP/IP", "Subnets", "Firewalls"],
    "Operating Systems": ["Linux", "Windows Server"],
    Programming: ["Python", "JavaScript", "Bash"],
  }

  return (
    <section id="skills" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold text-center mb-12 text-text-primary"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="bg-background rounded-lg shadow-md p-6 border border-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
