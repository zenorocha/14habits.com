import React from 'react';
import Bonus from '../../../components/Bonus';

class BonusEightSpanish extends React.Component {
  render() {
    const convertKit = {
      form: '1508679',
      uid: '32f00b8460'
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