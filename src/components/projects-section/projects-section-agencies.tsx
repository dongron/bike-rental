import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

const agenciesTitle = 'The agencies we collaborated with';
const agencies = [
  {
    name: 'Brival',
    logoSrc: `/assets/images/clients/brival-logo.png`,
  },
  {
    name: 'The Gig Agency',
    logoSrc: `/assets/images/clients/the-gig-agency-logo.png`,
  },
  {
    name: 'i2a Solutions',
    logoSrc: `/assets/images/clients/i2a-logo.svg`,
    isWhiteLogo: true,
  },
];

const ProjectsSectionAgencies: FC<any> = () => {
  const router = useRouter();

  return (
    <>
      <h2 className="mb-0 text-center text-3xl font-bold">{agenciesTitle}</h2>
      <div className="agencies-container flex justify-center gap-4">
        {agencies.map((agency) => (
          <div key={agency.name} className="rounded-xl">
            <Image
              width="200"
              height="50"
              src={`${router.basePath}${agency.logoSrc}`}
              style={{ objectFit: 'contain' }}
              className={`max-h-full min-h-[100px] rounded-xl px-4 py-0 grayscale-50 md:py-4 ${
                agency.isWhiteLogo ? 'invert-75' : ''
              }`}
              alt={`Logo of ${agency.name}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { ProjectsSectionAgencies };
