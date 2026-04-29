'use client';

import { type ClassValue, clsx } from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Project {
  id: string;
  image: string;
  title: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  totalCount: number;
}

const ProjectCard = ({
  image,
  title,
  delay,
  isVisible,
  index,
  totalCount,
}: ProjectCardProps) => {
  const middleIndex = (totalCount - 1) / 2;
  const factor = totalCount > 1 ? (index - middleIndex) / middleIndex : 0;

  const rotation = factor * 25;
  const translationX = factor * 85;
  const translationY = Math.abs(factor) * 12;

  return (
    <div
      className={cn('group/card absolute h-28 w-20 cursor-pointer')}
      style={{
        transform: isVisible
          ? `translateY(calc(-100px + ${translationY}px)) translateX(${translationX}px) rotate(${rotation}deg) scale(1)`
          : 'translateY(0px) translateX(0px) rotate(0deg) scale(0.4)',
        opacity: isVisible ? 1 : 0,
        transition: `all 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        zIndex: 10 + index,
        left: '-40px',
        top: '-50px',
      }}
    >
      <div
        className={cn(
          'relative h-full w-full overflow-hidden rounded-lg',
          'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'group-hover/card:shadow-accent/40 group-hover/card:-translate-y-6 group-hover/card:scale-125 group-hover/card:shadow-2xl group-hover/card:ring-2 group-hover/card:ring-white',
        )}
      >
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

interface AnimatedFolderProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  className?: string;
  gradient?: string;
  href?: string;
}

function AnimatedFolder({
  title = 'Projects',
  subtitle,
  projects = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      title: 'Project One',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
      title: 'Project Two',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
      title: 'Project Three',
    },
  ],
  className,
  gradient,
  href = '#',
}: AnimatedFolderProps) {
  const [isHovered, setIsHovered] = useState(false);

  const previewProjects = projects.slice(0, 5);

  const backBg =
    gradient ||
    'linear-gradient(135deg, var(--folder-back) 0%, var(--folder-tab) 100%)';
  const tabBg = gradient || 'var(--folder-tab)';
  const frontBg =
    gradient ||
    'linear-gradient(135deg, var(--folder-front) 0%, var(--folder-back) 100%)';

  return (
    <a
      href={href}
      className={cn(
        'relative flex cursor-pointer flex-col items-center justify-start transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        className,
      )}
      style={{
        perspective: '1200px',
        transform: isHovered
          ? 'scale(1.04) rotate(-1.5deg)'
          : 'scale(1) rotate(0deg)',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative mt-4 mb-4 flex items-center justify-center"
        style={{ height: '96px', width: '128px' }}
      >
        <div
          className="border-border absolute h-24 w-32 rounded-lg border shadow-md"
          style={{
            background: backBg,
            filter: gradient ? 'brightness(0.9)' : 'none',
            transformOrigin: 'bottom center',
            transform: isHovered
              ? 'rotateX(-20deg) scaleY(1.05)'
              : 'rotateX(0deg) scaleY(1)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 10,
          }}
        />
        <div
          className="border-border absolute h-4 w-12 rounded-t-md border-x border-t"
          style={{
            background: tabBg,
            filter: gradient ? 'brightness(0.85)' : 'none',
            top: 'calc(50% - 48px - 12px)',
            left: 'calc(50% - 64px + 16px)',
            transformOrigin: 'bottom center',
            transform: isHovered
              ? 'rotateX(-30deg) translateY(-3px)'
              : 'rotateX(0deg) translateY(0)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 10,
          }}
        />
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
          }}
        >
          {previewProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              delay={index * 50}
              isVisible={isHovered}
              index={index}
              totalCount={previewProjects.length}
            />
          ))}
        </div>
        <div
          className="border-border absolute h-24 w-32 rounded-lg border shadow-lg"
          style={{
            background: frontBg,
            top: 'calc(50% - 48px + 4px)',
            transformOrigin: 'bottom center',
            transform: isHovered
              ? 'rotateX(35deg) translateY(12px)'
              : 'rotateX(0deg) translateY(0)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 30,
          }}
        />
        <div
          className="pointer-events-none absolute h-24 w-32 overflow-hidden rounded-lg"
          style={{
            top: 'calc(50% - 48px + 4px)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
            transformOrigin: 'bottom center',
            transform: isHovered
              ? 'rotateX(35deg) translateY(12px)'
              : 'rotateX(0deg) translateY(0)',
            transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 31,
          }}
        />
      </div>
      <div className="w-full text-center">
        <h3
          className="text-foreground mt-0 text-lg font-bold transition-all duration-500"
          style={{
            transform: isHovered ? 'translateY(2px)' : 'translateY(0)',
            letterSpacing: isHovered ? '-0.01em' : '0',
          }}
        >
          {title}
        </h3>
        <p
          className="text-muted-foreground text-sm font-medium transition-all duration-500"
          style={{ opacity: isHovered ? 0.8 : 1 }}
        >
          {subtitle || title}
        </p>
      </div>
    </a>
  );
}

const portfolioData = [
  {
    title: 'Wave',
    subtitle: 'Fitness',
    gradient: 'linear-gradient(135deg, #fde68a, #f59e0b)',
    href: 'https://drive.google.com/file/d/186slfYcOs1PHQIeLx0Sx3UOYy8O68cQf/view?usp=sharing',
    projects: [
      { id: 'b1', image: '/brandtk/1.1.png', title: 'Lumnia Identity' },
      { id: 'b2', image: '/brandtk/1.2.png', title: 'Prism Collective' },
      { id: 'b3', image: '/brandtk/1.3.png', title: 'Vertex Studio' },
    ] as Project[],
  },
  {
    title: 'Laa Boba',
    subtitle: 'Cafe',
    gradient: 'linear-gradient(to right, #F0EAD2, #dfd4a9ff)',
    href: 'https://drive.google.com/file/d/1i1bwsb4hwJHQ4KRlD_t-RqmAG-tn7PUd/view?usp=sharing',
    projects: [
      { id: 'b1', image: '/brandtk/3.1.png', title: 'Lumnia Identity' },
      { id: 'b2', image: '/brandtk/3.3.png', title: 'Prism Collective' },
      { id: 'b3', image: '/brandtk/3.2.png', title: 'Vertex Studio' },
    ] as Project[],
  },
  {
    title: 'Elkem',
    subtitle: 'Corporate',
    gradient: 'linear-gradient(135deg, #ffffffff, #D9D9D9)',
    href: 'https://drive.google.com/file/d/1uS61cf_eJqqNGuIaIejscB3F_Rn0Y9T4/view?usp=sharing',
    projects: [
      { id: 'b1', image: '/brandtk/4.1.png', title: 'Lumnia Identity' },
      { id: 'b2', image: '/brandtk/4.2.png', title: 'Prism Collective' },
      { id: 'b3', image: '/brandtk/4.3.png', title: 'Vertex Studio' },
    ] as Project[],
  },
  {
    title: 'kat Expert',
    subtitle: 'Education',
    gradient: 'linear-gradient(135deg, #00c6ff, #2E89C3)',
    href: 'https://drive.google.com/file/d/1aTaiE4L-VkJcdaoWTIMV4Z8j5imFEv6I/view?usp=sharing',
    projects: [
      { id: 'b1', image: '/brandtk/5.1.png', title: 'Lumnia Identity' },
      { id: 'b2', image: '/brandtk/5.2.png', title: 'Prism Collective' },
      { id: 'b3', image: '/brandtk/5.3.png', title: 'Vertex Studio' },
    ] as Project[],
  },
  {
    title: 'Epicure',
    subtitle: 'Food',
    gradient: 'linear-gradient(135deg, #0c0c0cff, #292929ff)',
    href: 'https://drive.google.com/file/d/1MthmCjVHhTb_p--A60YfVj5GV6aAI0Z9/view?usp=sharing',
    projects: [
      { id: 'b1', image: '/brandtk/2.1.png', title: 'Lumnia Identity' },
      { id: 'b2', image: '/brandtk/2.2.png', title: 'Prism Collective' },
      { id: 'b3', image: '/brandtk/2.3.png', title: 'Vertex Studio' },
    ] as Project[],
  },
];

export default function Brandtoolkits() {
  return (
    <main className="min-h-content text-foreground">
      <section className="mx-auto max-w-7xl px-0 pt-0 pb-0">
        <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-5">
          {portfolioData.map((folder) => (
            <div key={folder.title} className="flex w-full justify-center">
              <AnimatedFolder
                title={folder.title}
                subtitle={folder.subtitle}
                projects={folder.projects}
                gradient={folder.gradient}
                href={folder.href}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
