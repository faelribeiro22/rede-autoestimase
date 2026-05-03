import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import Header from "@/components/Header";
import Footer from "../../components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import CookieConsentModal from "@/components/CookieConsentModal/CookieConsentModal";

export const runtime = "edge";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  // Validate locale
  const locales = ['pt-BR', 'en', 'es'];
  if (!locales.includes(locale)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header />
      {children}
      <Footer />
      <BackToTop />
      <CookieConsentModal />
    </NextIntlClientProvider>
  );
}
