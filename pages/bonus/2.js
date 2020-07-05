import React from 'react';
import Bonus from '../../components/Bonus';

class BonusTwoEnglish extends React.Component {
  render() {
    const convertKit = {
      form: '1508567',
      uid: 'effeef0348'
    };

    return <Bonus
      habit="2"
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

export default BonusTwoEnglish;