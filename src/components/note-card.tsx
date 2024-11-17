import { Button } from './ui/button'
import { Trash } from 'lucide-react'
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

export function NoteCard({ note }: { note: Doc<'notes'> }) {
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
      <CardFooter>
        <Button onClick={handleDeleteNote} size="sm" variant="destructive">
          <Trash />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
