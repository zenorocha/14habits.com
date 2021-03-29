import React from 'react';
import i18n from '../lib/i18n';
import { getAudiobookPrice, getDigitalBookPrice, getPhysicalBookPrice } from '../lib/pricing';

class PricingTrio extends React.Component {
  constructor(props) {
    super(props);

    const bookPrice = getDigitalBookPrice(props.geo);
    const audiobookPrice = getAudiobookPrice(props.geo);
    const physicalBookPrice = getPhysicalBookPrice(props.geo);
    this.state = { audiobookPrice, bookPrice, physicalBookPrice };
  }

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      const bookPrice = getDigitalBookPrice(this.props.geo);
      const audiobookPrice = getAudiobookPrice(this.props.geo);
      const physicalBookPrice = getPhysicalBookPrice(this.props.geo);
      this.setState({ audiobookPrice, bookPrice, physicalBookPrice });
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3 className="text-center text-2xl font-medium text-book-gray" id="audiobook">
                            Audiobook
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-1 flex items-start text-6xl tracking-tight text-book-gray">
                              <span className="font-extrabold">
                                {this.state.audiobookPrice.value}
                              </span>
                            </span>
                            {this.state.audiobookPrice.cents &&
                              <span className="text-2xl leading-8 font-medium text-gray-500">
                                {this.state.audiobookPrice.cents}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {i18n.t('pricing.audiobook.itemOne')}
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {i18n.t('pricing.audiobook.itemTwo')}
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {i18n.t('pricing.audiobook.itemThree')}
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a href={i18n.t('pricing.audiobook.primaryUrl')} className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-lg leading-6 font-semibold text-book-gray bg-book-yellow hover:bg-yellow-200 focus:outline-none transition duration-300 ease-in-out">
                              {i18n.t('pricing.audiobook.primaryCta')}
                            </a>
                            <a href={i18n.t('pricing.audiobook.secondaryUrl')} className="mt-4 block w-full text-center rounded-lg border border-transparent px-6 py-4 text-lg leading-6 font-semibold text-book-yellow bg-book-gray hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out">
                              {i18n.t('pricing.audiobook.secondaryCta')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div className="pointer-events-none absolute inset-0 rounded-lg border-2" aria-hidden="true"></div>
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full text-book-gray bg-book-yellow px-4 py-1 text-sm font-semibold tracking-wider uppercase">
                          {i18n.t('pricing.mostPopular')}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div>
                        <h3 className="text-center text-3xl font-semibold text-book-gray sm:-mx-6" id="ebook">
                          E-Book
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-1 flex items-start text-6xl tracking-tight text-book-gray sm:text-6xl">
                            <span className="font-extrabold">
                              {this.state.bookPrice.value}
                            </span>
                          </span>
                          {this.state.bookPrice.cents &&
                            <span className="text-2xl font-medium text-gray-500">
                              {this.state.bookPrice.cents}
                            </span>
                          }
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {i18n.t('pricing.book.itemOne')}
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {i18n.t('pricing.book.itemTwo')}
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {i18n.t('pricing.book.itemThree')}
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {i18n.t('pricing.book.itemFour')}
                          </p>
                        </li>
                      </ul>
                      <div className="mt-10">
                        <div className="rounded-lg shadow-md">
                          <a href={`${this.state.bookPrice.baseUrl}${i18n.t('pricing.book.amazonId')}`} className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-semibold text-book-gray bg-book-yellow hover:bg-yellow-200 focus:outline-none transition duration-300 ease-in-out">
                            {i18n.t('pricing.book.primaryCta')}
                          </a>
                          <a href={i18n.t('pricing.book.gumroadUrl')} className="mt-4 block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-semibold text-book-yellow bg-book-gray hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out">
                            {i18n.t('pricing.book.secondaryCta')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3 className="text-center text-2xl font-medium text-book-gray" id="hardcover">
                            {i18n.t('pricing.physicalBook.hardCover')}
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-1 flex items-start text-6xl tracking-tight text-book-gray">
                              <span className="font-extrabold">
                                {this.state.physicalBookPrice.value}
                              </span>
                            </span>
                            {this.state.physicalBookPrice.cents &&
                              <span className="text-xl font-medium text-gray-500">
                                {this.state.physicalBookPrice.cents}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {i18n.t('pricing.physicalBook.itemOne')}
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {i18n.t('pricing.physicalBook.itemTwo')}
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {i18n.t('pricing.physicalBook.itemThree')}
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <a href={`${this.state.physicalBookPrice.baseUrl}${i18n.t('pricing.physicalBook.amazonId')}`} className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-lg leading-6 font-semibold text-book-gray bg-book-yellow hover:bg-yellow-200 focus:outline-none transition duration-300 ease-in-out">
                              {i18n.t('pricing.physicalBook.primaryCta')}
                            </a>
                            <a href={i18n.t('pricing.physicalBook.secondaryUrl')} className="mt-4 block w-full text-center rounded-lg border border-transparent px-6 py-4 text-lg leading-6 font-semibold text-book-yellow bg-book-gray hover:bg-gray-800 focus:outline-none transition duration-300 ease-in-out">
                              {i18n.t('pricing.physicalBook.secondaryCta')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-base text-gray-700 mt-10">{i18n.t('pricing.moreThan')} <span className="font-semibold">2,425 {i18n.t('pricing.copies')}</span> {i18n.t('pricing.sold')}</p>
          </div>
        </div>
      </div>
    </div>
  }
}

export default PricingTrio;