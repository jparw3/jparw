import '../styles/globals.css';

import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from 'components/header';
import SEO from 'components/seo';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactNode,
  ReactPortal,
  useEffect
} from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function MyApp({
  Component,
  pageProps
}: AppPropsWithLayout): JSX.Element {
  const getLayout =
    Component.getLayout ??
    ((
      page:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined
    ) => (
      <main className="px-4 md:px-6 pt-20 pb-24 md:pb-44 max-w-[700px] mx-auto ring-offset-primary">
        {page}
      </main>
    ));

  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: 'light-theme',
        dark: 'dark-theme',
        arc: 'arc-theme'
      }}
    >
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="antialiased font-medium bg-primary text-primary width-full">
        <Header />
        {getLayout(<Component {...pageProps} />)}
      </div>
      <Analytics />
    </ThemeProvider>
  );
}
