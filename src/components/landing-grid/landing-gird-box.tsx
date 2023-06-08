import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import type { IconType } from 'react-icons';
import { FaArrowRight, FaHome } from 'react-icons/fa';

interface LandingGridProps {
  className?: string;
  title?: string;
  Icon?: IconType | any;
  iconColor?: string;
  url?: string;
}

const LandingGridBox: FC<LandingGridProps> = ({
  className,
  title,
  Icon = FaHome,
  iconColor,
  url,
}) => {
  return (
    <div className={`${className}`}>
      <Icon className="mx-auto" size={30} color={iconColor} />
      <h3 className="mx-auto mt-4 text-center font-bold">
        {title}{' '}
        {url && (
          <FaArrowRight className="mx-auto ml-1 inline pb-0.5" size={18} />
        )}
      </h3>
    </div>
  );
};

const LandingGridBoxWrapper: FC<LandingGridProps> = (props) => {
  const { url, className } = props;

  const styles = `max-w-md mx-auto h-full w-full cursor-pointer content-center rounded-md 
  border-2 border-solid border-gray-500 py-8 shadow-md hover:shadow-xl hover:border-gray-500 ${className}`;
  const passedProps = { ...props, className: url ? '' : styles };

  return url ? (
    <Link
      href={url}
      className={`text-inherit hover:no-underline ${styles || ''}`}
    >
      <LandingGridBox {...passedProps} />
    </Link>
  ) : (
    <LandingGridBox {...passedProps} />
  );
};

export { LandingGridBoxWrapper as LandingGridBox };
