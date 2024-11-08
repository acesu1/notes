import { ModeToggle } from './mode-toggle'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'
import { NotepadText, UserRoundPen } from 'lucide-react'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <NotepadText className="size-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <UserRoundPen className="size-4" />
            Anotações
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
