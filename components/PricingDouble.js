import React from 'react';
import i18n from '../lib/i18n';
import { getAudiobookPrice, getBookPrice } from '../lib/pricing';

class PricingDouble extends React.Component {
  constructor(props) {
    super(props);

    const bookPrice = getBookPrice();
    const audiobookPrice = getAudiobookPrice();
    this.state = { audiobookPrice, bookPrice };
  }

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      const bookPrice = getBookPrice();
      const audiobookPrice = getAudiobookPrice();
      this.setState({ audiobookPrice, bookPrice });
    }
  }

  render() {
    i18n.locale = this.props.locale;

    return <div>
      <div className="bg-gray-900">
        <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
          <div className="text-center">
            <p className="mt- text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              {i18n.t('pricing.title')}
            </p>
            <p className="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:leading-8">
              {i18n.t('pricing.description')}
            </p>
          </div>
        </div>

        <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-3xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3 id="ebook" className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-purple-100 text-purple-600">
                        E-Book
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      {this.state.bookPrice.value}
                      {this.state.bookPrice.cents &&
                        <span className="text-2xl leading-8 font-medium text-gray-500">
                          {this.state.bookPrice.cents}
                        </span>
                      }
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.book.itemOne')}
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.book.itemTwo')}
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.book.itemThree')}
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.book.itemFour')}
                        </p>
                      </li>
                    </ul>
                    <div>
                      <a href={`${this.state.baseUrl}${i18n.t('pricing.book.amazonId')}`} className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-900 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150">
                        {i18n.t('pricing.book.primaryCta')}
                      </a>
                      <a href={i18n.t('pricing.book.gumroadUrl')} className="mt-4 block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-200 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition ease-in-out duration-150">
                        {i18n.t('pricing.book.secondaryCta')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col rounded-lg shadow-lg relative overflow-hidden">
                  <div className="ribbon uppercase font-semibold bg-yellow-100 text-yellow-700 text-sm text-center whitespace-no-wrap px-4">new</div>
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3 id="audiobook" className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-purple-100 text-purple-600">
                        Audiobook
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                      {this.state.audiobookPrice.value}
                      {this.state.audiobookPrice.cents &&
                        <span className="text-2xl leading-8 font-medium text-gray-500">
                          {this.state.audiobookPrice.cents}
                        </span>
                      }
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.audiobook.itemOne')}
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.audiobook.itemTwo')}
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.audiobook.itemThree')}
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base leading-6 text-gray-700">
                          {i18n.t('pricing.audiobook.itemFour')}
                        </p>
                      </li>
                    </ul>
                    <div>
                      <a href={i18n.t('pricing.audiobook.gumroadUrl')} className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-900 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150">
                        {i18n.t('pricing.audiobook.primaryCta')}
                      </a>
                      <a download href={i18n.t('audiobook.sample')} className="mt-4 block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-200 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition ease-in-out duration-150">
                        {i18n.t('pricing.audiobook.secondaryCta')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-base text-gray-700 mt-10">{i18n.t('pricing.moreThan')} <span className="font-semibold">2130 {i18n.t('pricing.copies')}</span> {i18n.t('pricing.sold')}</p>
          </div>
        </div>
      </div>
    </div>
  }
}

export default PricingDouble;