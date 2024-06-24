import { Link } from 'react-router-dom'

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <span className="text-4xl font-bold text-foreground">
        Whooops, algo deu errado...
      </span>
      <p className="text-accent-foreground">
        Retornar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
