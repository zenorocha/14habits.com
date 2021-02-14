import React from 'react';
import Link from 'next/link';
import { countries } from 'countries-list';
import hasTranslation from '../lib/countries';

class Banner extends React.Component {
  state = {
    path: '',
    countryCode: '',
    countryNative: '',
    ctaText: '',
    shortText: '',
    largeText: '',
    isVisible: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      this.checkCountry();
    }
  }

  checkCountry() {
    if (!this.props.geo?.country) return;

    let newState = {
      path: hasTranslation(this.props.geo.country),
      countryCode: this.props.geo.country,
      countryNative: countries[this.props.geo.country].native,
    };

    if (this.props.locale !== 'pt-BR' && newState.path === 'br') {
      newState.isVisible = true;
      newState.ctaText = 'Ler em Português';
      newState.shortText = `Opa! Notei que você é do ${newState.countryNative} :)`;
      newState.largeText = `Opa! Notei que você é do ${newState.countryNative}, quer ler em Português?`;
      this.setState(newState);
    }

    if (this.props.locale !== 'es-ES' && newState.path === 'es') {
      newState.isVisible = true;
      newState.ctaText = 'Leer en Español';
      newState.shortText = `¡Hola! Noté que eres de ${newState.countryNative} :)`;
      newState.largeText = `¡Hola! Noté que eres de ${newState.countryNative}, ¿quieres leer en Español?`;
      this.setState(newState);
    }
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    return <div className={this.state.isVisible ? 'visible' : 'invisible'}>
      <div className="bg-book-gray">
        <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="p-1 rounded-lg bg-gray-600">
                <img className="rounded-lg" src={`/static/img/flags/${this.state.countryCode}.svg`} alt={`${this.state.countryNative} Flag`} width="40" height="30" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  {this.state.shortText}
                </span>
                <span className="hidden md:inline">
                  {this.state.largeText}
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <div className="rounded-md shadow-sm">
                <Link href={`/${this.state.path}`}>
                  <a className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-semibold rounded-md text-book-gray bg-book-yellow focus:outline-none focus:shadow-outline transition ease-in-out duration-300">
                    {this.state.ctaText}
                  </a>
                </Link>
              </div>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button onClick={this.hide.bind(this)} type="button" className="-mr-1 flex p-2 rounded-md text-gray-50 hover:text-book-yellow focus:outline-none sm:-mr-2 transition ease-in-out duration-300" aria-label="Dismiss">
                <svg className="h-6 w-6 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Banner;