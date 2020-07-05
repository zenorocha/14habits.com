import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta content="Zeno Rocha" name="author" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta content="summary" name="twitter:card" />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}} />
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}