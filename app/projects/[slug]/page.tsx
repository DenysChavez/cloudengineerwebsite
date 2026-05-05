import Link from "next/link"
import {notFound} from "next/navigation"
import {projects} from "../../../lib/projects"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="min-h-screen py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-8 bg-surface border border-border rounded-3xl p-8 shadow-lg">
          <div className="space-y-4">
            <Link
              href="/#projects"
              className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
            >
              ← Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              {project.title}
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl">
              {project.details}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Summary
              </h2>
              <p className="text-text-secondary">{project.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-background/80">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Project Slug
              </h3>
              <p className="text-text-secondary">{project.slug}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
