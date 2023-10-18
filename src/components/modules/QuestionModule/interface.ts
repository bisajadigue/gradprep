
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface QuestionProps {
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

export interface QuestionDetailProps {
    question: QuestionProps
    questionAttempt: QuestionAttemptProps
}

export interface QuestionAttemptProps {
    id: string
    choiced: string
    questionId: string
    testAttemptId: string
    studentId: string
}