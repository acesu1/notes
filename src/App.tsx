import { Header } from './components/header'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { NoteCard } from './components/note-card'
import { CreateNoteForm } from './components/create-note-form'

export function App() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-8 p-8 pt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Anotações</h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Criar anotação</Button>
            </SheetTrigger>
            <SheetContent className="space-y-8">
              <SheetHeader>
                <SheetTitle>Nova Anotação</SheetTitle>
                <SheetDescription>
                  Crie uma nova nota para manter o controle de suas ideias,
                  tarefas ou detalhes importantes. Preencha os campos abaixo e
                  salve sua nota para referência futura.
                </SheetDescription>
              </SheetHeader>
              <CreateNoteForm />
            </SheetContent>
          </Sheet>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <NoteCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
