import { useRouter } from 'next/router';

import { ArticleBody } from '@/components/article/article-body';
import { ArticleHero } from '@/components/article/article-hero';
import { ContactSection } from '@/components/contact-section/contact-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  meta: {
    title: 'Webflow',
    description: '8 Bits Space, Webflow services',
  },
  title: 'Webflow',
  imageUrl: '/assets/images/undraw_website_builder_re_ii6e.svg',
  questions: ['Do you need visually appealing custom features in Webflow?'],
  body: `
  <h1>Webflow is a web design and development platform that allows you to create website in seconds</h1>
  <p>Websites build with Webflow are visually stunning and fully functional websites without requiring coding knowledge to start. It provides a visual interface and a powerful set of tools that enable you to design, build, and launch websites with ease.</p>
  Key advantages of using Webflow.
  <ul>
  <li>Visual web design: Webflow offers a visual drag-and-drop interface that allows you to design websites visually, just like working with a graphic design tool. You can create and customize layouts, add elements, style them, and see the changes in real-time.
  </li>
  <li>Responsive design: Webflow enables you to create responsive websites that adapt and look great on various devices and screen sizes. You can easily preview and optimize your design for desktop, tablet, and mobile views.
  </li>
  <li>CMS capabilities: Webflow includes a content management system (CMS) that allows you to create and manage dynamic content for your website. You can easily add and update blog posts, product listings, portfolio items, and more, all from within the Webflow platform.
  </li>
  <li>Hosting and publishing: Webflow provides hosting services, which means you can publish your website directly from the platform. It takes care of the technical aspects of hosting, ensuring that your site is fast, secure, and always available to visitors.
  </li>
  <li>Custom interactions and animations: With Webflow's powerful interactions and animations capabilities, you can create engaging and interactive experiences for your website visitors. You can add scroll-based animations, trigger animations on hover or click, and create custom interactions that bring your website to life.
  </li>
  <li>Code export and customization: Webflow allows you to export the generated code for your website, giving you full control and flexibility to customize and extend your site further using your own code or by working with a developer.
  </li>
  <li>Collaboration and team workflow: Webflow provides collaboration tools that make it easy to work with a team or clients on a website project. You can invite team members, assign roles and permissions, and streamline the design and development workflow.
  </li>
  </ul>
  
  <p>Webflow offers a range of features and tools that make the design process intuitive and efficient, while providing flexibility for customization and collaboration. Whether you're a designer, developer, or business owner, Webflow can be a valuable tool for bringing your website ideas to life.
  </p>

  `,
};

const Webflow = () => {
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
        <>
          <ArticleBody>{articleData.body}</ArticleBody>
          <ContactSection className="mb-12 mt-10" />
        </>
      </ContentWrapper>
    </Main>
  );
};

export default Webflow;
