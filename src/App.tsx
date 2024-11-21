import { Header } from './components/header'
import { Authenticated, Unauthenticated } from 'convex/react'
import { NoAuthenticatedUser } from './components/no-authenticated-user'
import { AuthenticatedUser } from './components/authenticated-user'

export function App() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <Authenticated>
        <AuthenticatedUser />
      </Authenticated>
      <Unauthenticated>
        <NoAuthenticatedUser />
      </Unauthenticated>
    </div>
  )
}
