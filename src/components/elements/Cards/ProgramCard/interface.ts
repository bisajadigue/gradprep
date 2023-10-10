export interface IProgram {
  id: string;
  title: string;
  type: string;
  funding: string;
  providerName: string;
  description: string;
  startTime: Date
  endTime: Date
  className?: string;
}
