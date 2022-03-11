import NextDocument, { Html, Head, Main, NextScript } from "next/document";

let prod = process.env.NODE_ENV == "production";

let csp = ``;
csp += `base-uri 'self' vitals.vercel-insights.com;`;
csp += `form-action 'self' vitals.vercel-insights.com;`;
csp += `default-src 'self' vitals.vercel-insights.com;`;
csp += `script-src 'self' ${prod ? "" : "'unsafe-eval'"} vitals.vercel-insights.com;`;
csp += `style-src 'self' https://fonts.googleapis.com 'unsafe-inline' vitals.vercel-insights.com data:;`;
csp += `img-src 'self' vitals.vercel-insights.com data: blob:;`;
csp += `font-src 'self' vitals.vercel-insights.com https://fonts.gstatic.com;`;
csp += `frame-src *;`;
csp += `media-src *;`;

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