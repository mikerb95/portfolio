export const metadata = {
  title: 'CV',
}

export default function CVPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Currículum</h1>
      <p className="text-gray-600">
        Reemplaza este texto con tu resumen profesional, stack y logros clave.
      </p>
      <a
        className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-white shadow hover:opacity-95"
        href="/cv.pdf"
        target="_blank"
      >
        Descargar PDF
      </a>
      <div className="prose max-w-none">
        <h2>Experiencia</h2>
        <ul>
          <li>Empresa X – Rol – 2022–Actualidad</li>
          <li>Empresa Y – Rol – 2020–2022</li>
        </ul>
        <h2>Educación</h2>
        <ul>
          <li>Universidad Z – Título</li>
        </ul>
        <h2>Habilidades</h2>
        <p>Next.js, Node.js, SQL, PostgreSQL, Docker, CI/CD, Testing, etc.</p>
      </div>
    </div>
  )
}
