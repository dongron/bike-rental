import { ContactSection } from '@/components/contact-section/contact-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Ecommerce"
          description="8 Bits Space, services for ecommerce"
        />
      }
    >
      <ContentWrapper>
        <ContactSection className="mb-12 mt-10" />
      </ContentWrapper>
    </Main>
  );
};

export default Index;
