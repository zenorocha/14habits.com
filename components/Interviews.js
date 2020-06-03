import React from 'react';
import i18n from '../lib/i18n';

class Interviews extends React.Component {
  renderInterviewItem(interviewee) {
    return <div className="flex-none sm:flex mb-12">
      <img className="w-40 h-40 rounded-full mr-8" src={`/static/img/avatar-${interviewee}.jpeg`} alt={i18n.t(`interviews.${interviewee}.name`)} />
      <div className="text-sm">
        <p className="text-3xl text-gray-900">{i18n.t(`interviews.${interviewee}.name`)}</p>
        <p className="text-xl text-indigo-700 hover:text-indigo-500">
          <a href={i18n.t(`interviews.${interviewee}.companyUrl`)} target="_blank">{i18n.t(`interviews.${interviewee}.company`)}</a>
        </p>
        <p className="text-base text-gray-600">{i18n.t(`interviews.${interviewee}.bio`)}</p>
      </div>
    </div>
  }

  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          {i18n.t('interviews.title')}
        </h2>
        <div className="mt-6 pt-10">
          {this.renderInterviewItem('lais')}
          {this.renderInterviewItem('tadashi')}
          {this.renderInterviewItem('manu')}
        </div>
      </div>
    </div>
  }
}

export default Interviews;