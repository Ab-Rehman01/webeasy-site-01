export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />

      {/* Social Meta Tags */}
      <meta name="google-site-verification" content="jCY_UMA1Bc0fTorzhjAj65dMcMPUsjhJzx2rUe9y8mA" />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://webezee-tech.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="robots" content="index, nofollow" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Webezee-Tech",
            url: "https://webezee-tech.vercel.app",
            description: "Professional web development, Shopify, and digital marketing services.",
            sameAs: [
              "https://www.facebook.com/webezee.host",
              "https://www.linkedin.com/company/webezeetech"
            ]
          }),
        }}
      />
    </>
  );
}
