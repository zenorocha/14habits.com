import React from 'react';
import Link from 'next/link';

class Banner extends React.Component {
  state = {
    isVisible: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.geo !== prevProps.geo) {
      this.checkCountry();
    }
  }

  checkCountry() {
    if (this.props.locale !== 'BR' && this.props.geo && this.props.geo.country === 'BR') {
      this.setState({ isVisible: true });
    }
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    return <div className={this.state.isVisible ? 'visible' : 'invisible'}>
      <div className="bg-indigo-600">
        <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-1 rounded-lg bg-indigo-800">
                <img className="rounded-lg" src="/static/img/flag-br.svg" alt="Brazil Flag" width="36" height="36" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Opa! Notei que você é do Brasil :)
                </span>
                <span className="hidden md:inline">
                  Opa! Notei que você é do Brasil, quer ler em Português?
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <div className="rounded-md shadow-sm">
                <Link href="/br">
                  <a className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                    Ler em Português
                  </a>
                </Link>
              </div>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button onClick={this.hide.bind(this)} type="button" className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 sm:-mr-2 transition ease-in-out duration-150" aria-label="Dismiss">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
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