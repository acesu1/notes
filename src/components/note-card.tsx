import { DeleteNoteButton } from './delete-note-button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { Doc } from 'convex/_generated/dataModel'

export function NoteCard({ document }: { document: Doc<'documents'> }) {
  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>{document.title}</CardTitle>
        <DeleteNoteButton noteId={document._id} />
        <CardDescription>{document.text}</CardDescription>
      </CardHeader>
      <CardContent>
        <p></p>
      </CardContent>
      <CardFooter>
        {/* <Button variant="secondary">Visualizar</Button> */}
      </CardFooter>
    </Card>
  )
}
