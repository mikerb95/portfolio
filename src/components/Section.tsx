import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title?: string
  subtitle?: string
  id?: string
}>

export function Section({ title, subtitle, id, children }: Props) {
  return (
    <section id={id} className="py-8 md:py-12">
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground max-w-prose mt-2">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
