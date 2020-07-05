import React from 'react';
import Bonus from '../../components/Bonus';

class BonusEightEnglish extends React.Component {
  render() {
    const convertKit = {
      form: '1508676',
      uid: '66312cacee'
    };

    return <Bonus
      habit="8"
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

export default BonusEightEnglish;