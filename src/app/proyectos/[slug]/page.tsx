import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject } from '@/lib/projects'

type Params = { params: { slug: string } }

export function generateMetadata({ params }: Params) {
  const project = getProject(params.slug)
  return {
    title: project ? project.title : 'Proyecto',
    description: project?.description,
  }
}

export default function ProjectDetailPage({ params }: Params) {
  const project = getProject(params.slug)
  if (!project) return notFound()
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <div className="mt-4 flex gap-3 text-sm">
        {project.demoUrl && (
          <a className="text-accent hover:underline" href={project.demoUrl} target="_blank">
            Demo
          </a>
        )}
        {project.repoUrl && (
          <a className="text-gray-600 hover:underline" href={project.repoUrl} target="_blank">
            Código
          </a>
        )}
      </div>
      <div className="mt-8">
        <Link href="/proyectos" className="text-sm text-gray-600 hover:underline">
          ← Volver a proyectos
        </Link>
      </div>
    </div>
  )
}
