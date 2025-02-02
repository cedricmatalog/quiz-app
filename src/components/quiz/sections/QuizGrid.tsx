'use client'

import { QuizCard } from '@/components/quiz/QuizCard'
import { useRouter } from 'next/navigation'

export function QuizGrid() {
  const router = useRouter()

  const handleStartQuiz = (quizId: string) => {
    router.push(`/quiz/${quizId}`)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <QuizCard
        title="Math Basics"
        description="Test your basic math skills"
        questionCount={10}
        onStart={() => handleStartQuiz('math-101')}
      />
      <QuizCard
        title="Science Quiz"
        description="Explore fundamental science concepts"
        questionCount={15}
        onStart={() => handleStartQuiz('science-101')}
      />
      <QuizCard
        title="History Test"
        description="Journey through historical events"
        questionCount={12}
        onStart={() => handleStartQuiz('history-101')}
      />
    </div>
  )
}
