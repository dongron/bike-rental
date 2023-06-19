import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import type { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';

interface LandingGridProps {
  className?: string;
  title?: string;
  Icon?: IconType | any;
  icons?: IconType[] | any;
  iconColor?: string;
  url?: string;
}

const LandingGridBox: FC<LandingGridProps> = ({
  className,
  title,
  Icon,
  icons,
  iconColor,
  url,
}) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="mx-auto flex w-[60%] justify-center">
        {icons?.map((SingleIcon: any, idx: number) => (
          <SingleIcon
            /* eslint-disable-next-line react/no-array-index-key */
            key={idx}
            className="mx-[15px] w-[30px]"
            size={30}
            color={iconColor}
            styles={{ alignSelf: 'flex-start' }}
          />
        ))}
        {Icon && <Icon className="mx-auto" size={30} color={iconColor} />}
      </div>
      <h3 className="mx-auto mt-4 p-0 text-center text-xl font-bold">
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
