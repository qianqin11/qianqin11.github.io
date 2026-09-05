import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://qian-qin.qianqin11.chatgpt.site'),
  title: 'Qian Qin | Statistics & Markov Chain Monte Carlo',
  description:
    'Qian Qin is an Associate Professor in the School of Statistics at the University of Minnesota, researching Markov chains and MCMC.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Qian Qin | Statistics & Markov Chain Monte Carlo',
    description:
      'Associate Professor of Statistics at the University of Minnesota. Research in Markov chains and MCMC.',
    url: 'https://qian-qin.qianqin11.chatgpt.site',
    siteName: 'Qian Qin',
    type: 'website',
    images: [
      {
        url: 'https://qian-qin.qianqin11.chatgpt.site/og.png',
        width: 1680,
        height: 945,
        alt: 'Qian Qin — Statistics, Markov Chains, and MCMC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qian Qin | Statistics & Markov Chain Monte Carlo',
    description:
      'Associate Professor of Statistics at the University of Minnesota. Research in Markov chains and MCMC.',
    images: ['https://qian-qin.qianqin11.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
