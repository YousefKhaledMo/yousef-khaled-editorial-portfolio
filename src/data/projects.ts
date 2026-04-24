import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'tutorconnect',
    title: 'TutorConnect',
    category: 'UI/UX Design',
    year: '2024',
    medium: 'Digital Product',
    tools: ['Figma', 'Adobe Illustrator', 'Miro'],
    role: ['Lead Designer', 'UX Researcher'],
    overview:
      'TutorConnect is a mobile-first platform designed to bridge the gap between students and private tutors. The project involved end-to-end product design — from user research and wireframing to high-fidelity prototypes and developer handoff.',
    challenge:
      'The primary challenge was creating a trust-based marketplace where students could confidently find and book tutors. We addressed this through a robust review system, verified badges, and a streamlined booking flow that reduced friction by 40%.',
    reflection:
      'This project reinforced the importance of designing for trust in peer-to-peer platforms. Every micro-interaction — from tutor card hover states to the booking confirmation animation — was crafted to build confidence.',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&q=80',
    ],
    processImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?w=800&q=80',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    ],
    color: '#E07A5F',
  },
  {
    id: 'the-math-mentor',
    title: 'The Math Mentor',
    category: 'Brand Identity',
    year: '2023',
    medium: 'Brand & Web',
    tools: ['Adobe Illustrator', 'Figma', 'After Effects'],
    role: ['Brand Designer', 'Web Designer'],
    overview:
      'A complete brand identity for an online mathematics tutoring service. The visual language draws from geometric patterns and mathematical precision, creating a system that feels both academic and approachable.',
    challenge:
      'Balancing academic credibility with accessibility was key. We developed a modular grid system inspired by graph paper and coordinate planes that scales beautifully across all touchpoints.',
    reflection:
      'Designing for education requires empathy. Every visual choice had to support learning, not distract from it. The result is a brand that students actually enjoy engaging with.',
    images: [
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1200&q=80',
    ],
    processImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    ],
    color: '#3D5A80',
  },
  {
    id: 'outline',
    title: 'Outline',
    category: 'Editorial Design',
    year: '2024',
    medium: 'Print & Digital',
    tools: ['InDesign', 'Photoshop', 'Figma'],
    role: ['Art Director', 'Editorial Designer'],
    overview:
      'Outline is an independent architecture and design magazine. This issue explores the intersection of brutalism and biophilic design — featuring interviews with leading architects and photo essays from around the world.',
    challenge:
      'Creating a layout system that could handle wildly different content types — from dense technical writing to full-bleed photography — while maintaining visual coherence throughout the 120-page issue.',
    reflection:
      'Editorial design is storytelling through space. The grid is your narrator, and whitespace is your pacing. This project was a masterclass in typographic hierarchy.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80',
    ],
    processImages: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80',
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80',
    ],
    color: '#81B29A',
  },
  {
    id: 'designitorganized',
    title: 'DesignItOrganized',
    category: 'Web Design',
    year: '2023',
    medium: 'Website',
    tools: ['Figma', 'Webflow', 'Lottie'],
    role: ['UI Designer', 'Motion Designer'],
    overview:
      'A portfolio website for a design systems consultancy. The site needed to communicate complex services through clear, confident visuals while showcasing the agency\'s own systematic approach to design.',
    challenge:
      'Making design systems — an inherently abstract topic — feel tangible and valuable to potential clients. We created interactive component showcases that let visitors play with live design tokens.',
    reflection:
      'The best portfolio sites don\'t just show work; they demonstrate process. By embedding our design system directly into the site\'s codebase, we proved our methodology in real-time.',
    images: [
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    ],
    processImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
      'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&q=80',
    ],
    color: '#F2CC8F',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
