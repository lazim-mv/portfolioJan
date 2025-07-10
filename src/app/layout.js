import "./globals.css";
import { Manrope, Noto_Serif } from "next/font/google";
import SmoothScrolling from "./utils/SmoothScrolling";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-notoSerif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lazim Latheef (Lazim MV) — Software Developer",
  description:
    "I'm Lazim Latheef, a fullstack developer crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable apps.",
  keywords:
    "Lazim, Lazim MV, Lazim Latheef, software developer, web developer, fullstack developer, Next.js, React, mobile app developer, portfolio",
  openGraph: {
    title: "Lazim Latheef (Lazim MV) — Software Developer",
    description:
      "I'm Lazim Latheef, a fullstack developer crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable apps.",
    url: "https://lazimmv.vercel.app",
    siteName: "Lazim MV Portfolio",
    images: [
      {
        url: "https://lazimmv.vercel.app/openGraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazim Latheef (Lazim MV) — Software Developer",
    description:
      "I'm Lazim Latheef, a fullstack developer crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable apps.",
    images: ["https://lazimmv.vercel.app/openGraph.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-R945BBRD1B"
          as="script"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R945BBRD1B"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R945BBRD1B');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lazim Latheef",
              alternateName: "Lazim MV",
              url: "https://lazimmv.vercel.app",
              jobTitle: "Software Developer",
              sameAs: [
                "https://www.linkedin.com/in/lazim-mv-/",
                "https://github.com/lazim-mv",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`antialiased ${manrope.variable} ${notoSerif.variable}`}
        id="main-content"
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
