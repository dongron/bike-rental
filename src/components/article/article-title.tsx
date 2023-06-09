import type { FC, ReactNode } from 'react';

interface ArticleTitleProps {
  className?: string;
  children?: ReactNode;
}

const ArticleTitle: FC<ArticleTitleProps> = ({ className, children }) => {
  return <h1 className={`${className}`}>{children}</h1>;
};

export { ArticleTitle };
