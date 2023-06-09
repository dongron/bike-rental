import { useRouter } from 'next/router';

import { ArticleHero } from '@/components/article/article-hero';
import { ContactSection } from '@/components/contact-section/contact-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  title: '',
  questions: [],
  body: 'blah blah',
};

const PWA = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="PWA"
          description="8 Bits Space, services Mobile Web Apps"
        />
      }
    >
      <ArticleHero
        title={articleData.title}
        questions={articleData.questions}
        imageUrl={`${router.basePath}/assets/images/undraw_work_together_h63l.svg`}
      />
      <ContentWrapper>
        <ContactSection className="mb-12 mt-10" />
      </ContentWrapper>
    </Main>
  );
};

export default PWA;
