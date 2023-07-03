export const getLandingPath = (): string => `/`;
export const getAboutPath = (): string => `/about`;
// services
export const getShopifyPath = (): string => `/services/shopify`;
export const getCustomAppsPath = (): string => `/services/custom-apps`;
export const getCustomTemplatesPath = (): string => `/services/templates`;
// glossary
export const getGlossaryPath = (): string => `/glossary`;
export const getPWAPath = (): string => `/glossary/pwa`;
export const getEcommercePath = (): string => `/glossary/ecommerce`;
export const getCMSPath = (): string => `/glossary/cms`;
// articles

export const getBlogExternalPath = (): string =>
  `https://dominikgronkiewicz.com/blog/`;

export const getNavbarLinks = () => [
  {
    link: getCustomAppsPath(),
    title: 'Web apps',
  },
  {
    link: getShopifyPath(),
    title: 'Online Store',
  },
  {
    link: getCustomTemplatesPath(),
    title: 'Web Design',
  },
  {
    link: getGlossaryPath(),
    title: 'Glossary',
    isHidden: true,
    children: [],
  },
];
