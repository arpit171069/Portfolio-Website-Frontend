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
csp += `connect-src https://vitals.vercel-insights.com https://portfolio-website-arpit.vercel.app;`;

let referrer = "strict-origin";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Security-Policy" content={csp} />
                    <meta name="referrer" content={referrer} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}