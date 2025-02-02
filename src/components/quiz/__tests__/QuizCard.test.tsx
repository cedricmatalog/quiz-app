import { render, screen } from '@/lib/utils/test-utils'
import { QuizCard } from '../QuizCard'

describe('QuizCard', () => {
  const defaultProps = {
    title: 'Test Quiz',
    description: 'Test Description',
    questionCount: 10,
    onStart: jest.fn(),
  }

  it('renders quiz information correctly', () => {
    render(<QuizCard {...defaultProps} />)

    expect(screen.getByText('Test Quiz')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('10 questions')).toBeInTheDocument()
  })

  it('calls onStart when start button is clicked', async () => {
    const { user } = render(<QuizCard {...defaultProps} />)

    const startButton = screen.getByRole('button', { name: /start quiz/i })
    await user.click(startButton)

    expect(defaultProps.onStart).toHaveBeenCalled()
  })

  it('renders without onStart handler', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onStart, ...propsWithoutOnStart } = defaultProps
    render(<QuizCard {...propsWithoutOnStart} />)

    expect(
      screen.getByRole('button', { name: /start quiz/i })
    ).toBeInTheDocument()
  })
})
