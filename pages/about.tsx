import Link from 'components/link';
import Section from 'components/section';
import Workplaces from 'components/workplaces';
import siteData from 'data/siteData';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import React from 'react';

const seoTitle = 'About | Jack Willars';
const seoDesc =
  'A fullstack developer that loves to build great products with delightful interfaces.';

export default function About() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://jparw.xyz/about/`,
          site_name: 'Jack Willars'
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="-mb-8 sm:hidden animate-in">
          <Image
            src="/avatar.png"
            width={48}
            height={48}
            alt="avatar of Jack Willars"
          />
        </div>
        <div
          className="flex flex-col gap-16 animate-in sm:animate-none md:gap-24"
          style={{ '--index': 2 } as React.CSSProperties}
        >
          <Section heading="About me" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                <em className="font-semibold">Hi there!</em>&nbsp; I’m Jack, a
                fullstack developer that loves to build great products with
                delightful interfaces.
              </p>
              <p>
                Currently working at{' '}
                <Link href="https://www.bespokesoftware.io/">BSPOKE</Link>,
                Learning as much as I can about the industry and working with
                brilliant people. Before that I worked at the law firm{' '}
                <Link href="https://www.hegarty.co.uk/">
                  Hegarty LLP Solicitors
                </Link>{' '}
                as an IT Apprentice.
              </p>
              <p>
                I was born and raised in Germany and moved to Peterborough, UK
                when I was 7 and have lived here ever since.
              </p>
            </div>
          </Section>
          <Section heading="Connect" headingAlignment="right">
            <ul className="flex gap-6 animated-list">
              {siteData.shortConnectedLinks.map(link => (
                <li className="transition-opacity" key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Work" headingAlignment="right">
            <Workplaces items={siteData.workplaces} />
          </Section>
          <Section heading="Side projects" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>I enjoy hacking on the side.</p>
              <Workplaces items={siteData.sideprojects} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
