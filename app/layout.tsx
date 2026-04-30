import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EstateLux | Premium Real Estate Marketplace',
  description: 'A premium, modular real estate marketplace with modern animations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-[#0a0f0d] text-zinc-200 selection:bg-amber-500 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
