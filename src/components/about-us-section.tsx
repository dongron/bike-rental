import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React from 'react';

const aboutHeader = `About 8 Bits Space`;

const aboutBodySections = [
  `This company was established in Estonia in November 2019, with a main focus on developing custom, high-quality software in the shortest possible time.`,
  `I have created numerous MVPs for startups since 2017. The value that our company provides is amplified by an extended network of developers with whom I have collaborated on previous projects.`,
  `As technology evolves, so does 8 Bits Space. New tools are embraced to enable faster product delivery without compromising on quality. The recent focus has been on all-in-one platforms that align with the customers' goals.`,
];

interface AboutUsSectionProps {
  className?: string;
}

const AboutUsSection: FC<AboutUsSectionProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={className || ''}>
      <h1 className="mb-4 text-center font-bold">{aboutHeader}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2 grid">
          {aboutBodySections.map((section: string, idx: number) => (
            // eslint-disable-next-line react/no-array-index-key,react/no-danger
            <p key={idx} dangerouslySetInnerHTML={{ __html: section }} />
          ))}
        </div>
        <div className="col-span-1 py-4">
          <Image
            width="240"
            height="500"
            style={{ objectFit: 'cover' }}
            src={`${router.basePath}/assets/images/dominik3.jpg`}
            className="mx-auto h-72 max-h-full rounded-xl "
            alt="Picture of a team"
          />
          <p className="text-center">
            <a href="https://dominikgronkiewicz.com/resume/">🙌</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutUsSection };
