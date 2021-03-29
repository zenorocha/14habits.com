import React from 'react';
import i18n from '../lib/i18n';
import { getDigitalBookPrice } from '../lib/pricing';

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    const { value, cents, baseUrl } = getDigitalBookPrice(props.geo);
    this.state = { value, cents, baseUrl };
  }

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      const { value, cents, baseUrl } = getDigitalBookPrice(this.props.geo);
      this.setState({ value, cents, baseUrl });
    }
  }

  render() {
    i18n.locale = this.props.locale;

    return <div>
      <div className="bg-book-gray">
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

        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-5/6 bg-book-gray lg:h-2/3"></div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-9">
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-book-yellow"></div>
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full text-book-gray bg-book-yellow px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                          E-Book
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div>
                        <div className="mt-4 flex items-center justify-center">
                          <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                            {this.state.value}
                            {this.state.cents &&
                              <span className="text-2xl leading-8 font-medium text-gray-500">
                                {this.state.cents}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.book.itemOne')}
                          </p>
                        </li>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.book.itemTwo')}
                          </p>
                        </li>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.book.itemThree')}
                          </p>
                        </li>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.book.itemFour')}
                          </p>
                        </li>
                      </ul>
                      <div className="mt-10">
                        <a href={`${this.state.baseUrl}${i18n.t('pricing.book.amazonId')}`} className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-semibold text-book-gray bg-book-yellow hover:bg-yellow-200 focus:outline-none transition ease-in-out duration-150">
                          {i18n.t('pricing.book.primaryCta')}
                        </a>
                        <a href={i18n.t('pricing.book.gumroadUrl')} className="mt-4 block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-semibold text-book-yellow bg-book-gray hover:bg-gray-800 focus:outline-none transition ease-in-out duration-150">
                          {i18n.t('pricing.book.secondaryCta')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-base text-gray-700 mt-10">{i18n.t('pricing.moreThan')} <span className="font-semibold">2,786 {i18n.t('pricing.copies')}</span> {i18n.t('pricing.sold')}</p>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Pricing;