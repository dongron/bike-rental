import type { FC } from 'react';

import Contact from '@/components/contact/contact';
import { CTAButton } from '@/components/cta-button';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Theme } from '@/types/theme';

import styles from '../styles/shared.module.css';

interface CTASectionProps {
  className?: string;
}

const CTASection: FC<CTASectionProps> = ({ className = '' }) => {
  return (
    <div className={`mb-12 mt-10 ${styles.backgroundGradient} ${className}`}>
      <ContentWrapper className={`w-full `}>
        <>
          <h2 className="text-center">
            Ready to take your web app to the next level? Start transforming
            your business today!
          </h2>
          <div className="flex w-full flex-wrap justify-center ">
            <Contact source="landing-CTA-section">
              <CTAButton theme={Theme.dark} className="mt-1">
                Get started now!
              </CTAButton>
            </Contact>
          </div>
        </>
      </ContentWrapper>
    </div>
  );
};

export { CTASection };
