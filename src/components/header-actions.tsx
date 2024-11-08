import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Unauthenticated, Authenticated, AuthLoading } from 'convex/react'
import { Loader2 } from 'lucide-react'

export function HeaderActions() {
  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>

      <AuthLoading>
        <button>
          <Loader2 className="animate-spin" />
        </button>
      </AuthLoading>
    </>
  )
}
