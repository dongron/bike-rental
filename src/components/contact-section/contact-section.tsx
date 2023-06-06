import { useRouter } from 'next/router';
import type { FC } from 'react';

import { appConfig } from '@/utils/AppConfig';

import styles from './contact-section.module.css';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: FC<ContactSectionProps> = ({ className }) => {
  const router = useRouter();

  const email = appConfig.site?.siteMetadata?.contactEmail || null;

  return (
    <div className={`mb-2 ${className}`}>
      <div>
        <img
          className={styles.landingPageImage}
          src={`${router.basePath}/assets/images/undraw_contact_us_15o2.svg`}
        />
      </div>

      <h2 className="mb-2 mt-8 text-center text-2xl font-bold text-gray-900">
        {appConfig.site.siteMetadata.companyName}
      </h2>

      {appConfig.site?.siteMetadata?.address && (
        <p className="text-center text-base">
          {appConfig.site?.siteMetadata?.address
            ?.split(',')
            .map((addressRow) => (
              <span className="leading-1 my-0 block" key={addressRow}>
                {addressRow}
              </span>
            ))}
        </p>
      )}

      {email && (
        <p className={`text-center text-base ${styles.contactItemTitle}`}>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </div>
  );
};

export { ContactSection };
