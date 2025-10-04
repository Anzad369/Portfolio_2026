'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: 'easeOut',
      duration: 0.6,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, backgroundColor: '#3730a3', transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const Resume: React.FC = () => {
  return (
    <motion.section
      id="resume"
      className="py-20 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-700"
          variants={itemVariants}
        >
          My Resume
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Download my complete resume or view it online.
        </motion.p>
        <motion.div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden" variants={itemVariants}>
          <div className="md:flex">
            <motion.div
              className="md:w-1/3 bg-indigo-700 p-8 text-white"
              variants={itemVariants}
            >
              <div className="text-center mb-8">
                <Image
                  src="/images/1.jpeg"
                  alt="Mohammed Anzad P A"
                  width={128}
                  height={128}
                  className="rounded-full mx-auto border-4 border-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Mohammed Anzad P A</h3>
              <p className="mb-6">Frontend Developer & AI Enthusiast</p>
              <div className="mb-8">
                <h4 className="font-bold mb-2">Contact</h4>
                <p className="text-sm mb-1">anzadpa03@gmail.com</p>
                <p className="text-sm mb-1">+91 8078833514</p>
                <p className="text-sm">City, Kerala, India</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Skills</h4>
                <ul className="text-sm space-y-1">
                  <li>React & React Native</li>
                  <li>JavaScript/TypeScript</li>
                  <li>HTML5, CSS3, Tailwind</li>
                  <li>Node.js, Express</li>
                  <li>Firebase, MongoDB</li>
                  <li>Python, TensorFlow</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="md:w-2/3 p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-700">Professional Experience</h3>
              <div className="mb-6">
                <h4 className="font-bold text-gray-900">Flutter Intern</h4>
                <p className="text-gray-600 text-sm mb-2">Verdant IT Solutions — May 2023</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li>Developed cross-platform mobile application features using Flutter and Dart, ensuring responsive UI and smooth user experience.</li>
                </ul>
              </div>
              <h3 className="text-xl font-bold mb-6 text-indigo-700">Projects</h3>
              <div className="mb-6 space-y-4 text-gray-700 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900">Currency Sage - Real-time Currency Converter Web App</h4>
                  <ul className="list-disc pl-5">
                    <li>Real-time currency converter using React and exchange rate APIs.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GRAINS - Blockchain-based Agricultural Supply Chain System</h4>
                  <ul className="list-disc pl-5">
                    <li>Blockchain-based supply chain platform using React and Ethereum smart contracts.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">One-Click Resume Builder – React Web App</h4>
                  <ul className="list-disc pl-5">
                    <li>Resume builder with live preview and PDF export using React and jsPDF.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">PhotoStudio – Next.js Photography Portfolio</h4>
                  <ul className="list-disc pl-5">
                    <li>Responsive photography site in Next.js, Tailwind CSS, Framer Motion.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">AI Travel Planner – Next.js Trip Planner</h4>
                  <ul className="list-disc pl-5">
                    <li>Personalized multi-day trip itineraries with interactive maps using NVIDIA LLMs, Next.js, and Leaflet.</li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-6 text-indigo-700">Education</h3>
              <div>
                <h4 className="font-bold text-gray-900">Bachelor's in Electronics and Computer Engineering</h4>
                <p className="text-gray-600 text-sm mb-2">St. Joseph's College of Engineering and Technology, Palai, Kerala — 2021 – 2025</p>
              </div>
            </motion.div>
          </div>
          <motion.div className="bg-gray-100 p-6 text-center border-t" variants={itemVariants}>
            <motion.a
              href="/resume_Anzad.pdf"
              download="Mohammed_Anzad_Resume.pdf"
              className="inline-block px-6 py-2 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-900 transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Download full resume as PDF"
            >
              Download Full Resume (PDF)
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
