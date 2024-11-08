import { CreateNoteButton } from '@/components/create-note-button'
import { NoteCard } from '@/components/note-card'
import { api } from '../../convex/_generated/api'
import { useQuery } from 'convex/react'

export function Dashboard() {
  const notes = useQuery(api.documents.getDocuments)

  return (
    <main className="space-y-16">
      <CreateNoteButton />

      <div className="grid grid-cols-4 gap-8">
        {notes?.map((note) => <NoteCard key={note._id} document={note} />)}
      </div>
    </main>
  )
}
