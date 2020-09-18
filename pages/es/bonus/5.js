import React from 'react';
import Bonus from '../../../components/Bonus';

class BonusFiveSpanish extends React.Component {
  render() {
    const convertKit = {
      form: '1508416',
      uid: 'c8d5589dec'
    };

    return <Bonus
      habit="5"
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

export default BonusFiveSpanish;