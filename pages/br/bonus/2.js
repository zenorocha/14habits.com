import React from 'react';
import Bonus from '../../../components/Bonus';

class BonusTwoPortuguese extends React.Component {
  render() {
    const convertKit = {
      form: '1508570',
      uid: '36ae5250a0'
    };

    return <Bonus
      habit="2"
      convertKit={convertKit}
      query={this.props.query}
      locale="pt-BR"
    />
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query }
  }
}

export default BonusTwoPortuguese;