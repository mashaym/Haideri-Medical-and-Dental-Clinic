import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { clinic } from "@/lib/data";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.haideridental.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinic.name} | Dentist in Abbottabad`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Haideri Medical and Dental Center in Kehal, Abbottabad — trusted family dentistry, cosmetic dentistry, dental implants, and physiotherapy led by Dr. Syed Saif Kazmi. Book your appointment today.",
  keywords: [
    "dentist Abbottabad",
    "dental clinic Abbottabad",
    "Haideri Dental Center",
    "Dr Syed Saif Kazmi",
    "physiotherapy Abbottabad",
    "cosmetic dentistry Abbottabad",
    "dental implants Abbottabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: clinic.name,
    title: `${clinic.name} | Dentist in Abbottabad`,
    description:
      "Trusted family dentistry, cosmetic dentistry, dental implants, and physiotherapy in Abbottabad, led by Dr. Syed Saif Kazmi.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | Dentist in Abbottabad`,
    description:
      "Trusted family dentistry, cosmetic dentistry, dental implants, and physiotherapy in Abbottabad, led by Dr. Syed Saif Kazmi.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    image: `${siteUrl}/icon.svg`,
    telephone: clinic.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: "46W9+3RP, Kehal",
      addressLocality: "Abbottabad",
      postalCode: "22020",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    url: siteUrl,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "12:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
