import type { FC } from 'react';
import React from 'react';

import { ContactSection } from '@/components/contact-section/contact-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { appConfig } from '@/utils/AppConfig';

const Footer: FC<any> = () => {
  return (
    <footer
      className="border-t border-white bg-gradient-to-b from-white to-stone-200 py-8
              text-center text-sm"
    >
      <ContentWrapper className="mb-12 mt-8">
        <ContactSection />
      </ContentWrapper>

      <div>
        © Copyright {new Date().getFullYear()}{' '}
        {appConfig.site.siteMetadata.companyName}
      </div>
    </footer>
  );
};

export { Footer };
