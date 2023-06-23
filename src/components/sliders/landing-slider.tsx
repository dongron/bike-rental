// This component is imported from old version of the site
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import React from 'react';
import Slider from 'react-slick';

import animations from '@/styles/animations.module.css';

import styles from './slider.module.css';

const sideMetadata = {
  site: {
    siteMetadata: {
      companyName: '8 Bits Space OÜ',
    },
  },
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface SliderComponentProps {
  children?: ReactNode;
}

const SliderComponent: FC<SliderComponentProps> = ({ children }) => {
  const { companyName } = sideMetadata.site.siteMetadata;

  const router = useRouter();

  return (
    <div
      className={`${styles.sliderContainer} ${styles.landingSliderContainer}`}
    >
      <Slider {...settings}>
        <div className="slider-content">
          <div className="text-center">
            <img
              src={`${router.basePath}/assets/images/undraw_work_together_h63l.svg`}
              className={`${styles.landingPageImage} ${animations.animateHeroImage} pb-3`}
            />
            <h1
              className={`p-0 ${styles.companyName} ${animations.animateHeroTitle}`}
            >
              {companyName}
            </h1>
            <h3
              className={`p-0 ${styles.companyMotto} ${animations.animateHeroMotto}`}
            >
              Software bringing you profit
            </h3>
            {children}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
