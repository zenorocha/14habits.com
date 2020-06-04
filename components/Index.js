import React from 'react';
import Head from 'next/head';
import i18n from '../lib/i18n';
import Hero from './Hero';
import Author from './Author';
import Interviews from './Interviews';
import Faq from './Faq';
import Footer from './Footer';

class Index extends React.Component {
  renderHead() {
    return <Head>
      <title>{i18n.t('title')}</title>
      <meta content={i18n.t('title')} property="og:title" />
      <meta content={i18n.t('description')} name="description" />
      <meta content={i18n.t('description')} property="og:description" />
      <meta content={i18n.t('ogUrl')} property="og:url" />
      <meta content={i18n.t('ogImageUrl')} property="og:image" />
    </Head>
  }

  render() {
    i18n.locale = this.props.locale;

    return <div>
      {this.renderHead()}
      <Hero locale={this.props.locale} />
      <Faq locale={this.props.locale} />
      <Author locale={this.props.locale} />
      <Interviews locale={this.props.locale} />
      <Footer locale={this.props.locale} />
    </div>
  }
}

export default Index;