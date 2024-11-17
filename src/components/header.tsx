import { NotebookPen } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Unauthenticated, Authenticated } from 'convex/react'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-8">
        <NotebookPen />

        <div className="flex items-center gap-4">
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
