import type { FC, ReactNode } from 'react';

interface ArticleQuestionProps {
  className?: string;
  children?: ReactNode;
}

const ArticleQuestion: FC<ArticleQuestionProps> = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

export { ArticleQuestion };
