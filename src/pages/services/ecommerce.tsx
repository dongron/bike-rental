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
    title: 'Ecommerce',
    description: '8 Bits Space, services Mobile Web Apps',
  },
  title: 'E-commerce',
  imageUrl: '/assets/images/undraw_window_shopping_re_0kbm.svg',
  questions: [
    'Do you want to build, modernize or extend your online store functionalities?',
  ],
  body: `<h1>Ecommerce refers to the buying and selling of products or services online.</h1> 
  <p>It's a way for businesses to reach a wider audience, sell their products 24/7, 
  and provide a convenient shopping experience for customers.</p>
  <h1>Now, let's talk about Shopify</h1> 
  <p>Shopify is a popular ecommerce platform that helps businesses build and manage their online stores. 
  It provides a user-friendly interface and a wide range of tools and features that make it easy to set up and run an online store, even for non-technical users.</p>
  <h1>Reasons why you might consider choosing Shopify for your ecommerce business</h1>
  <ul class="list-disc">
  <li>Fast setup: Shopify offers a set of the out of the box tools that only needs a proper setup process. 
   It provides customizable themes and templates, allowing you to create a high quality store in a very short period of time. </li>
  <li>All-in-one solution: Shopify is an all-in-one platform where you can take care of hosting, security, and technical aspects of running an online store. 
   It provides a secure and reliable infrastructure, so you can focus on your business without worrying about the technical details. </li>
  <li> Extensive app store: Shopify has an extensive app store with a wide range of plugins and extensions. These apps can add extra functionality to your store, such as payment gateways, inventory management tools, marketing features, and more. 
  You can easily integrate these apps into your store to enhance its capabilities. </li> 
  <li>Mobile-ready and responsive: With the rise of mobile shopping, having a mobile-friendly store is crucial. 
  Shopify offers responsive themes and a mobile app that allows you to manage your store on the go and provides a seamless experience for your customers across different devices.</li>
  <li>Payment and shipping options: Shopify integrates with various payment gateways, making it easy for your customers to make secure payments. 
  It also provides shipping integrations and allows you to set up shipping rates and options based on your business needs.</li>
  </ul>
  <p>Whether you're just starting out or already have an established business, Shopify can be a great solution for your ecommerce needs.</p>
  `,
};

const Ecommerce = () => {
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

export default Ecommerce;
