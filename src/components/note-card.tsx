import { Button } from './ui/button'
import { Pencil, Trash } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Doc } from 'convex/_generated/dataModel'
import { api } from '../../convex/_generated/api'
import { useMutation } from 'convex/react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { EditNoteForm } from './edit-note-form'
import { useState } from 'react'

export function NoteCard({ note }: { note: Doc<'notes'> }) {
  const [isOpen, setIsOpen] = useState(false)
  const deleteNote = useMutation(api.notes.deleteNote)

  function handleDeleteNote() {
    deleteNote({ noteId: note._id })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{note.description}</CardDescription>
      </CardHeader>
      <CardContent className="break-words">
        <p>{note.text}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Sheet onOpenChange={setIsOpen} open={isOpen}>
          <SheetTrigger asChild>
            <Button size="sm" variant="secondary">
              <Pencil />
              Editar
            </Button>
          </SheetTrigger>
          <SheetContent className="space-y-4">
            <SheetHeader>
              <SheetTitle>Edit</SheetTitle>
              <SheetDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                a distinctio ullam.
              </SheetDescription>
            </SheetHeader>
            <EditNoteForm onEdit={() => setIsOpen(false)} note={note} />
          </SheetContent>
        </Sheet>

        <Button onClick={handleDeleteNote} size="sm" variant="destructive">
          <Trash />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
