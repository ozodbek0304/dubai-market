import i18n from "@/lib/i18next";
import { queryClient } from "@/lib/querClient";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { I18nextProvider } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </QueryClientProvider>
  );
}
