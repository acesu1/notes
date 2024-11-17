import { NotebookPen } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-8">
        <NotebookPen />
        <ThemeToggle />
      </div>
    </div>
  )
}
