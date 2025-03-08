import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FQSHC6M39G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FQSHC6M39G', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content="Dubayga arzon sayohat qiling! O‘zbekistondan Dubayga eng yaxshi turpaketlar, chipta narxlari, mehmonxonalar va viza olish bo‘yicha to‘liq ma’lumot." />

        <meta name="keywords" content="Dubay sayohati, Dubayga chipta, Dubay vizasi, Dubay turpaketlari, Dubay mehmonxonalar, Dubay ekskursiyalar, Dubay safari, Toshkent Dubay aviachipta, arzon sayohat, Dubaydagi eng yaxshi mehmonxonalar, BAA sayohati, Dubay turizm, Dubay sayohat agentligi, Dubayda dam olish, Dubayda qayerga borish, Dubay transport narxlari, Dubay aviachipta narxlari, Dubayda yashash, Dubayda arzon sayohat qilish, Dubayda taomlar" />

        <meta name="author" content="Magical Deserts" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dubay Sayohati - Eng Arzon va Qulay Turpaketlar" />
        <meta property="og:description" content="Dubayga tezkor va arzon sayohat qiling! Eng yaxshi turpaketlar, mehmonxonalar va ekskursiyalarni tanlang." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://magical-deserts.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dubay Sayohati - Eng Arzon va Qulay Turpaketlar" />
        <meta name="twitter:description" content="Dubayga qulay va arzon sayohat qiling. Eng yaxshi turpaketlar siz uchun!" />
        <meta name="twitter:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="antialiased font-sans font-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
