import { DefaultSeo } from 'next-seo';

const config = {
  title: 'Jack Willars - Fullstack Developer',
  description: 'I design & build solutions',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://jparw.xyz',
    site_name: 'Jack Willars',
    images: [
      {
        url: 'https://jparw.xyz/og.jpg',
        alt: 'Jack Willars'
      }
    ]
  },
  twitter: {
    handle: '@jparw3',
    site: '@jparw3',
    cardType: 'summary_large_image'
  }
};

export default function SEO() {
  return <DefaultSeo {...config} />;
}
