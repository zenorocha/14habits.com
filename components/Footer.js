import React from 'react';
import i18n from '../lib/i18n';

class Footer extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-indigo-700 text-indigo-200 py-12">
      <p className="text-xl text-center">{i18n.t('footer.madeWith')} <span className="text-3xl text-pink-400 love">♥</span> {i18n.t('footer.by')} <a className="text-white" href="https://zenorocha.com" target="blank">Zeno Rocha</a></p>
    </div>
  }
}

export default Footer;