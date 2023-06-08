import type { FC } from 'react';
import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaShopify, FaWordpressSimple } from 'react-icons/fa';

import { LandingGridBox } from '@/components/landing-grid/landing-gird-box';
import { getCMSPath, getEcommercePath, getPWAPath } from '@/routes';

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
      <LandingGridBox
        title="Custom CMS Frontend"
        Icon={FaWordpressSimple}
        url={getCMSPath()}
      />
      <LandingGridBox
        title="Mobile Web Apps"
        Icon={AiOutlineMobile}
        url={getPWAPath()}
      />
      <LandingGridBox
        className=""
        title="Online store fronts"
        Icon={FaShopify}
        url={getEcommercePath()}
      />
    </div>
  );
};

export { LandingGrid };
