import type { FC } from 'react';

import { ProjectsSectionAgencies } from '@/components/projects-section/projects-section-agencies';
import { ProjectsSectionProjects } from '@/components/projects-section/projects-section-projects';

const ProjectsSection: FC<any> = ({ className }) => {
  return (
    <div className={`text-center ${className || ''}`}>
      <ProjectsSectionAgencies />
      <ProjectsSectionProjects />
    </div>
  );
};

export default ProjectsSection;
