import React from 'react';
import Index from '../components/Index';

class IndexEnglish extends React.Component {
  render() {
    return <Index locale="en-US" query={this.props.query} />
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query }
  }
}

export default IndexEnglish;