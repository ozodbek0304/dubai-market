import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        {/* SEO meta teglar */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Dubayga arzon va qulay sayohat! O‘zbekistondan Dubayga eng yaxshi turpaketlar, vizalar va dam olish uchun maxsus takliflar."
        />
        <meta
          name="keywords"
          content="Dubay sayohati, Dubayga chipta, Dubay vizasi, arzon sayohat, BAA dam olish, turpaketlar"
        />
        <meta name="author" content="Sizning Saytingiz" />

        {/* Open Graph - Facebook va ijtimoiy tarmoqlar uchun */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dubay Sayohati - Eng Arzon va Qulay Turpaketlar" />
        <meta
          property="og:description"
          content="Dubayga tezkor va arzon sayohat qiling! Eng yaxshi turpaketlar, mehmonxonalar va ekskursiyalarni tanlang."
        />
        <meta property="og:image" content="/dubai-travel.jpg" />
        <meta property="og:url" content="https://sizningsaytingiz.com" />

        {/* Twitter uchun meta teglar */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dubay Sayohati - Eng Arzon va Qulay Turpaketlar" />
        <meta
          name="twitter:description"
          content="Dubayga qulay va arzon sayohat qiling. Eng yaxshi turpaketlar siz uchun!"
        />
        <meta name="twitter:image" content="/dubai-travel.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <title>Dubay Sayohati | Arzon va Qulay Turpaketlar</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
