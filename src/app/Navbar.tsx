'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'react-feather';
import { motion, AnimatePresence, Variants  } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

const overlayVariants :Variants= {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-md z-50 backdrop-blur bg-opacity-90">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Only */}
          <a href="#" aria-label="Homepage" className="flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded">
            <Image
              src="/logo_MA.png"
              alt="Logo"
              width={48}
              height={48}
              className="transition-transform duration-300 hover:scale-110"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 uppercase tracking-wide font-semibold text-gray-700">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative group hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded px-1"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-10 text-3xl font-semibold uppercase text-white select-none"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-400 focus:text-indigo-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
