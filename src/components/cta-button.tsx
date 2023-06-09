import type { FC, ReactNode } from 'react';

import { appConfig } from '@/utils/AppConfig';
import { createEmailUrl } from '@/utils/create-email-url';

enum Theme {
  dark = 'dark',
  light = 'light',
}

const generalSalesEmailConfig = createEmailUrl({
  email: appConfig.site.siteMetadata.salesEmail,
  subject: 'Service quotation',
  body: `Hello 8 Bits Space! 
  \nI am interested in ... 
  \nLooking forward to hearing from you 
Partner XYZ`,
});

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
  url = generalSalesEmailConfig,
}) => {
  const baseStyles =
    theme === Theme.light
      ? `my-5 rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800  
      shadow-sm focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 focus-visible:outline-white 
      hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg`
      : `my-5 rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800  
      shadow-sm focus-visible:outline focus-visible:outline-2 
      focus-visible:outline-offset-2 focus-visible:outline-white 
      hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg`;

  return (
    <a type="button" className={`${baseStyles} ${className}`} href={url}>
      {children}
    </a>
  );
};

export { CTAButton };
