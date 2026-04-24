export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  medium: string;
  tools: string[];
  role: string[];
  overview: string;
  challenge?: string;
  reflection?: string;
  images: string[];
  processImages?: string[];
  color?: string;
}
