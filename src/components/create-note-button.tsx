import { Button } from './ui/button'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { PenLine } from 'lucide-react'
import { useState } from 'react'
import { CreateNoteForm } from './create-note-form'

export function CreateNoteButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        <Button>
          <PenLine className="size-4" />
          Nova Anotação
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Nova Anotação</SheetTitle>
          <SheetDescription>
            Crie um documento para armazenar suas informações e volte a ver
            quando quiser.
          </SheetDescription>

          <CreateNoteForm onCreate={() => setIsOpen(false)} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
