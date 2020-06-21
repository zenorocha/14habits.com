import React from 'react';
import i18n from '../lib/i18n';

class Pricing extends React.Component {
  state = {
    price: '$9'
  };

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      this.checkCountry();
    }
  }

  checkCountry() {
    if (this.props.geo && this.props.geo.country === 'BR') {
      this.setState({
        price: 'R$24'
      });
    }
  }

  render() {
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

        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-9">
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-7 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"></div>
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                          E-Book
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div>
                        <div className="mt-4 flex items-center justify-center">
                          <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                            {this.state.price}
                            <span className="text-2xl leading-8 font-medium text-gray-500">
                              .99
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul>
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.format')}
                          </p>
                        </li>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.pages')}
                          </p>
                        </li>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.interviews')}
                          </p>
                        </li>
                        <li className="mt-4 flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          <p className="ml-3 text-base leading-6 font-medium text-gray-500">
                            {i18n.t('pricing.updates')}
                          </p>
                        </li>
                      </ul>
                      <div className="mt-10">
                        <div className="rounded-lg shadow-md">
                          <a href={i18n.t('pricing.link')} className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150">
                            {i18n.t('pricing.cta')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Pricing;