
  export interface TestDetailCardProps {
    className?: string;
    id?: string
  }

  export interface QuestionsProps {
    id: string
    title:    string
    embed:    string
    optionA:  string
    optionB:  string
    optionC:  string
    optionD:  string
    answer:   string
    testId:   string
  }


// eslint-disable-next-line @typescript-eslint/no-empty-interface


export interface QuestionDetailProps {
  question: QuestionsProps
  questionAttempt: QuestionAttemptProps
}

export interface QuestionAttemptProps {
  id: string
  choiced: string
  questionId: string
  testAttemptId: string
  studentId: string
}