import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { LoadingButton } from './loading-button'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  title: z.string().min(1).max(200),
  text: z.string().max(2000),
})

export function CreateNoteForm({ onCreate }: { onCreate: () => void }) {
  const createDocument = useMutation(api.documents.createDocuments)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      text: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createDocument({ title: values.title, text: values.text })
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
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Carregando..."
        >
          Criar
        </LoadingButton>
      </form>
    </Form>
  )
}
