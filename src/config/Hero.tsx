/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Behance from '@/components/svgs/Behance';
import Dribble from '@/components/svgs/Dribble';
import Github from '@/components/svgs/Github';
import Instagram from '@/components/svgs/Instagram';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Pinterest from '@/components/svgs/Pin';
import Youtube from '@/components/svgs/Youtube';
import CSS from '@/components/technologies/CSS';
import Canva from '@/components/technologies/Canva';
import Figma from '@/components/technologies/Figma';
import Fm from '@/components/technologies/Fm';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';

// Component mapping for skills
export const skillComponents = {
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  TailwindCss: TailwindCss,
  Figma: Figma,
  CSS: CSS,
  FramerMotion: Fm,
  Canva: Canva,
};

export const heroConfig = {
  // Personal Information
  name: 'Bhavesh',
  title: 'A Design Engineer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: 'TailwindCss',
    },
    {
      name: 'Figma',
      href: 'https://www.postgresql.org/',
      component: 'Figma',
    },
    {
      name: 'Framer Motion',
      href: 'https://www.framer.com/motion/',
      component: 'FramerMotion',
    },
    {
      name: 'Canva',
      href: 'https://www.postgresql.org/',
      component: 'Canva',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I Build & Design Modern Web Experiences Using {skills:0}, {skills:1} and {skills:2}. Crafting Clean <b>UI</b>, smooth interactions, and fast, responsive websites with {skills:3}, {skills:4}. While creating brand visuals and social creatives using {skills:5} .',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:bhaveshchawre1@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhavesh-chawre/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://www.instagram.com/bhaavesssh/',
    icon: <Github />,
  },
  {
    name: 'Instagram',
    href: 'https://github.com/bhave5h',
    icon: <Instagram />,
  },
  {
    name: 'Pinterest',
    href: 'https://in.pinterest.com/bha4ve5h/',
    icon: <Pinterest />,
  },
  {
    name: 'Dribble',
    href: 'https://dribbble.com/bh4ve5h-spam',
    icon: <Dribble />,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/@Bhavesh.Archive',
    icon: <Youtube />,
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/bhaveshchawre1',
    icon: <Behance />,
  },
];
