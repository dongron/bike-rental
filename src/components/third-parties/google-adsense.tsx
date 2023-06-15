const GoogleAdsense = () => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8118457789375955"
        crossOrigin="anonymous"
      />
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-8118457789375955",
          enable_page_level_ads: true
          });`}
      </script>
    </>
  );
};

export { GoogleAdsense };
