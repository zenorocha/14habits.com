import React from 'react';
import i18n from '../lib/i18n';

class Index extends React.Component {
  render() {
    i18n.locale = this.props.locale;

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
}

export default Index;