import type { FC } from 'react';
import React from 'react';

import { ArticleQuestion } from '@/components/article/article-question';
import { ArticleTitle } from '@/components/article/article-title';
import ArticleSlider from '@/components/sliders/article-slider';
import styles from '@/components/sliders/slider.module.css';

interface ArticleHeroProps {
  title: string;
  questions?: string[];
  imageUrl?: string;
}

const ArticleHero: FC<ArticleHeroProps> = ({ title, questions, imageUrl }) => {
  return (
    <ArticleSlider>
      {imageUrl && (
        <img src={imageUrl} className={`${styles.landingPageImage} pb-3`} />
      )}
      <ArticleTitle className={styles.companyName}>{title}</ArticleTitle>
      {questions?.map((question: string) => (
        <ArticleQuestion key={question} className={styles.companyMotto}>
          question
        </ArticleQuestion>
      ))}
    </ArticleSlider>
  );
};

export { ArticleHero };
