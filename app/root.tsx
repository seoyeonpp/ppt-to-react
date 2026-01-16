import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { Ssgoi } from '@ssgoi/react'
import { film, hero } from '@ssgoi/react/view-transitions'
import type { Route } from './+types/root'
import './styles/global.css'

const ssgoiConfig = {
  defaultTransition: film(),
  transitions: [
    {
      from: '/slide-2',
      to: '/slide-3',
      transition: hero(),
      symmetric: true,
    },
    {
      from: '/slide-3',
      to: '/slide-2',
      transition: hero(),
      symmetric: true,
    },
    {
      from: '/slide-2',
      to: '/slide-4',
      transition: hero(),
      symmetric: true,
    },
    {
      from: '/slide-4',
      to: '/slide-2',
      transition: hero(),
      symmetric: true,
    },
  ],
}

export const links: Route.LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <Ssgoi config={ssgoiConfig}>
          <div style={{ position: 'relative', minHeight: '100vh' }}>{children}</div>
        </Ssgoi>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{message}</h1>
        <p className="text-gray-400">{details}</p>
        {stack && <pre className="mt-4 p-4 bg-slate-800 rounded text-left text-sm overflow-auto max-w-2xl">{stack}</pre>}
      </div>
    </main>
  )
}
