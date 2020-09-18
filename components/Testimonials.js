import React from 'react';
import i18n from '../lib/i18n';
import isSupportedLocale from '../lib/locales';

class Testimonials extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    if (!isSupportedLocale(this.props.locale)) {
      return <div />
    }

    return <section className="bg-gray-50 pt-10 pb-12 overflow-hidden md:pt-18 md:pb-20 lg:pt-22 lg:pb-24">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img">
          <defs>
            <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div className="relative">
          <img src="/static/img/logo-nike.svg" className="mx-auto" height="100" width="100" alt="Nike" />
          <blockquote className="mt-8">
            <div className="max-w-6xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>&ldquo;{i18n.t('testimonial.quote')}&rdquo;</p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img className="mx-auto h-12 w-12 rounded-full" src="/static/img/avatar-zachary.jpeg" alt="Zachary Sohovich" />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base leading-6 font-medium text-gray-900">Zachary Sohovich</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base leading-6 font-medium text-gray-500">Software Engineer, Nike</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  }
}

export default Testimonials;