// This component is imported from old version of the site
import type { FC, ReactNode } from 'react';
import React from 'react';
import Slider from 'react-slick';

import styles from './slider.module.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface ArticleSliderProps {
  title?: string;
  imageUrl?: string;
  children?: ReactNode;
}

const ArticleSlider: FC<ArticleSliderProps> = ({ children }) => {
  return (
    <div className={`${styles.sliderContainer} !pt-10`}>
      <Slider {...settings}>
        <div className="slider-content">
          <div className="text-center">{children}</div>
        </div>
      </Slider>
    </div>
  );
};

export default ArticleSlider;
