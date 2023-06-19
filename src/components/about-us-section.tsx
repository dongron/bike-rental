import type { FC } from 'react';

const aboutHeader = `About 8 Bits Space`;

const aboutBodySections = [
  `We are a company established in Estonia in November 2019, with a main focus on developing custom, high-quality software in the shortest possible time.`,
  `Our team has Polish origins, and at the core of our business is an 
  <a href="https://dominikgronkiewicz.com/resume/" style="text-decoration: underline; color: inherit">experienced individual</a> 
  who has created numerous MVPs for startups since 2017. The value we provide is amplified by an extended network of developers with whom he has collaborated on previous projects. `,
  `As technology evolves, so does our company. We embrace new tools that enable us to deliver products faster without compromising on quality. Our recent focus has been on all-in-one platforms that align with our customers' goals.`,
];

interface AboutUsSectionProps {
  className?: string;
}

const AboutUsSection: FC<AboutUsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1 className="mb-4 text-center font-bold">{aboutHeader}</h1>
      {aboutBodySections.map((section: string, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key,react/no-danger
        <p key={idx} dangerouslySetInnerHTML={{ __html: section }} />
      ))}
    </div>
  );
};

export { AboutUsSection };
