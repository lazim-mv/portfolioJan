import Head from 'next/head';

export default function SEO() {
    return (
        <Head>
            <link rel="canonical" href="https://lazimmv.vercel.app" />
            <meta name="author" content="Lazim Latheef (Lazim MV)" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_IN" />
            <meta name="twitter:creator" content="@lazim_mv" />
        </Head>
    );
}