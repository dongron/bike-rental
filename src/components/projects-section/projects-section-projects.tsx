import Image from 'next/image';
import { useRouter } from 'next/router';
import type { FC } from 'react';

const projectsTitle = 'Recently completed projects';
const projects = [
  {
    name: 'Evolve Edits',
    logoSrc: `/assets/images/clients/evolve-logo.svg`,
    isWhiteLogo: true,
  },
  {
    name: 'Plunjr',
    logoSrc: `/assets/images/clients/plunjr-logo.svg`,
    isWhiteLogo: true,
  },
  {
    name: 'Credit & Debt',
    logoSrc: `/assets/images/clients/credit-and-debt-logo.svg`,
  },
  {
    name: 'Alice Home',
    logoSrc: `/assets/images/clients/alice-home-logo.svg`,
    isWhiteLogo: true,
  },
  { name: 'Pistons', logoSrc: `/assets/images/clients/pistons-logo.svg` },
  {
    name: 'The Guru Museum System',
    logoSrc: `/assets/images/clients/guru-logo.png`,
  },
];

const ProjectsSectionProjects: FC<any> = () => {
  const router = useRouter();

  return (
    <>
      <h2 className="mb-5 mt-9 text-center text-3xl font-bold">
        {projectsTitle}
      </h2>
      <div className="projects-container grid grid-cols-3 gap-1 text-center sm:grid-cols-4 md:grid-cols-5 md:gap-4 lg:grid-cols-6">
        {projects.map((project) => (
          <div key={project.name} className="grid-cols-1">
            <Image
              width="100"
              height="50"
              src={`${router.basePath}${project.logoSrc}`}
              style={{ objectFit: 'contain' }}
              className={`mx-auto max-h-full min-h-[100px] rounded-3xl bg-gradient-to-br
              p-4 shadow-sm grayscale-25
              ${
                project.isWhiteLogo
                  ? 'from-brandPurple-500 via-brandPurple-500 to-brandPurple-600'
                  : 'from-brandPurpleLight-200 via-brandPurpleLight-200 to-brandPurpleLight-300'
              }
              `}
              alt={`Logo of ${project.name}`}
            />
            <h3 className="pb-4 pt-2 text-sm font-bold">{project.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export { ProjectsSectionProjects };
