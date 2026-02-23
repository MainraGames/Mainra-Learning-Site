export enum TargetAudience {
  KIDS = 'KIDS',
  STUDENTS = 'STUDENTS',
  CAREER = 'CAREER'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  audience: TargetAudience;
  level: string;
  duration: string;
  price: string;
  originalPrice?: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface SiteSettings {
  title: string;
  email: string;
  phone: string;
  address: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor' | 'admin';
  joinedDate?: string;
}