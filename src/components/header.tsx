import { NotebookPen } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { UserButton } from '@clerk/clerk-react'
import { Authenticated } from 'convex/react'

export function Header() {
  return (
    <div className="z-10 relative border-b">
      <div className="flex h-16 items-center justify-between px-8">
        <NotebookPen />

        <div className="flex items-center gap-4">
          <Authenticated>
            <UserButton />
          </Authenticated>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
