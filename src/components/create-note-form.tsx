import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../convex/_generated/api'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useMutation } from 'convex/react'
import { LoadingButton } from './loading-button'

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
  text: z
    .string()
    .min(2, { message: 'text must be at least 2 characters.' })
    .max(1000),
})

export function CreateNoteForm({ onCreate }: { onCreate: () => void }) {
  const createNote = useMutation(api.notes.createNote)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      text: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createNote({
      title: values.title,
      description: values.description,
      text: values.text,
    })

    onCreate()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da anotação</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
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
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Texto</FormLabel>
              <FormControl>
                <Textarea {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Criando..."
        >
          Criar anotação
        </LoadingButton>
      </form>
    </Form>
  )
}
