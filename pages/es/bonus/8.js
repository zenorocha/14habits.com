import React from 'react';
import Bonus from '../../../components/Bonus';

class BonusEightSpanish extends React.Component {
  render() {
    const convertKit = {
      form: '1803487',
      uid: '103ae9dca0'
    };

    return <Bonus
      habit="8"
      convertKit={convertKit}
      query={this.props.query}
      locale="es-ES"
    />
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query }
  }
}

export default BonusEightSpanish;