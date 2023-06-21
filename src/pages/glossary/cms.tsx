import { ArticleBody } from '@/components/article/article-body';
import { ArticleHero } from '@/components/article/article-hero';
import { ContactSection } from '@/components/contact-section/contact-section';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  meta: {
    title: 'CMS',
    description: '8 Bits Space, services Mobile Web Apps',
  },
  title: 'CMS',
  imageUrl: '/assets/images/undraw_cms_re_asu0.svg',
  questions: [
    'Do you want to build, modernize or extend your blog or website functionalities?',
  ],
  body: `
  <h1>CMS stands for Content Management System</h1>
  <p>It is a software application or platform that allows you to create, manage, and publish digital content on your website without requiring extensive technical knowledge.</p>
  <h1>CMS can help you help you increase profit for your business in a few ways</h1>
  <ul class="list-disc">
  <li> Easy content creation and management: A CMS provides a user-friendly interface that simplifies the process of creating and managing content on your website. You can easily create and publish blog posts, product pages, landing pages, and other types of content without relying on a web developer or needing advanced technical skills. 
  This allows you to quickly update your website with fresh and engaging content, which can attract more visitors and potentially lead to more sales. </li>
  <li>Improved website maintenance: With a CMS, you can easily update and maintain your website without the need for technical assistance. 
  You can make changes to your site's design, layout, and navigation, ensuring that your website always looks professional and up to date. By having a well-maintained and visually appealing website, 
  you can enhance the user experience and build trust with your audience, which can ultimately lead to higher conversion rates and increased profit.</li>
  <li>Search engine optimization (SEO): A CMS often includes built-in SEO features or plugins that can help improve your website's visibility in search engine results. 
  You can optimize your content for relevant keywords, create meta tags, and easily generate search engine-friendly URLs. 
  By improving your website's SEO, you have a better chance of ranking higher in search engine results, driving more organic traffic to your site, and potentially increasing your sales and profit.</li>
  <li>Personalization and customer engagement: Many CMS platforms offer features that allow you to personalize the user experience on your website. 
  You can create targeted content based on user preferences, behavior, or demographics, providing a more personalized and engaging experience for your visitors. By tailoring your content and offers to specific customer segments, you can increase customer engagement, build brand loyalty, and potentially boost your profit. </li>
  <li>Integration with other tools and platforms: A CMS often integrates with various third-party tools and platforms, such as email marketing software, customer relationship management (CRM) systems, and social media platforms. This integration allows you to streamline your marketing efforts, capture leads, and nurture customer relationships more effectively. 
  By leveraging these integrations, you can optimize your marketing campaigns, improve customer engagement, and ultimately increase your profit.</li>
  </ul>
  
  <p>
  CMS can help you personalize customer experiences, and integrate with other tools and platforms to optimize your marketing efforts. 
  It provides you with the flexibility and control to effectively manage your online presence, attract more visitors, and drive conversions and sales.
  </p>
  `,
};

const CMS = () => {
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

export default CMS;
