import { pick } from '@contentlayer/client';
import { IconSearch } from 'components/icons';
import Input from 'components/input';
import PostList from 'components/postlist';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';

import { allPosts, Post } from '.contentlayer/generated';

const seoTitle = 'Blog | Jack Willars';
const seoDesc = 'I write about development, design, learning and more!';

type BlogProps = {
  posts: Post[];
};

export default function Blog({ posts }: BlogProps) {
  const [search, setSearch] = useState('');
  const filteredPosts = posts.filter(({ title, summary, tags }) => {
    const searchString = `${title.toLowerCase()} ${summary.toLowerCase()} ${tags?.join(
      ' '
    )}`;
    return searchString.includes(search.toLowerCase());
  });

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://jparw.xyz/blog/`,
          description: seoDesc,
          site_name: 'Jack Willars'
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <h1 className="animate-in">Blog</h1>
            <p
              className="text-secondary animate-in"
              style={{ '--index': 1 } as React.CSSProperties}
            >
              {seoDesc}
            </p>
          </div>
          <div
            className="animate-in"
            style={{ '--index': 2 } as React.CSSProperties}
          >
            <Input
              id="search"
              type="search"
              placeholder="Search…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              pfix={<IconSearch className="w-5 h-5 text-secondary" />}
            />
          </div>
        </div>
        <div
          className="animate-in"
          style={{ '--index': 3 } as React.CSSProperties}
        >
          <PostList posts={filteredPosts} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map(post =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'image'])
    );

  return {
    props: { posts }
  };
};
