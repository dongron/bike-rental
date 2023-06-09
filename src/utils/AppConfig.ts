import { createEmailUrl } from '@/utils/create-email-url';

const siteMetadata = {
  companyName: '8 Bits Space OÜ',
  companyNameInformal: '8 Bits Space',
  title: '8 BS',
  description: '8 Bits Space OÜ company website',
  locale: 'en',
  address: 'Sepapaja 6,Tallinn 15551,Estonia',
  contactEmail: 'contact@8bits.space',
  salesEmail: 'sales@8bits.space',
};

const salesEmailBody = `Hello ${siteMetadata.companyNameInformal}! 
  \nI am interested in ... 
  \nLooking forward to hearing from you 
Partner XYZ`;

const appConfig = {
  site: {
    siteMetadata,
  },
  emails: {
    generalSalesEmail: createEmailUrl({
      email: siteMetadata.salesEmail,
      subject: 'Service quotation',
      body: salesEmailBody,
    }),
  },
};

// old config, to remove
const AppConfig = {
  title: 'Nextjs Starter',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
};

export { AppConfig, appConfig };
