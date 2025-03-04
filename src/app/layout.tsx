import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Quando o Criciúma joga?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`lg:h-dvh ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <div className="fixed bottom-2 right-2">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
