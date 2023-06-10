import type { FC } from 'react';
import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaShopify, FaWordpressSimple } from 'react-icons/fa';

import { LandingGridBox } from '@/components/landing-grid/landing-gird-box';
import {
  getCMSPath,
  getEcommercePath,
  getLandingPath,
  getPWAPath,
} from '@/routes';

const services = [
  {
    title: 'Mobile Web Apps',
    icon: AiOutlineMobile,
    url: getLandingPath() || getPWAPath(),
    className: '',
    isVisible: true,
  },
  {
    title: 'Online Store Setup',
    icon: FaShopify,
    url: getLandingPath() || getEcommercePath(),
    className: '',
    isVisible: true,
  },
  {
    title: 'Custom Frontend',
    icon: FaWordpressSimple,
    url: getLandingPath() || getCMSPath(),
    className: '',
    isVisible: true,
  },
];

interface LandingGridProps {
  className?: string;
}

const LandingGrid: FC<LandingGridProps> = ({ className }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 ${
        className || ''
      }`}
    >
      {services.map(
        (service) =>
          service.isVisible && (
            <LandingGridBox
              key={service.title}
              title={service.title}
              Icon={service.icon}
              url={service.url}
              className={service.className}
            />
          )
      )}
    </div>
  );
};

export { LandingGrid };
