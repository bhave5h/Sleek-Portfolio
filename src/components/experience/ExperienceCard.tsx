'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { ChevronDown, Github, Globe, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Skill from '../common/Skill';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

interface ExperienceCardProps {
  experience: Experience;
  alwaysOpen?: boolean;
  transparentOnOpen?: boolean;
}

export function ExperienceCard({
  experience,
  alwaysOpen = false,
  transparentOnOpen = false,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isExpanded = alwaysOpen || isOpen;

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        'group flex cursor-pointer flex-col gap-0 transition-all duration-300',
        isExpanded && !transparentOnOpen,
      )}
      onClick={() => !isExpanded && setIsOpen(true)}
    >
      {/* Company Header - Always Visible */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:gap-4">
          {/* Left Side: Logo & Info */}
          <div className="flex w-full items-start gap-3 sm:w-auto sm:gap-4">
            <Image
              src={experience.image}
              alt={experience.company}
              width={100}
              height={100}
              className="h-10 w-10 shrink-0 rounded-md border border-2 border-black/20 object-cover sm:h-12 sm:w-12"
            />
            <div className="flex w-full flex-col gap-1 sm:gap-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className={cn(
                    'font-outfit text-base leading-tight font-bold text-black/80 sm:text-lg dark:text-white',
                    experience.isBlur && 'opacity-80 blur-[6px] select-none',
                  )}
                >
                  {experience.company}
                </h3>

                {/* Social Links */}
                <div
                  className="flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {experience.website && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.website}
                          target="_blank"
                          className="block p-1 text-neutral-500 transition-colors hover:text-white"
                        >
                          <Globe className="size-4 text-neutral-400" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Visit Website</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.x && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.x}
                          target="_blank"
                          className="block p-1 text-neutral-500 transition-colors hover:text-white"
                        >
                          <Twitter className="size-4 text-neutral-400" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Follow on X</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.linkedin && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.linkedin}
                          target="_blank"
                          className="block p-1 text-neutral-500 transition-colors hover:text-white"
                        >
                          <Linkedin className="size-4 text-neutral-400" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Connect on LinkedIn</TooltipContent>
                    </Tooltip>
                  )}
                  {experience.github && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.github}
                          target="_blank"
                          className="block p-1 text-neutral-500 transition-colors hover:text-white"
                        >
                          <Github className="size-4 text-neutral-400" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>View GitHub</TooltipContent>
                    </Tooltip>
                  )}
                </div>

                {experience.isCurrent && (
                  <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                    <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                    Working
                  </div>
                )}

                {!alwaysOpen && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={toggleOpen}
                        className="ml-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-transparent transition-all duration-300 hover:border-[#222] hover:bg-[#161616]"
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      >
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 text-neutral-500 transition-transform duration-300',
                            isExpanded ? 'rotate-180' : '',
                          )}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              <p className="">{experience.position}</p>
            </div>
          </div>

          {/* Right Side: Date & Location */}
          <div className="text-secondary flex flex-col md:text-right">
            <p>
              {experience.startDate} -{' '}
              {experience.isCurrent ? 'Present' : experience.endDate}
            </p>
            <p className="text-neutral-600">{experience.location}</p>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isExpanded
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Technologies */}
            <div>
              <h4 className="text-md mt-4 mb-2 font-semibold text-neutral-200 sm:mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5 text-white sm:gap-2">
                {experience.technologies.map(
                  (technology, techIndex: number) => (
                    <Skill
                      key={techIndex}
                      name={technology.name}
                      href={technology.href}
                    >
                      {technology.icon}
                    </Skill>
                  ),
                )}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 text-sm leading-relaxed text-neutral-400 sm:text-base">
              {experience.description.map(
                (description: string, descIndex: number) => (
                  <p
                    key={descIndex}
                    dangerouslySetInnerHTML={{
                      __html: `• ${parseDescription(description)}`,
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
