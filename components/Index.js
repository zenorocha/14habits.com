import React from 'react';
import Head from 'next/head';
import i18n from '../lib/i18n';
import Banner from './Banner';
import Hero from './Hero';
import Author from './Author';
import Testimonials from './Testimonials';
import Toc from './Toc';
import Logos from './Logos';
import Interviews from './Interviews';
import Audiobook from './Audiobook';
import FreeChapter from './FreeChapter';
import Faq from './Faq';
import Pricing from './Pricing';
import PricingDouble from './PricingDouble';
import Footer from './Footer';
import Alert from './Alert';

class Index extends React.Component {
  state = {
    geo: {}
  };

  async componentDidMount() {
    const geoFetch = await fetch('/api/geo');
    const { geo } = await geoFetch.json();
    this.setState({ geo });
  }

  renderHead() {
    return <Head>
      <title>{i18n.t('meta.title')}</title>
      <meta content={i18n.t('meta.title')} property="og:title" />
      <meta content={i18n.t('meta.title')} name="twitter:title" />
      <meta content={i18n.t('meta.description')} name="description" />
      <meta content={i18n.t('meta.description')} property="og:description" />
      <meta content={i18n.t('meta.description')} name="twitter:description" />
      <meta content={i18n.t('meta.ogUrl')} property="og:url" />
      <meta content={i18n.t('meta.ogImageUrl')} property="og:image" />
      <meta content={i18n.t('meta.ogImageUrl')} name="twitter:image" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@zenorocha" />
    </Head>
  }

  render() {
    i18n.locale = this.props.locale;
    const hasAudiobook = this.props.locale === 'en-US' || 'pt-BR';

    return <div>
      {this.renderHead()}
      <Banner locale={this.props.locale} geo={this.state.geo} />
      <Hero locale={this.props.locale} geo={this.state.geo} />
      <Author locale={this.props.locale} />
      {hasAudiobook &&
        <Audiobook locale={this.props.locale} />
      }
      <Logos locale={this.props.locale} />
      <Interviews locale={this.props.locale} />
      <FreeChapter locale={this.props.locale} />
      <Toc locale={this.props.locale} />
      <Testimonials locale={this.props.locale} />
      {hasAudiobook
        ? <PricingDouble locale={this.props.locale} geo={this.state.geo} />
        : <Pricing locale={this.props.locale} geo={this.state.geo} />
      }
      <Faq locale={this.props.locale} />
      <Footer locale={this.props.locale} />
      <Alert locale={this.props.locale} query={this.props.query} />
    </div>
  }
}

export default Index;