import Link from 'components/link';
import MDXComponents from 'components/mdx-components';
import siteData from 'data/siteData';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import { ReactElement } from 'react';

import { allProjects, Project as ProjectType } from '.contentlayer/generated';
interface ProjectProps {
  project: ProjectType;
  rest: ProjectType[];
}

export default function Project({ project }: ProjectProps) {
  const seoTitle = `${project.title} Case Study | Jack Willars`;
  const seoDesc = `${project.description}`;
  const url = `https://jparw.xyz/project/${project.slug}`;
  const Component = useMDXComponent(project.body.code);

  return (
    <>
      <NextSeo title={seoTitle} description={seoDesc} canonical={url} />

      <div className="flex flex-col gap-20">
        <article>
          <div className="h-20" />
          <div className="flex flex-col gap-3 px-4 md:px-6 py-2 max-w-[700px] mx-auto ">
            <h1 className="text-2xl font-semibold">{project.title}</h1>
            <div className="flex gap-3">
              <p className="text-secondary">{project.time}</p>
              {project.url && (
                <>
                  <span>&middot;</span>
                  <Link href={project.url}>Visit Live ↗</Link>
                </>
              )}
            </div>
            {project.description}
          </div>

          <div className="h-12" />
          <div className="prose project prose-h2:text-lg prose-h2:mb-2 prose-h2:font-semibold">
            <Component components={MDXComponents} />
          </div>
        </article>
        <hr className="border-primary px-4 md:px-6 py-2 max-w-[700px] mx-auto w-full" />
        <div className="flex flex-col gap-3.5 px-4 md:px-6 py-2 max-w-[700px] mx-auto w-full">
          <h3 className="text-xl">Want a deeper dive?</h3>
          <ul className="flex gap-5 animated-list">
            {siteData.shortConnectedLinks.map(link => (
              <li className="transition-opacity" key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="h-12" />
          <Link href="/" underline>
            ← Back home
          </Link>
        </div>

        <div />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(p => p.slug === params?.slug);
  const rest = allProjects.filter(p => p.slug !== params?.slug);

  return {
    props: {
      project,
      rest
    }
  };
};

Project.getLayout = function getLayout(page: ReactElement) {
  return page;
};
