import React from 'react';
import Head from 'next/head';
import i18n from '../lib/i18n';
import Banner from './Banner';
import Hero from './Hero';
import Author from './Author';
import Testimonials from './Testimonials';
import Interviews from './Interviews';
import Faq from './Faq';
import Pricing from './Pricing';
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
      <Banner locale={this.props.locale} geo={this.state.geo} />
      <Hero locale={this.props.locale} />
      <Author locale={this.props.locale} />
      <Interviews locale={this.props.locale} />
      <Testimonials locale={this.props.locale} />
      <Pricing locale={this.props.locale} geo={this.state.geo} />
      <Faq locale={this.props.locale} />
      <Footer locale={this.props.locale} />
      <Alert locale={this.props.locale} query={this.props.query} />
    </div>
  }
}

export default Index;