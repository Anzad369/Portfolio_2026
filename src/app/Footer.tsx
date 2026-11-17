'use client';
import Image from 'next/image';
import React from 'react';
import { Linkedin, GitHub, Instagram } from 'react-feather';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <a href="#" aria-label="Homepage">
              <Image
                src="/logo_MA.png"
                alt="Mohammed Anzad Logo"
                width={48}
                height={48}
                className="rounded"
                priority
              />
            </a>
            <p className="text-indigo-400 font-semibold text-lg">
              Frontend Developer & AI Enthusiast
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Resume', href: '#resume' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-indigo-400 transition duration-300"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 text-gray-500 text-sm space-y-4 md:space-y-0">
          <p>© 2025 Mohammed Anzad. All rights reserved.</p>

          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://www.linkedin.com/in/anzad369/"
              aria-label="LinkedIn Profile"
              className="hover:text-indigo-400 transition duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Anzad369"
              aria-label="GitHub Profile"
              className="hover:text-indigo-400 transition duration-300"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.instagram.com/_anzad_/"
              aria-label="Instagram Profile"
              className="hover:text-indigo-400 transition duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
