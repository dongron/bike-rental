import type { FC } from 'react';
import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';
import { FaShopify, FaWordpressSimple } from 'react-icons/fa';
import { SiWebflow } from 'react-icons/si';

import { LandingGridBox } from '@/components/landing-grid/landing-gird-box';
import {
  getCMSPath,
  getCustomAppsPath,
  getEcommercePath,
  getShopifyPath,
} from '@/routes';

const services = [
  {
    title: 'Custom Web Apps',
    icons: [BsCodeSlash, AiOutlineMobile],
    url: getCustomAppsPath(),
    className: '',
    isVisible: true,
  },
  {
    title: 'Online Store Setup',
    icon: FaShopify,
    url: getShopifyPath(),
    className: '',
    isVisible: true,
  },
  {
    title: 'Webflow',
    icon: SiWebflow,
    url: getEcommercePath(),
    className: '',
    isVisible: false,
  },
  {
    title: 'Integrated Frontend',
    icons: [FaShopify, SiWebflow, FaWordpressSimple],
    url: getCMSPath(),
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
              icons={service.icons}
              url={service.url}
              className={service.className}
            />
          )
      )}
    </div>
  );
};

export { LandingGrid };
