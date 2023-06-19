import Script from 'next/script';

// according to https://nextjs.org/docs/messages/next-script-for-ga

const GoogleAnalytics = () => {
  const gtagId = process.env.NEXT_PUBLIC_GOOGLE_GTAG_ID;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagId}');`}
      </Script>
    </>
  );
};

export { GoogleAnalytics };
