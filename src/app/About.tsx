'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: 'easeOut', duration: 0.6 },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
          variants={fadeSlideUp}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2" variants={fadeSlideUp}>
            <Image
              src="/images/3.jpg"
              alt="Mohammed Anzad"
              width={360}
              height={360}
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div className="md:w-1/2 space-y-8" variants={fadeSlideUp}>
            <motion.div variants={fadeSlideUp}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Professional Bio
              </h3>
              <p className="text-gray-700 font-medium">
                Hi! I’m Mohammed Anzad, a recent B.Tech graduate who loves turning ideas
                into user-friendly digital experiences. I’m really into building
                web apps that feel intuitive and solve real problems, especially by
                blending smart tech like AI and cloud computing with solid design.
                I enjoy learning every day, tackling challenges, and creating
                things that truly make life easier and more enjoyable for people.
              </p>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <h4 className="text-xl font-semibold mb-4 text-indigo-700">
                Education
              </h4>
              <div className="pl-4 border-l-4 border-blue-500 space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900">
                    Bachelor's in Electronics and Computer Engineering
                  </h5>
                  <p className="text-gray-600">
                    <a
                      href="https://sjcetpalai.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 no-underline"
                    >
                      St. Joseph's College of Engineering and Technology, Palai
                    </a>
                    , 2021-2025
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Higher Secondary</h5>
                  <p className="text-gray-600">
                    <a
                      href="https://saps.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 no-underline"
                    >
                      St Antony's Public School, Anakkal
                    </a>
                    , 2019-2021
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <h4 className="text-xl font-semibold mb-4 text-indigo-700">
                Experience
              </h4>
              <div className="pl-4 border-l-4 border-blue-500">
                <div>
                  <h5 className="font-medium text-gray-900">Flutter Intern</h5>
                  <p className="text-gray-600 mb-2">Verdant IT Solutions — May 2023</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <h4 className="text-xl font-semibold mb-4 text-indigo-700">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Problem Solving',
                  'Communication',
                  'Teamwork',
                  'Adaptability',
                  'Time Management',
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    whileHover={{ scale: 1.1, backgroundColor: '#bfdbfe' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    title={skill}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
