import { useRouter } from 'next/router';

import { ArticleBody } from '@/components/article/article-body';
import { ArticleHero } from '@/components/article/article-hero';
import { ContactSection } from '@/components/contact-section/contact-section';
import { CTASection } from '@/components/cta-section';
import { ProjectsSectionProjects } from '@/components/projects-section/projects-section-projects';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { getPWAPath } from '@/routes';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  meta: {
    title: 'Custom Web Apps',
    description: '8 Bits Space, services Custom Web Apps',
  },
  title: 'Custom Web Apps',
  imageUrl: '/assets/images/undraw_design_process_re_0dhf.svg',
  questions: [
    'Do you need to make custom Web solution?',
    'Do you have a website and you want to export it to App Store or Play Store App?',
  ],
  body: `
  <h1>Our team has experience in creating and maintaining Web Apps</h1> 
  <h2>We excel in providing specialized solutions</h2> 
  <ul> <li>Building ground-up web solutions using full-stack TypeScript</li> <li>Creating installable web applications that behave like native apps 
  <a href=${getPWAPath()}>(PWA)</a> </li> 
  <li>Developing dashboards with interactive tables, charts, heat maps, and quizzes</li> <li>Implementing drawing tools, map toolkits, efficient uploaders, schedulers, and much more</li> <li>Creating user-friendly data management dashboards</li> <li>Developing responsive and interactive plugins (IFrames)</li> <li>Creating impersonated logins to assist end users</li> <li>Injecting custom components into existing apps</li> <li>Integrating third-party libraries</li> <li>Designing web solutions based on your needs</li> <li>Refactoring outdated source code</li> <li>Providing guidance for your developers</li> </ul>
  
  <h2>What does our process look like?</h2>
<p>Our process begins with a quick call where we gather your requirements and gain a deeper understanding of your project. Based on our expertise, we then suggest a tailored solution and outline the work path we'll follow. Once you've accepted our proposal, we proceed to estimate the cost and delivery time for your project.</p>
<p>From that moment onwards, we adopt an Agile system, working closely with you to ensure that our work aligns perfectly with your needs. Throughout the development process, we provide you with weekly updates to keep you informed of our progress and to address any feedback or adjustments you may have.</p>
`,
};

const CustomApps = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title={articleData.meta?.title || ''}
          description={articleData.meta?.description || ''}
        />
      }
    >
      <ArticleHero
        title={articleData.title}
        questions={articleData.questions}
        imageUrl={`${router.basePath}${articleData.imageUrl}`}
      />
      <ContentWrapper>
        <ArticleBody>{articleData.body}</ArticleBody>
      </ContentWrapper>

      <ContentWrapper className="mb-16 mt-8">
        <ProjectsSectionProjects />
      </ContentWrapper>

      <CTASection />

      <ContentWrapper>
        <ContactSection className="mb-12 mt-10" />
      </ContentWrapper>
    </Main>
  );
};

export default CustomApps;
