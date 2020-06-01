import React from 'react';
import Head from 'next/head';
import i18n from '../lib/i18n';

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

  renderHero() {
    return <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-1xl md:mx-auto lg:col-span-8 lg:text-left">
          <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
            {i18n.t('comingSoon')}
          </div>
          <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            {i18n.t('titleFirstPart')}&nbsp;
            <br className="hidden md:inline" />
            <span className="text-indigo-600">{i18n.t('titleSecondPart')}</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('headerFirstParagraph')}
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('headerSecondParagraph')}
          </p>
          <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <p className="text-base font-medium text-gray-900">
              {i18n.t('notifyCta')}
            </p>

            <form action="https://14habits.us18.list-manage.com/subscribe/post?u=9c6a6470e21773febbf140222&amp;id=1ca77ddfde" method="POST" className="mt-3 sm:flex">
              <input name="EMAIL" type="email" placeholder={i18n.t('enterEmail')} id="mce-EMAIL" required aria-label="Email" className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1" />
              <input name="subscribe" type="submit" value={i18n.t('notifyMe')} id="mc-embedded-subscribe" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:shadow-outline active:bg-indigo-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto" />
            </form>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
          <img src={i18n.t('bookCover')} alt="Book cover" />
        </div>
      </div>
    </div>
  }

  renderFaqList() {
    return <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          {i18n.t(`faqs.title`)}
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                {this.renderFaqItem('seniority')}
              </div>
              <div className="mt-12">
                {this.renderFaqItem('refund')}
              </div>
              <div className="mt-12">
                {this.renderFaqItem('paper')}
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div>
                {this.renderFaqItem('position')}
              </div>
              <div className="mt-12">
                {this.renderFaqItem('team')}
              </div>
              <div className="mt-12">
                {this.renderFaqItem('email')}
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  }

  renderFaqItem(faq) {
    return <div>
      <dt className="text-lg leading-6 font-medium text-gray-900">
        {i18n.t(`faqs.${faq}.question`)}
      </dt>
      <dd className="mt-2">
        <p className="text-base leading-6 text-gray-500">
          {i18n.t(`faqs.${faq}.answer`)}
        </p>
      </dd>
    </div>
  }

  renderFooter() {
    return <div className="bg-indigo-700 text-indigo-200 py-12">
      <p className="text-xl text-center">{i18n.t('footer.madeWith')} <span className="text-3xl text-pink-400 love">♥</span> {i18n.t('footer.by')} <a className="text-white" href="https://zenorocha.com" target="blank">Zeno Rocha</a></p>
    </div>
  }

  render() {
    i18n.locale = this.props.locale;

    return <div>
      {this.renderHead()}
      {this.renderHero()}
      {this.renderFaqList()}
      {this.renderFooter()}
    </div>
  }
}

export default Index;