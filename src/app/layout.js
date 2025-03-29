import "./globals.css";



// ... existing code ...
export const metadata = {
  title: "Lazim MV — Software Developer",
  description: "Crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable web applications.",
  keywords: "software developer, web developer, fullstack developer, Next.js developer, React developer, mobile app developer",
  openGraph: {
    title: "Lazim MV — Software Developer",
    description: "Crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable web applications.",
    url: "https://lazimmv.vercel.app",
    siteName: "Lazim MV Portfolio",
    images: [
      {
        url: "https://lazimmv.vercel.app/favicon.png", // Add your OG image
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazim MV — Software Developer",
    description: "Crafting high-performance web and mobile solutions. Explore my portfolio showcasing expertise in Next.js, React, and scalable web applications.",
    images: ["https://lazimmv.vercel.app/openGraph.png"], // Add your Twitter card image
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
        {/* Preload the GA script */}
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtag/js?id=G-R945BBRD1B"
          as="script"
        />

        {/* Load GA directly in <head> */}
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
      </head>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`antialiased`}
        style={{ fontFamily: "var(--font-boring-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
