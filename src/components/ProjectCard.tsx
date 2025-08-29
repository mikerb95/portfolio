import Link from 'next/link'

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border p-5 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight">
          <Link href={`/proyectos/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <div className="flex gap-2 text-xs text-gray-500">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded bg-muted px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>
      <div className="mt-4 flex gap-3 text-sm">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:underline"
          >
            Código
          </a>
        )}
      </div>
    </article>
  )
}
