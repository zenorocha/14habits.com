import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta content="Zeno Rocha" name="author" />
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta content="summary" name="twitter:card" />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <script async src="https://platform.twitter.com/widgets.js"></script>

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}} />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}