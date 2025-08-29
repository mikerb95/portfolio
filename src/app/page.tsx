import Link from 'next/link'
import { Section } from '@/components/Section'
import { allProjects } from '@/lib/projects'

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Section
        title="Desarrollador de Software, Web y DBA"
        subtitle="Construyo soluciones robustas y escalables con foco en rendimiento y DX."
      >
        <div className="mt-4 flex gap-3">
          <Link
            href="/proyectos"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white shadow hover:opacity-95"
          >
            Ver proyectos
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-muted"
          >
            Ver CV
          </Link>
        </div>
      </Section>

      <Section title="Selección de proyectos">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.slice(0, 3).map((p) => (
            <div key={p.slug} className="rounded-lg border p-5 bg-white">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>
              <Link
                href={`/proyectos/${p.slug}`}
                className="text-accent text-sm mt-3 inline-block hover:underline"
              >
                Detalles →
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
