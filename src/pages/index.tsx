import { useRouter } from 'next/router';

import { AboutUsSection } from '@/components/about-us-section';
import Contact from '@/components/contact/contact';
import { CTAButton } from '@/components/cta-button';
import { CTASection } from '@/components/cta-section';
import { LandingGrid } from '@/components/landing-grid/landing-grid';
import ProjectsSection from '@/components/projects-section/projects-section';
import Slider from '@/components/sliders/landing-slider';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import animations from '@/styles/animations.module.css';
import { Landing } from '@/templates/Landing';
import { appConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

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
        <Contact
          source="landing-header"
          forceIsDialogOpen={!!router.query.contactForm}
        >
          <CTAButton className={`my-9 ${animations.animateHeroCTA}`}>
            Talk to Our Team
          </CTAButton>
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

      <ContentWrapper>
        <ProjectsSection className="mb-20 mt-4" />
      </ContentWrapper>

      <CTASection className="mb-12 mt-10" />
    </Landing>
  );
};

export default Index;
