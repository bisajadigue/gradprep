// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TestCardProps {
    slug:        string
    title:       string
    description: string
    resources:   string
    tests: Test[]
}

export interface Test {
    id: string
    name: string
    description: string
    instructions: string
    timer: number
    testCategoryId: string
}
