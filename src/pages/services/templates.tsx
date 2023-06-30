import { useRouter } from 'next/router';

import { ArticleBody } from '@/components/article/article-body';
import { ArticleHero } from '@/components/article/article-hero';
import { CTASection } from '@/components/cta-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { getCMSPath, getEcommercePath } from '@/routes';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  meta: {
    title: 'Custom templates',
    description: '8 Bits Space, services Custom templates',
  },
  title: 'Custom templates',
  imageUrl: '/assets/images/undraw_cms_re_asu0.svg',
  questions: [
    'Do you want to build, modernize or extend your blog or website functionalities?',
  ],
  body: `
  <h1>We can help you customize your UI for the most popular <a href=${getCMSPath()}>CMS</a> and <a href=${getEcommercePath()} style="white-space: nowrap;">E-commerce</a> systems.</h1>
<h2>Our Services</h2> 
<ul class="list-disc"> <li>Theme customization to match your brand and business requirements</li> <li>Custom components development</li> <li>Integration of components with third-party APIs</li> <li>Creation of custom charts, graphs, or other data representations</li> <li>Optimization of your CMS/store's performance, including page load speed, responsiveness, and overall user experience</li> <li>Platform migrations for seamless transitions</li> <li>Training on topics related to setup and customization.</li> </ul>

<p>In the realm of custom frontend layouts and web components, our process begins by conducting a comprehensive review of your existing store or gathering detailed information and requirements for a new store. This step allows us to gain a deep understanding of your unique needs and preferences.
</p>
<p>
For smaller store changes, we maintain constant communication with you, providing daily updates through email or other preferred communication channels. This ensures that you are well-informed and involved in the process every step of the way.
</p>
<p>
Furthermore, we recognize the importance of knowledge transfer and offer condensed training sessions to your team if needed. This empowers your team members to confidently manage and make the most out of the custom frontend layouts and web components we develop.
</p>
<p>
Our goal is to provide you with a seamless and tailored experience, delivering high-quality solutions that not only meet but exceed your expectations.
</p>
  `,
};

const Templates = () => {
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

      <CTASection />
    </Main>
  );
};

export default Templates;
