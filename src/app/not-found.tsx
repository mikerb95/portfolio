export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Página no encontrada</h1>
      <p className="mt-2 text-gray-600">La ruta que buscas no existe.</p>
      <a href="/" className="mt-4 inline-block text-accent hover:underline">
        Volver al inicio
      </a>
    </div>
  )
}
