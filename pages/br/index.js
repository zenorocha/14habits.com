import React from 'react';
import Index from '../../components/Index';

class IndexPortuguese extends React.Component {
  render() {
    return <Index locale="pt-BR" query={this.props.query} />
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query }
  }
}

export default IndexPortuguese;