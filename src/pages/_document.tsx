import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uz">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Dubayga arzon sayohat! O'zbekistondan chipta, turpaketlar, mehmonxonalar va viza bo‘yicha to‘liq ma’lumot."
        />

        <meta
          name="keywords"
          content="Dubai tours, Best Dubai city tour, Dubai desert safari deals, Luxury tours Dubai, Private tours in Dubai, Top attractions in Dubai, Visit Dubai 2025, Dubai family vacations, Dubai sightseeing packages, Dubai tour guide service,Airport transfer Dubai, Book Dubai desert safari, Yacht rental Dubai Marina, Burj Khalifa tickets online, Cheap tours in Dubai, Dubai travel agencyl, Dubai city sightseeing bus, Adventure tours Dubai, Dubai honeymoon packages, Dubai day tours, Best things to do in Dubai, Dubai tourism offers, Dubai desert safari VIP, Evening desert safari Dubai, Dubai helicopter tours, Dubai hot air balloon rides, Dubai Miracle Garden tickets, Global Village Dubai tours, Museum of the Future Dubai tickets, Dubai Aquarium tickets discount"
        />

        <meta name="author" content="Magical Deserts" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dubaydagi Shaxsiy Vip Xizmatlar" />
        <meta
          property="og:description"
          content="Biz siz uchun hashamatli xizmatlarni tashkillashtiramiz"
        />
        <meta property="og:image" content="/share.png" />
        <meta property="og:url" content="https://magical-deserts.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dubaydagi Shaxsiy Vip Xizmatlar" />
        <meta
          name="twitter:description"
          content="Biz siz uchun hashamatli xizmatlarni tashkillashtiramiz"
        />
        <meta name="twitter:image" content="/share.png" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href="https://magical-deserts.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Magical Deserts",
              url: "https://magical-deserts.com",
              description:
                "Dubayga arzon sayohat xizmatlari, chipta, viza va turpaketlar.",
            }),
          }}
        />
      </Head>

      <body className="antialiased font-sans font-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
