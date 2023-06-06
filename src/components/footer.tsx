import type { FC } from 'react';
import React from 'react';

import { appConfig } from '@/utils/AppConfig';

const Footer: FC<any> = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()}{' '}
      {appConfig.site.siteMetadata.companyName}
    </footer>
  );
};

export { Footer };
