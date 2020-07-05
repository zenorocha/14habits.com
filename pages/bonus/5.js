import React from 'react';
import Bonus from '../../components/Bonus';

class BonusFiveEnglish extends React.Component {
  render() {
    const convertKit = {
      form: '1508258',
      uid: 'be7e507e89'
    };

    return <Bonus
      habit="5"
      convertKit={convertKit}
      query={this.props.query}
      locale="en-US"
    />
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query }
  }
}

export default BonusFiveEnglish;