import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hello Next.js',
  description: 'Starter Next.js app scaffolded in this repo.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="header">
            <span className="badge">Next.js</span>
            <h1>Hello from /workspace/hello</h1>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
