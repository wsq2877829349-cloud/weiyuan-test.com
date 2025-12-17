import { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  model: string;
  name: string;
  description: string;
  image: string;
  images?: string[]; // Optional array for multiple gallery images
  specs?: Specification[];
  standards: string[];
  features?: string[];
  faqs?: FAQ[];
  video?: string; // Optional video URL/ID
  pdfUrl?: string; // Optional link to PDF file
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialProof {
  name: string;
  role: string;
  company: string;
  quote: string;
}