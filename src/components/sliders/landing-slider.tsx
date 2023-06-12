// This component is imported from old version of the site
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';
import React from 'react';
import Slider from 'react-slick';

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
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className="slider-content">
          <div className="text-center">
            <img
              src={`${router.basePath}/assets/images/undraw_work_together_h63l.svg`}
              className={`${styles.landingPageImage} pb-3`}
            />
            <h1 className={`p-0 ${styles.companyName}`}>{companyName}</h1>
            <p className={`p-0 ${styles.companyMotto}`}>
              Software bringing you profit
            </p>
            {children}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
