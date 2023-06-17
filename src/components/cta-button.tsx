import type { FC, ReactNode } from 'react';

import { Theme } from '@/types/theme';
import { appConfig } from '@/utils/AppConfig';

const generalBaseStyles = `inline-block my-5 rounded-full px-3.5 py-2.5 text-sm 
  font-semibold shadow-sm 
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 
  hover:shadow-lg`;

interface CTAButtonProps {
  children?: ReactNode;
  className?: string;
  theme?: Theme;
  url?: string;
  type?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

const CTAButton: FC<CTAButtonProps> = ({
  children = 'Request a Quote',
  className,
  theme = Theme.light,
  url = appConfig.emails.generalSalesEmail,
  type = 'button',
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    theme === Theme.light
      ? `${generalBaseStyles} bg-white text-gray-800  
      hover:bg-gray-100 hover:text-gray-900`
      : ` ${generalBaseStyles} bg-brandOrangeDefault text-black  
      hover:bg-brandOrange-600 hover:text-gray-800`;

  return type === 'submit' || onClick ? (
    // to prevent reload
    <button
      type="submit"
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <a
      type={type}
      className={`${baseStyles} ${className}`}
      href={url || ''}
      onClick={(event) => (disabled ? event.preventDefault() : {})}
    >
      {children}
    </a>
  );
};

export { CTAButton };
