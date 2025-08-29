import data from '@/lib/projects.json'

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
}

export const allProjects = data as Project[]

export function getProject(slug: string) {
  return allProjects.find((p) => p.slug === slug)
}
