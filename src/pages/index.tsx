import { LandingGrid } from '@/components/landing-grid/landing-grid';
import Slider from '@/components/slider/slider';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Landing } from '@/templates/Landing';

const Index = () => {
  return (
    <Landing
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Slider />
      <ContentWrapper>
        <>
          <h2 className="my-3 text-center text-3xl font-bold">Services</h2>
          <LandingGrid className="py-6" />
        </>
      </ContentWrapper>
    </Landing>
  );
};

export default Index;
