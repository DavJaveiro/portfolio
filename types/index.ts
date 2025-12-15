export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: string;
  logo?: string;
  shortDescription: string;
  fullDescription: string[];
  techs: string[];
}

export interface Education {
  school: string;
  course: string;
  period: string;
  logo?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface ResumeData {
  name: string;
  role: string;
  contact: ContactInfo;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}