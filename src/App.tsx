import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
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
import { Input } from './components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Textarea } from './components/ui/textarea'

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'title must be at least 2 characters.',
  }),
  description: z
    .string()
    .min(2, {
      message: 'description must be at least 2 characters.',
    })
    .max(500),
})

export function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da anotação</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Enviar</Button>
                </form>
              </Form>
            </SheetContent>
          </Sheet>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Praticar corrida</CardTitle>
                <CardDescription>Ter uma vida saudável</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Create a new note to keep track of your ideas, tasks, or
                  important details. Fill out the fields below and save your
                  note for future reference.
                </p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
