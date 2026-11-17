'use client';

import { useState, useEffect, useRef } from 'react';

const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-indigo-700">{skill}</span>
        <span className="text-gray-700">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-indigo-600 h-3 rounded-full transition-[width] duration-1000 ease-in-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const tools = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub', label: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', alt: 'Postman', label: 'Postman' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase', label: 'Firebase' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma', label: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', alt: 'VS Code', label: 'VS Code' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', alt: 'Flutter', label: 'Flutter' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker', label: 'Docker' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', alt: 'ChatGPT', label: 'ChatGPT' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt: 'Next.js', label: 'Next.js' },
];

const Skills: React.FC = () => {
  const frontendSkills = [
    { skill: 'React', level: 90 },
    { skill: 'JavaScript', level: 85 },
    { skill: 'HTML/CSS', level: 95 },
    { skill: 'TypeScript', level: 80 },
  ];

  const backendSkills = [
    { skill: 'Node.js', level: 75 },
    { skill: 'Firebase', level: 85 },
    { skill: 'Python', level: 70 },
    { skill: 'TensorFlow', level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">My Skills</h2>
        <p className="text-lg text-gray-700 text-center mb-14 max-w-2xl mx-auto">
          Here's a breakdown of my technical skills and proficiency levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-indigo-600">Frontend Development</h3>
            {frontendSkills.map(({ skill, level }) => (
              <SkillBar key={skill} skill={skill} level={level} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8 text-indigo-600">Backend & AI</h3>
            {backendSkills.map(({ skill, level }) => (
              <SkillBar key={skill} skill={skill} level={level} />
            ))}
          </div>
        </div>

        {/* Seamless endless scrolling tools section */}
        <div className="mt-20 relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-8 text-center text-indigo-600">Tools & Technologies</h3>
          <div className="w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-tool-marquee" style={{ width: '200%' }}>
              {[...tools, ...tools].map(({ src, alt, label }, idx) => (
                <div
                  key={`${label}-${idx}`}
                  className="flex flex-col items-center p-4 bg-indigo-50 rounded-lg w-24 shadow-sm hover:shadow-md transition-shadow duration-300 inline-block mr-6"
                >
                  <img src={src} alt={alt} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-semibold text-indigo-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes tool-marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-tool-marquee {
              animation: tool-marquee 30s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Skills;
