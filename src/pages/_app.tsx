import i18n from "@/lib/i18next";
import { queryClient } from "@/lib/querClient";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      document.getElementById('__next')?.classList.add('loaded');
    }, 0);

  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </QueryClientProvider>
  );
}
