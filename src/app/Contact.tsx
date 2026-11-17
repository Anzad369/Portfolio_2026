'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg('');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        setLoading(false);
        setStatusMsg('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setLoading(false);
        setStatusMsg('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-indigo-700">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel
          free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
          {/* Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'name@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject of your message' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={(formData as any)[id]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 transition"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {statusMsg && (
                <p
                  className={`mt-4 text-center font-medium ${
                    statusMsg.includes('successfully')
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {statusMsg}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/2 bg-indigo-50 rounded-xl p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-indigo-700">
                Contact Information
              </h3>
              <div className="space-y-6 text-indigo-800">
                {[
                  { icon: FaEnvelope, label: 'Email', value: 'anzadpa03@gmail.com' },
                  { icon: FaPhone, label: 'Phone', value: '+91 8078833514' },
                  { icon: FaMapMarkerAlt, label: 'Location', value: 'Kottayam, Kerala' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center space-x-4">
                    <Icon className="w-6 h-6 text-indigo-600" />
                    <div>
                      <p className="text-sm font-semibold">{label}</p>
                      <p>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-5 text-indigo-700">
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/anzad369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 hover:bg-indigo-200 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/Anzad369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 hover:bg-indigo-200 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.instagram.com/_anzad_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 hover:bg-indigo-200 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
