import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO */}
        <title>ImpressHer</title>
        <meta name="description" content="A beautiful experience that impresses hearts 💖" />

        {/* Open Graph for WhatsApp, Facebook, etc. */}
        <meta property="og:title" content="ImpressHer" />
        <meta property="og:description" content="A beautiful experience that impresses hearts 💖" />
        <meta property="og:image" content="https://yourdomain.netlify.app/preview.jpg" />
        <meta property="og:url" content="https://yourdomain.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter card (also used by WhatsApp sometimes) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://yourdomain.netlify.app/preview.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
