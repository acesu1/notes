import type { Id } from 'convex/_generated/dataModel'
import { Button } from './ui/button'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Trash2 } from 'lucide-react'

export function DeleteNoteButton({ noteId }: { noteId: Id<'documents'> }) {
  const deleteNote = useMutation(api.documents.deleteDocuments)

  return (
    <Button
      variant="destructive"
      size="icon"
      className="absolute right-2 top-0"
      onClick={() => {
        deleteNote({ noteId })
      }}
    >
      <Trash2 className="size-4" />
    </Button>
  )
}
