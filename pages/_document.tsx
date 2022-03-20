import NextDocument, { Html, Head, Main, NextScript } from "next/document";

let prod = process.env.NODE_ENV == "production";

let csp = ``;
csp += `base-uri 'self';`;
csp += `form-action 'self';`;
csp += `default-src 'self';`;
csp += `script-src 'self' ${prod ? "" : "'unsafe-eval'"};`;
csp += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline' data:;`;
csp += `img-src 'self' data: blob:;`;
csp += `font-src 'self' https://fonts.gstatic.com;`;
csp += `frame-src *;`;
csp += `media-src *;`;
csp += `connect-src https://vitals.vercel-insights.com https://portfolio-website-arpit.vercel.app http://localhost:3000;`;

let referrer = "strict-origin";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Security-Policy" content={csp} />
                    <meta name="referrer" content={referrer} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://portfolio-website-arpit.vercel.app/" />
                    <meta property="og:image" content="https://res.cloudinary.com/arpit-portfolio-cloudinary/image/upload/v1646053154/Arpit_verma_1024_960_px_150_150_px_rlvbn0.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}