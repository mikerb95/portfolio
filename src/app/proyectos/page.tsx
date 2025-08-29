import { allProjects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Proyectos',
}

export default function ProjectsPage() {
  return (
    <Section title="Proyectos" subtitle="Selección de trabajos y repositorios.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  )
}
