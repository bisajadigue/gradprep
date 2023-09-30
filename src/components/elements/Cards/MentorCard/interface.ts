export interface IExperience {
  organization: string;
  title: string;
  startPeriod: string;
  endPeriod: string;
}

export interface IMentor {
  userId: string;
  name: string;
  email: string;
  bio: string;
  education: string;
  experiences: IExperience[];
  expertise: string;
  cvUrl: string;
  ppUrl: string;
}

export interface MentorCardProps {
  className?: string;
  data: IMentor;
}
