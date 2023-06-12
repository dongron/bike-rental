import type { FC } from 'react';

interface ArticleBodyProps {
  children: TrustedHTML | string;
  className?: string;
}

const ArticleBody: FC<ArticleBodyProps> = ({ children, className }) => {
  return (
    <div
      className={`py-4 ${className}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export { ArticleBody };
