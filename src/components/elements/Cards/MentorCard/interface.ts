import { type User } from "@prisma/client";

export interface IExperience {
  id: string;
  mentorId: string;
  organization: string;
  title: string;
  startPeriod: string;
  endPeriod: string;
}

export interface IEducation {
  id: string;
  userId: string;
  school: string;
  degree: string;
  field: string;
}

export interface IMentor {
  id: string;
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


export interface IMentorNew extends User {
  education: IEducation[]
  mentor: {
    experiences: IExperience[]
    expertise: string
  }
}

export interface MentorCardProps {
  className?: string;
  data: IMentorNew;
}
