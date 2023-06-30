import { useRouter } from 'next/router';

import { ArticleBody } from '@/components/article/article-body';
import { ArticleHero } from '@/components/article/article-hero';
import { CTASection } from '@/components/cta-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { getEcommercePath } from '@/routes';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  meta: {
    title: 'Shopify online store setup',
    description: '8 Bits Space, services Shopify online store setup',
  },
  title: 'Shopify online store setup',
  imageUrl: '/assets/images/undraw_window_shopping_re_0kbm.svg',
  questions: [
    'Do you want to build, modernize or extend your online store functionalities?',
  ],
  body: `
  <h1>We specialize in a full range of <a href=${getEcommercePath()}>Shopify</a> solutions.</h1> 
  <h2>All processes that we can help with</h2> 
  <ul>
  <li>Comprehensive shop setup</li> <li>Payment integrations for any geographical region</li> <li>Blog setup</li> <li>Store translations</li> <li>Customizing templates</li> <li>Custom coded components</li> <li>Integration of third-party libraries</li> <li>Training in any of the previously mentioned areas</li> 
  </ul>
  <h2>What does our process look like?</h2> 
  <p>Our process begins with a review of your existing store or gathering detailed information and requirements for a new store. For smaller store changes, we provide daily updates via email or other communication channels. 
  If the changes require significant software development, we follow a similar process to our custom app creation, using an Agile system. This means that we provide weekly updates to keep you informed and ensure that our work meets your needs. In the case of creating a store from scratch, we agree on store ownership and the responsibilities for maintenance and necessary configuration updates. If there is a need, we can also provide condensed training to your team.</p>
 
  `,
};

const Shopify = () => {
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

export default Shopify;
