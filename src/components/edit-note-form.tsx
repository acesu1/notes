import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../convex/_generated/api'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useMutation, useQuery } from 'convex/react'
import { LoadingButton } from './loading-button'
import type { Doc } from 'convex/_generated/dataModel'
import { useEffect } from 'react'

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

export function EditNoteForm({
  note,
  onEdit,
}: {
  note: Doc<'notes'>
  onEdit: () => void
}) {
  const getNote = useQuery(api.notes.getNote, { nodeId: note._id })
  const editNote = useMutation(api.notes.editNote)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: getNote?.title ?? '',
      description: getNote?.description ?? '',
      text: getNote?.text ?? '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await editNote({
      noteId: note._id,
      title: values.title,
      description: values.description,
      text: values.text,
    })

    onEdit()
  }

  useEffect(() => {
    if (getNote) {
      form.reset({
        title: getNote.title,
        description: getNote.description,
        text: getNote.text,
      })
    }
  }, [getNote, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Novo nome da anotação</FormLabel>
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
              <FormLabel>Nova descrição</FormLabel>
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
              <FormLabel>Novo texto</FormLabel>
              <FormControl>
                <Textarea {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Editando..."
        >
          Editar anotação
        </LoadingButton>
      </form>
    </Form>
  )
}
