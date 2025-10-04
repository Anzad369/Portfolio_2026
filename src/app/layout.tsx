import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Mohammed Anzad Portfolio',
  description: 'Professional portfolio of Mohammed Anzad showcasing frontend development and AI projects',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
