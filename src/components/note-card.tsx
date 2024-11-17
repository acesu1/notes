import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function NoteCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Praticar corrida</CardTitle>
        <CardDescription>Ter uma vida saudável</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Create a new note to keep track of your ideas, tasks, or important
          details. Fill out the fields below and save your note for future
          reference.
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
