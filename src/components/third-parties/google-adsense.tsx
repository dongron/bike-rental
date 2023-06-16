const GoogleAdsense = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT;
  const isEnabledOnPageLevel =
    process.env.NEXT_PUBLIC_GOOGLE_AD_ENABLE_PAGE_LEVEL_ADS;

  return (
    <>
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
      />
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "${clientId}",
          enable_page_level_ads: ${isEnabledOnPageLevel}
          });`}
      </script>
    </>
  );
};

export { GoogleAdsense };
