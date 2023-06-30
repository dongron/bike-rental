import { ArticleBody } from '@/components/article/article-body';
import { ArticleHero } from '@/components/article/article-hero';
import { ContentWrapper } from '@/components/wrappers/content-wrapper';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Article } from '@/types/article';

const articleData: Article = {
  meta: {
    title: 'PWA',
    description: '8 Bits Space, services Mobile Web Apps',
  },
  title: 'PWA',
  imageUrl: '/assets/images/undraw_design_process_re_0dhf.svg',
  questions: [
    'Do you have a website and you want to export it to App Store or Play Store App?',
  ],
  body: `<h1>PWA stands for Progressive Web Application</h1> 
  <p>It's a type of website that looks and behaves like a mobile app. 
  With a PWA, your customers can easily access your website on their smartphones or tablets, just like they would with a regular app.</p>
  <p>The great thing about PWAs is that they work across different devices and platforms, so you don't have to worry about developing separate apps for iOS and Android. 
  Users can simply visit your website through their web browser and have an app-like experience.</p>
  <p>One of the cool features of PWAs is that they can work offline. This means that even if your customers don't have a stable internet connection, they can still use your PWA and access important information or perform certain tasks. 
  This can be really helpful for businesses that want to provide a seamless experience to their customers, regardless of their internet connection.</p>
  <p>PWAs are also easy to install. Users can save your PWA to their device's home screen, just like they would with a regular app. 
  This makes it convenient for them to access your website whenever they want, without having to go through a web browser.</p>
  <p>Overall, PWAs can help improve your business by providing a fast, engaging, and user-friendly experience to your customers. 
  They combine the best of both worlds - the reach and accessibility of the web, and the convenience and interactivity of a mobile app.</p>
`,
};

const PWA = () => {
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
        <ArticleBody>{articleData.body}</ArticleBody>
      </ContentWrapper>
    </Main>
  );
};

export default PWA;
