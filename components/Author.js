import React from 'react';
import i18n from '../lib/i18n';

class Author extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto pt-16 pb-12">
        <h2 className="text-5xl mb-4 font-semibold text-gray-900 px-4">
          <span className="text-indigo-600">{i18n.t('author.who')}</span>&nbsp;{i18n.t('author.wrote')}
        </h2>
        <div className="flex-none sm:flex">
          <div className="sm:flex-1 px-4">
            <img className="mb-4 rounded-md" src="/static/img/author.jpg" alt="Zeno Rocha" />
          </div>
          <div className="text-lg text-gray-600 sm:flex-1 px-4">
            <p className="mb-4">{i18n.t('author.part1')}</p>
            <p className="mb-4">{i18n.t('author.part2')}</p>
            <p className="mb-4">{i18n.t('author.part3')}</p>
            <p className="mb-4">{i18n.t('author.part4')}</p>
            <p className="text-sm italic text-gray-500">{i18n.t('author.location')}</p>
            <div className="flex flex-row my-2">
              <a href="https://github.com/zenorocha" target="_blank">
                <img className="w-5 h-5 mr-2" src="/static/img/logo-github.svg" alt="GitHub" />
              </a>
              <a href="https://twitter.com/zenorocha" target="_blank">
                <img className="w-5 h-5 mr-2" src="/static/img/logo-twitter.svg" alt="Twitter" />
              </a>
              <a href="https://linkedin.com/in/zenorocha" target="_blank">
                <img className="w-5 h-5 mr-2" src="/static/img/logo-linkedin.svg" alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Author;