import React from 'react';
import i18n from '../lib/i18n';
import isSupportedLocale from '../lib/locales';

class Faq extends React.Component {
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

  render() {
    i18n.locale = this.props.locale;

    if (!isSupportedLocale(this.props.locale)) {
      return <div />
    }

    return <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 pb-16">
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
}

export default Faq;