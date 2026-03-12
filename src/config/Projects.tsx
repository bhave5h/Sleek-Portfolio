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
    title: 'Trading Institute Website',
    description:
      'Premium stock market institute website showcasing courses, mentorship, resources, and enrollment.',
    image: '/project/nm.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/nm.mp4?updatedAt=1772974351594',
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
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: false,
  },
  {
    title: 'BigTopSocial',
    description:
      'A modern agency website built for BigTopSocial, showcasing services and other details.',
    image: '/project/bts.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/BTS.mp4?updatedAt=1772974450891',
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
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'IMDBully – Movie Taste Roaster',
    description:
      'A Fun AI-powered app that roasts your movie taste with sarcastic commentary.',
    image: '/project/imdb.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/IMdb.mp4?updatedAt=1772974474977',
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
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: false,
  },
  {
    title: 'Developer Portfolio – Jackie Zhang Inspired UI',
    description:
      'Interactive developer portfolio inspired by Jackie Zhang’s Portfolio.',
    image: '/project/p.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/P.mp4?updatedAt=1772974430470',
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
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: false,
  },
  {
    title: 'Rich Drive Luxury – Premium Car Dealership Website',
    description:
      'Luxury car dealership website showcasing premium pre-owned vehicles.',
    image: '/project/rdl.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/RDL.mp4?updatedAt=1772974434923',
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
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'KhetAI – Smart Farming Assistant',
    description:
      'AI-powered farming assistant for crop guidance and disease detection.',
    image: '/project/khetai.png',
    video: '',
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
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'ROBO – Interactive 3D Robot Hero Section',
    description: 'Interactive hero section featuring a 3D robot using Spline.',
    image: '/project/robo.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/robo.mp4?updatedAt=1772974378474',
    link: '',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Spline', icon: <Spline key="spline" /> },
    ],
    github: 'https://github.com/bhave5h/ROBO',
    live: '',
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
  {
    title: 'TeamTrack – Team Collaboration Dashboard',
    description:
      'Minimal dashboard for managing teams, tasks, and collaboration.',
    image: '/project/tt.png',
    video:
      'https://ik.imagekit.io/bhavesssh/Project_vid/TT.mp4?updatedAt=1772974436123',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/bhave5h/Team-Track',
    live: '',
    details: false,
    projectDetailsPageSlug: '/projects/a',
    isWorking: true,
  },
];
