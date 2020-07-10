import React from 'react';
import i18n from '../lib/i18n';

class Footer extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-book-purple text-purple-200 py-12">
      <p className="text-xl text-center">{i18n.t('footer.madeWith')} <span className="text-3xl text-pink-400 love">♥</span> {i18n.t('footer.by')} <a className="text-book-accent border-b-2 border-transparent hover:border-book-accent transition ease-in-out duration-300" href="https://zenorocha.com" target="blank">Zeno Rocha</a></p>
    </div>
  }
}

export default Footer;