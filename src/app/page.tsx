import { QuizGrid } from '@/components/quiz/sections/QuizGrid'

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Quiz App</h1>
      <QuizGrid />
    </main>
  )
}
