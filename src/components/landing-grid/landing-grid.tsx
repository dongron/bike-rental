import type { FC } from 'react';
import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { FaShopify, FaWordpressSimple } from 'react-icons/fa';

import { LandingGridBox } from '@/components/landing-grid/landing-gird-box';

interface LandingGridProps {
  className?: string;
}

const LandingGrid: FC<LandingGridProps> = ({ className }) => {
  return (
    <div className={`grid grid-cols-2 gap-6 ${className || ''}`}>
      <LandingGridBox title="Custom CMS Frontend" Icon={FaWordpressSimple} />
      <LandingGridBox title="Mobile Web Apps" Icon={AiOutlineMobile} />
      <LandingGridBox
        className=""
        title="Online store fronts"
        Icon={FaShopify}
      />
    </div>
  );
};

export { LandingGrid };
