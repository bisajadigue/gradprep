export interface AddEducation {
  school: string
  degree: string
  field: string
}

export interface AddProfile {
  bio: string
  education: AddEducation[]
  role: 'MENTOR' | 'STUDENT'
  experiences: {
    organization: string
    title: string
    startPeriod: string
    endPeriod: string
  }[]
  expertise: string
  calendlyUrl: string
}