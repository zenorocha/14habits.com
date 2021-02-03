import React from 'react';
import i18n from '../lib/i18n';

class Audiobook extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-16">
        <h2 className="text-5xl mb-4 font-semibold text-gray-900 px-4">
          {i18n.t('audiobook.titleFirstPart')}&nbsp;<span className="text-purple-600">{i18n.t('audiobook.titleSecondPart')}</span>
        </h2>
        <div className="flex-none sm:flex">
          <div className="text-lg text-gray-600 sm:flex-1 px-4">
            <p className="mb-4">{i18n.t('audiobook.part1')}</p>
            <p className="mb-4">{i18n.t('audiobook.part2')}</p>
            <p className="mb-4">{i18n.t('audiobook.part3')}</p>
            <p className="mb-4 italic">{i18n.t('audiobook.part4')}</p>
            <p className="mb-4">
              <audio src={i18n.t('audiobook.sample')} controls />
            </p>
          </div>
          <div className="text-lg text-gray-600 sm:flex-1 px-4">
            <img className="mb-4 rounded-md" src={i18n.t('audiobook.photo')} alt="Audiobook Recording" />
          </div>
        </div>
      </div>
    </div>
  }
}

export default Audiobook;