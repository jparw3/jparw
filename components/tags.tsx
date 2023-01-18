import slugify from 'slugify';

import Link from 'components/link';

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps): JSX.Element | null => {
  if (!tags?.length) {
    return null;
  }
  return (
    <div className="flex flex-col justify-start md:justify-center">
      <ul className="flex flex-col gap-6 md:flex-row animated-list">
        {tags.map(tag => {
          return (
            <li key={tag} className="transition-opacity">
              <Link
                href={`/blog/tag/${slugify(tag, { lower: true })}`}
                underline
              >{`#${tag}`}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
