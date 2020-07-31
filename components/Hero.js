import React from 'react';
import i18n from '../lib/i18n';
import getPricing from '../lib/pricing';

class Hero extends React.Component {
  constructor(props) {
    super(props);

    const { baseUrl } = getPricing();
    this.state = { baseUrl };
  }

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      const { baseUrl } = getPricing();
      this.setState({ baseUrl });
    }
  }

  ctas() {
    let convertKit = {
      form: '1508065',
      uid: '8c01414042'
    };

    if (this.props.locale === "es-ES") {
      convertKit = {
        form: '1508165',
        uid: 'b73173af97'
      };

      return <div className="mt-5 sm:max-w-lg lg:mx-0">
        <p className="text-base font-medium text-gray-900">
          {i18n.t('hero.notifyCta')}
        </p>

        <form action={`https://app.convertkit.com/forms/${convertKit.form}/subscriptions`} data-sv-form={convertKit.form} data-uid={convertKit.uid} data-format="inline" data-version="5">
          <ul data-element="errors"></ul>
          <div data-element="fields">
            <div className="mt-3 sm:flex">
              <input type="email" name="email_address" placeholder={i18n.t('bonus.enterEmail')} required className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1" />
              <button data-element="submit" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 shadow-sm hover:bg-purple-700 focus:outline-none focus:shadow-outline active:bg-purple-900 transition duration-300 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                {i18n.t('hero.notifyMe')}
              </button>
            </div>
          </div>
        </form>
      </div>
    }

    return <div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a href={`${this.state.baseUrl}${i18n.t('pricing.amazonId')}`} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:border-purple-900 focus:shadow-outline-purple transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10">
            {i18n.t('pricing.primaryCta')}
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href={i18n.t('pricing.gumroadUrl')} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-200 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10">
            {i18n.t('pricing.secondaryCta')}
          </a>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-base">
        {i18n.t('hero.or')}<a download href={i18n.t('freeChapter.url')} className="text-purple-600 border-b-2 border-transparent hover:border-purple-600 transition ease-in-out duration-300">{i18n.t('hero.download')}</a>{i18n.t('hero.forFree')}
      </p>
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
          <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            {i18n.t('hero.titleFirstPart')}&nbsp;
            <br className="hidden md:inline" />
            <span className="text-purple-600">{i18n.t('hero.titleSecondPart')}</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('hero.headerFirstParagraph')}
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('hero.headerSecondParagraph')}
          </p>
          {this.ctas()}
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
          <a className="book-container" href={`${this.state.baseUrl}${i18n.t('pricing.amazonId')}`}>
            <div className="book">
              <img src={i18n.t('hero.bookCover')} alt={i18n.t('meta.title')} />
            </div>
          </a>
        </div>
      </div>
    </div>
  }
}

export default Hero;