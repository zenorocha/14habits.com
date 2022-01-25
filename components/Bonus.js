import React from 'react';
import Head from 'next/head';
import i18n from '../lib/i18n';
import Alert from './Alert';

class Bonus extends React.Component {
  state = {
    succeeded: undefined,
    message: undefined,
  };

  async validateEmail(e) {
    e.preventDefault();

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        emailAddress: e.target.email_address.value,
        locale: this.props.locale,
        habit: this.props.habit,
      }),
    });

    const jsonResponse = await response.json();
    
    if (response.status === 200) {
      this.setState({ succeeded: true, message: i18n.t('alert.success') });
    } else {
      const errorMessage = jsonResponse.error || i18n.t('alert.failed');
      this.setState({ succeeded: false, message: errorMessage });
    }
  }

  renderHead() {
    const title = `${i18n.t('bonus.title')} / ${i18n.t('bonus.habit')} #${this.props.habit}`;
    const description = i18n.t(`bonus.${this.props.habit}`);

    return <Head>
      <title>{title}</title>
      <meta content={title} property="og:title" />
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={i18n.t('meta.ogUrl')} property="og:url" />
      <meta content={i18n.t('meta.ogImageUrl')} property="og:image" />
    </Head>
  }

  render() {
    i18n.locale = this.props.locale;

    return <div>
      {this.renderHead()}

      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {i18n.t('bonus.title')} / <span className="underline">{i18n.t('bonus.habit')} #{this.props.habit}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              {i18n.t(`bonus.${this.props.habit}`)}
            </p>
          </div>
          <div className="mt-12">
            <form onSubmit={this.validateEmail.bind(this)}>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input defaultValue="123@abc.com" type="email" id="email" name="email_address" placeholder={i18n.t('bonus.enterEmail')} required className="form-input py-3 px-4 block w-full transition ease-in-out duration-300" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="w-full inline-flex rounded-md shadow-sm">
                  <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 rounded-md font-semibold text-book-gray bg-book-yellow hover:bg-yellow-200 focus:outline-none transition duration-300 ease-in-out mt-5">
                    {i18n.t('bonus.cta')}
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Alert locale={this.props.locale} succeeded={this.state.succeeded} message={this.state.message} />
    </div>
  }
}

export default Bonus;