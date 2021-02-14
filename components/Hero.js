import React from 'react';
import i18n from '../lib/i18n';
import { getBookPrice } from '../lib/pricing';

class Hero extends React.Component {
  constructor(props) {
    super(props);

    const { baseUrl } = getBookPrice();
    this.state = { baseUrl };
  }

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      const { baseUrl } = getBookPrice();
      this.setState({ baseUrl });
    }
  }

  ctas() {
    let primaryCta = i18n.t('pricing.book.primaryCta');
    let secondaryCta = i18n.t('pricing.book.secondaryCta');
    let primaryCtaUrl = `${this.state.baseUrl}${i18n.t('pricing.book.amazonId')}`;
    let secondaryCtaUrl = i18n.t('pricing.book.gumroadUrl');

    if (this.props.locale !== 'es-ES') {
      primaryCta = i18n.t('hero.primaryCta');
      secondaryCta = i18n.t('hero.secondaryCta');
      primaryCtaUrl = '#ebook';
      secondaryCtaUrl = '#audiobook';
    }

    return <div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div>
          <a href={primaryCtaUrl} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md font-semibold text-book-gray bg-book-yellow hover:bg-yellow-200 focus:outline-none transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10">
            {primaryCta}
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href={secondaryCtaUrl} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 rounded-md font-semibold text-book-yellow bg-book-gray hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10">
            {secondaryCta}
          </a>
        </div>
      </div>
      <p className="mt-3 text-sm text-book-gray sm:mt-5 sm:text-base">
        {i18n.t('hero.or')}<a download href={i18n.t('freeChapter.url')} className="underline hover:bg-book-yellow transition ease-in-out duration-300">{i18n.t('hero.download')}</a>{i18n.t('hero.forFree')}
      </p>
    </div>
  }

  renderCoverContainer() {
    if (this.props.locale === "es-ES") {
      return <div className="book-container">
        {this.renderCover()}
      </div>
    }

    return <a className="book-container" href="#ebook">
      {this.renderCover()}
    </a>
  }

  renderCover() {
    return <div className="book">
      <img src={i18n.t('hero.bookCover')} alt={i18n.t('meta.title')} />
    </div>
  }

  render() {
    i18n.locale = this.props.locale;

    return <div className="mx-auto max-w-screen-xl px-4 mt-7 mb-8 sm:mt-11 sm:mb-12 sm:px-6 md:mt-19 md:mb-20 xl:mt-23 xl:mb-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="md:max-w-1xl md:mx-auto lg:col-span-8">
          <div className="text-base uppercase tracking-wide mb-4">
            <img className="inline h-5 relative" style={{ top: 3 }} src="/static/img/amazon.svg" alt="amazon.com" /> best-seller
          </div>
          <h1 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            {i18n.t('hero.titleFirstPart')}&nbsp;
            <br className="hidden md:inline" />
            <span className="underline">{i18n.t('hero.titleSecondPart')}</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('hero.headerFirstParagraph')}
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('hero.headerSecondParagraph')}
          </p>
          {this.ctas()}
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
          {this.renderCoverContainer()}
        </div>
      </div>
    </div>
  }
}

export default Hero;