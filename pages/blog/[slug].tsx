import { pick } from '@contentlayer/client';
import Parallax from 'components/blog/parallax';
import Link from 'components/link';
import MDXComponents from 'components/mdx-components';
import PostList from 'components/postlist';
import Tags from 'components/tags';
import { formatDate } from 'lib/formatdate';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import * as React from 'react';

import { allPosts, Post as PostType } from '../../.contentlayer/generated';

type PostProps = {
  post: PostType;
  related: PostType[];
};

export default function Post({ post, related }: PostProps) {
  const seoTitle = `${post.title} | Jack Willars`;
  const seoDesc = `${post.summary}`;
  const url = `https://jparw.xyz/blog/${post.slug}`;
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url,
          description: seoDesc,
          site_name: 'Jack Willars',
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: ['https://jparw.xyz']
          }
        }}
      />

      <div className="flex flex-col gap-20">
        <article>
          {post.slug === 'spring-parallax-framer-motion-guide' ? (
            <div className="relative h-0 pb-[50%] bg-[#00000c] overflow-hidden rounded-xl">
              <div className="absolute inset-0">
                <Parallax offset={100}>
                  <Image
                    src="/blog/spring-parallax-framer-motion-guide/bg.png"
                    width="2024"
                    height="1272"
                    alt="Starry sky"
                    sizes="(min-width: 480px) 780px, 100vw"
                    className="w-full min-h-screen"
                  />
                </Parallax>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[50px] h-[50px] -translate-x-1/2 -translate-y-1/2 md:w-[120px] md:h-[120px]">
                <Image
                  src="/blog/spring-parallax-framer-motion-guide/logo.png"
                  width="324"
                  height="324"
                  alt="Framer Motion stylized logo"
                  sizes="(min-width: 540px) 120px, 50px"
                />
              </div>
            </div>
          ) : (
            <Image
              src={post.image}
              alt={`${post.title} post image`}
              width={700}
              height={350}
              className="w-[calc(100%+32px)] -ml-4 md:rounded-xl max-w-none border  border-primary"
              priority
            />
          )}
          <div className="h-8" />
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-semibold">{post.title}</h1>
            <p className="text-secondary">
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              {post.updatedAt ? ` (Updated ${formatDate(post.updatedAt)})` : ''}{' '}
            </p>
          </div>
          <div className="h-8" />
          <div className="prose prose-h2:text-lg prose-h2:mb-2 prose-h2:font-semibold">
            <Component components={MDXComponents} />
          </div>
        </article>

        <Tags tags={post.tags} />

        {related.length > 0 ? (
          <div className="flex flex-col items-start gap-10">
            <h3 className="text-xl">Related posts</h3>
            <div className="will-change-transform">
              <PostList posts={related} />
            </div>
            <Link href="/blog" underline>
              ??? See all
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find(p => p.slug === params?.slug);
  const related = allPosts
    /* remove current post */
    .filter(p => p.slug !== params?.slug)
    /* Find other posts where tags are matching */
    .filter(p => p.tags?.some((tag: string) => post?.tags?.includes(tag)))
    /* return the first three */
    .filter((_, i) => i < 3)
    /* only return what's needed to render the list */
    .map(p => pick(p, ['slug', 'title', 'summary', 'publishedAt', 'image']));

  return {
    props: {
      post,
      related
    }
  };
};
