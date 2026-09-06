import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://qian-qin.qianqin11.chatgpt.site'),
  title: 'Qian Qin | 秦芊',
  description:
    'I work on convergence analysis of Markov chains and the theory of Markov chain Monte Carlo (MCMC).',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Qian Qin | 秦芊',
    description:
      'I work on convergence analysis of Markov chains and the theory of Markov chain Monte Carlo (MCMC).',
    url: 'https://qian-qin.qianqin11.chatgpt.site',
    siteName: 'Qian Qin | 秦芊',
    type: 'website',
    images: [
      {
        url: 'https://qian-qin.qianqin11.chatgpt.site/og.png',
        width: 1734,
        height: 907,
        alt: 'Qian Qin | 秦芊',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qian Qin | 秦芊',
    description:
      'I work on convergence analysis of Markov chains and the theory of Markov chain Monte Carlo (MCMC).',
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
