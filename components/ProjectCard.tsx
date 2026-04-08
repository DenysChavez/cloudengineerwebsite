import {motion} from "framer-motion"
import {ExternalLink, Code} from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink: string
  image?: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{scale: 1.05}}
      className="bg-surface rounded-lg shadow-md p-6 border border-border hover:border-border-hover transition-colors"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-text-primary">{title}</h3>
      <p className="text-text-secondary mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-medium mb-2 text-text-primary">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary/10 text-secondary px-2 py-1 rounded text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <a
          href={githubLink}
          className="flex items-center gap-1 text-primary hover:text-primary-hover transition-colors"
        >
          <Code size={16} /> GitHub
        </a>
        <a
          href={demoLink}
          className="flex items-center gap-1 text-primary hover:text-primary-hover transition-colors"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
