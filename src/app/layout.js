import "./globals.css";
import { Manrope, Noto_Serif } from "next/font/google";
import SmoothScrolling from "./utils/SmoothScrolling";
import { GoogleAnalytics } from '@next/third-parties/google';
// import EnhancedReferrerTracker from "./components/ReferrerTracker";

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
        {/* <link
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
        /> */}

        {/* {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && ( */}
          <>
            {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} /> */}
            {/* <EnhancedReferrerTracker /> */}
          </>
        {/* )} */}
        {/* <script
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
        /> */}
      </head>
      <body
        className={`antialiased ${manrope.variable} ${notoSerif.variable}`}
        id="main-content"
      >
        <div className="sr-only">
          <h1>Lazim Latheef (Lazim MV) – Full Stack Developer Portfolio</h1>

          <div>
            <h2>Professional Software Developer</h2>
            <p>
              Experienced Full Stack Developer specializing in modern web and mobile
              development using React, Next.js, and other JavaScript frameworks.
            </p>
            <ul>
              <li>Next.js and React Development</li>
              <li>Mobile App Development (React Native, Expo)</li>
              <li>RESTful & GraphQL API Integration</li>
              <li>Scalable, High-Performance Web Applications</li>
              <li>Frontend Architecture & Component Libraries</li>
              <li>Modern UI/UX Implementation</li>
            </ul>
            <p>Based in Kerala, India – working with global clients remotely.</p>
          </div>

          <div>
            <h2>Services Offered</h2>
            <ul>
              <li>Custom Web Application Development</li>
              <li>Mobile Application Development (Android/iOS)</li>
              <li>Business Dashboard and Admin Panels</li>
              <li>Landing Pages and Portfolio Websites</li>
              <li>UI/UX Design Implementation</li>
              <li>Performance Optimization & SEO</li>
              <li>Third-Party API Integration</li>
              <li>Authentication & Role-Based Access Systems</li>
              <li>Deployment and Hosting Setup (Vercel, Netlify, etc.)</li>
            </ul>
          </div>

          <div>
            <h2>Featured Projects</h2>
            <ul>
              <li>
                <strong>SmartPlus Cargo</strong> – Logistics platform with dashboard, shipment tracking, and cargo management.
              </li>
              <li>
                <strong>Sicura Solutions</strong> – Security services website with multilingual support and custom CMS features.
              </li>
              <li>
                <strong>AutoScale Labs</strong> – Portfolio and automation agency site with form integrations and service modules.
              </li>
              <li>
                <strong>Car & Bike Reseller Dashboard</strong> – Full-stack ERP for vehicle dealers using Next.js, Prisma, and PostgreSQL.
              </li>
              <li>
                <strong>Social Media AutoPoster</strong> – OAuth-based app for cross-platform content posting (Instagram, Twitter, YouTube).
              </li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <p>
              Open to freelance projects, collaborations, and long-term opportunities.
              Let’s build something great together.
            </p>
            <p>Email: lazim.latheef.dev@gmail.com</p>
          </div>
        </div>

        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
