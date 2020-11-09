import React from 'react';
import Bonus from '../../../components/Bonus';

class BonusTwoSpanish extends React.Component {
  render() {
    const convertKit = {
      form: '1803477',
      uid: 'ee77ff18b7'
    };

    return <Bonus
      habit="2"
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

export default BonusTwoSpanish;