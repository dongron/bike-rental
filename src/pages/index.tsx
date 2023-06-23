import { AboutUsSection } from '@/components/about-us-section';
import Contact from '@/components/contact/contact';
import { ContactSection } from '@/components/contact-section/contact-section';
import { CTAButton } from '@/components/cta-button';
import { CTASection } from '@/components/cta-section';
import { LandingGrid } from '@/components/landing-grid/landing-grid';
import Slider from '@/components/sliders/landing-slider';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Landing } from '@/templates/Landing';
import { appConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Landing
      meta={
        <Meta
          title={appConfig.site.siteMetadata.companyName}
          description={appConfig.site.siteMetadata.description}
        />
      }
    >
      <Slider>
        <Contact source="landing-header">
          <CTAButton className="mb-0">Talk to Our Team</CTAButton>
        </Contact>
      </Slider>

      <ContentWrapper>
        <>
          <h2 className="my-3 text-center text-3xl font-bold">What we offer</h2>
          <LandingGrid className="py-6" />
        </>
      </ContentWrapper>

      <ContentWrapper>
        <AboutUsSection className="mb-20 mt-10" />
      </ContentWrapper>

      <CTASection className="mb-12 mt-10" />

      <ContentWrapper>
        <ContactSection className="mb-12 mt-10" />
      </ContentWrapper>
    </Landing>
  );
};

export default Index;
