export type CareerContent = {
  link?: string;
  title: string;
  period: string;
  content: string;
  stack: string[];
};

export type Career = {
  logo: string;
  title: string;
  description: string;
  period: string;
  job: string;
  content: CareerContent[];
};
