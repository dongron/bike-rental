import type { FC, ReactNode } from 'react';

import { Theme } from '@/types/theme';
import { appConfig } from '@/utils/AppConfig';

interface CTAButtonProps {
  children?: ReactNode;
  className?: string;
  theme?: Theme;
  url?: string;
}

const CTAButton: FC<CTAButtonProps> = ({
  children = 'Request a Quote',
  className,
  theme = Theme.light,
  url = appConfig.emails.generalSalesEmail,
}) => {
  const baseStyles =
    theme === Theme.light
      ? `my-5 rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800  
      shadow-sm focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 focus-visible:outline-white 
      hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg`
      : `my-5 rounded-full px-3.5 py-2.5 text-sm font-semibold
      bg-brandOrangeDefault text-black  
      shadow-sm focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 focus-visible:outline-white 
      hover:shadow-lg hover:bg-brandOrange-600 hover:text-gray-800`;

  return (
    <a type="button" className={`${baseStyles} ${className}`} href={url}>
      {children}
    </a>
  );
};

export { CTAButton };
