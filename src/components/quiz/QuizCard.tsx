// src/components/quiz/QuizCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface QuizCardProps {
  title: string
  description: string
  questionCount: number
  onStart?: () => void
}

export function QuizCard({
  title,
  description,
  questionCount,
  onStart,
}: QuizCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {questionCount} questions
          </p>
          <Button onClick={onStart}>Start Quiz</Button>
        </div>
      </CardContent>
    </Card>
  )
}
