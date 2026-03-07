import FramerMotion from '@/components/technologies/FramerMotion';
import Github from '@/components/technologies/Github';
import NextJs from '@/components/technologies/NextJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';
import { Spline } from 'lucide-react';

export const projects: Project[] = [
  {
    title: 'Stock Market Training Institute Website',
    description:
      'A premium educational website for a stock market training institute showcasing courses, mentorship programs, learning resources, and enrollment workflows with a modern responsive UI.',
    image: '/project/nm.png',
    video: '',
    link: 'https://nishantmendhe-stockclasses.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhave5h/nishantmendhe-stockclasses',
    live: 'https://nishantmendhe-stockclasses.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: false,
  },
  {
    title: 'BigTopSocial – Digital Marketing Agency Website',
    description:
      'A modern agency website built for BigTopSocial, showcasing services and other details.',
    image: '/project/bts.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/bhave5h/BTS',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'IMDBully – Movie Taste Roaster',
    description:
      'A fun AI-powered web app that analyzes your favorite movies and brutally roasts your taste with sarcastic commentary, turning IMDb preferences into chaotic entertainment.',
    image: '/project/imdb.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhave5h/IMDBully',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: false,
  },
  {
    title: 'Developer Portfolio – Jackie Zhang Inspired UI',
    description:
      'Interactive developer portfolio inspired by Jackie Zhang’s award-winning design.',
    image: '/project/p.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhave5h/Portfolio',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: false,
  },
  {
    title: 'Rich Drive Luxury – Premium Car Dealership Website',
    description:
      'Luxury car dealership website showcasing premium pre-owned vehicles.',
    image: '/project/rdl.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://rdl-six.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhave5h/RDL',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'KhetAI – Smart Farming Assistant',
    description:
      'AI-powered farming assistant for crop guidance and disease detection.',
    image: '/project/khetai.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhave5h/khet-ai',
    live: 'https://khet-ai-alpha.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'ROBO – Interactive 3D Robot Hero Section',
    description: 'Interactive hero section featuring a 3D robot using Spline.',
    image: '/project/robo.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: '',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Spline', icon: <Spline key="spline" /> },
    ],
    github: 'https://github.com/bhave5h/ROBO',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
];
