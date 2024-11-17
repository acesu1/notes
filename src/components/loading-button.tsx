import type { ReactNode } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

export function LoadingButton({
  isLoading,
  children,
  loadingText,
}: {
  isLoading: boolean
  children: ReactNode
  loadingText: string
}) {
  return (
    <Button>
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  )
}
