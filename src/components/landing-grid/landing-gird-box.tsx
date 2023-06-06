import type { FC } from 'react';
import React from 'react';
import type { IconType } from 'react-icons';
import { FaHome } from 'react-icons/fa';

interface LandingGridType {
  className?: string;
  title?: string;
  Icon?: IconType | any;
  iconColor?: string;
}

const LandingGridBox: FC<LandingGridType> = ({
  className,
  title,
  Icon = FaHome,
  iconColor,
}) => {
  return (
    <div
      className={`h-full w-full cursor-pointer content-center rounded-md border-2 border-solid border-gray-500 p-8 shadow-md hover:shadow-xl ${className}`}
    >
      <Icon className="mx-auto" size={30} color={iconColor} />
      <h3 className="mx-auto mt-4 text-center font-bold">{title}</h3>
    </div>
  );
};

export { LandingGridBox };
