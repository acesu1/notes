import { Skeleton } from '@/components/ui/skeleton'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

export function CardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-3/4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-3 w-1/2 mt-2" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-3 w-full mt-2" />
        <Skeleton className="h-3 w-5/6 mt-2" />
        <Skeleton className="h-3 w-2/3 mt-2" />
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </CardFooter>
    </Card>
  )
}
