import React from 'react';
import i18n from '../lib/i18n';

class Toc extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    if (this.props.locale === "es-ES") {
      return <div />
    }

    return <div className="bg-gray-900 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto py-15 text-lg">
        <div className="hidden sm:block sm:absolute sm:inset-0">
          <svg className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
            <defs>
              <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
          </svg>
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl mb-10 font-semibold text-gray-50 px-4">
            {i18n.t('toc.titleFirstPart')} <span className="text-purple-400">{i18n.t('toc.titleSecondPart')}</span>
          </h2>
          <div className="flex-none sm:flex">
            <div className="text-base sm:flex-1 px-4">
              <p className="text-gray-100 font-semibold">{i18n.t('toc.partOne')}</p>
              <ol className="text-gray-400 ml-4 mb-4">
                <li>{i18n.t('toc.helloWorld')}</li>
                <li>{i18n.t('toc.methodology')}</li>
                <li>{i18n.t('toc.whyHabits')}</li>
              </ol>
              <p className="text-gray-100 font-semibold">{i18n.t('toc.partTwo')}</p>
              <ol className="text-gray-400 ml-4 mb-4">
                <li>{i18n.t('toc.habit1')}</li>
                <li>{i18n.t('toc.habit2')}</li>
                <li>{i18n.t('toc.habit3')}</li>
              </ol>
              <p className="text-gray-100 font-semibold">{i18n.t('toc.partThree')}</p>
              <ol className="text-gray-400 ml-4 mb-4">
                <li>{i18n.t('toc.habit4')}</li>
                <li>{i18n.t('toc.habit5')}</li>
                <li>{i18n.t('toc.habit6')}</li>
              </ol>
              <p className="text-gray-100 font-semibold">{i18n.t('toc.partFour')}</p>
              <ol className="text-gray-400 ml-4 mb-4">
                <li>{i18n.t('toc.habit7')}</li>
                <li>{i18n.t('toc.habit8')}</li>
                <li>{i18n.t('toc.habit9')}</li>
              </ol>
              <p className="text-gray-100 font-semibold">{i18n.t('toc.partFive')}</p>
              <ol className="text-gray-400 ml-4 mb-4">
                <li>{i18n.t('toc.habit10')}</li>
                <li>{i18n.t('toc.habit11')}</li>
                <li>{i18n.t('toc.habit12')}</li>
              </ol>
              <p className="text-gray-100 font-semibold">{i18n.t('toc.partSix')}</p>
              <ol className="text-gray-400 ml-4 mb-4">
                <li>{i18n.t('toc.habit13')}</li>
                <li>{i18n.t('toc.habit14')}</li>
              </ol>
            </div>
            <div className="sm:flex-1 px-4">
              <img className="mt-16 rounded-md relative z-10" src={i18n.t('toc.image')} alt="Kindle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Toc;