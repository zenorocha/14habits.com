import React from 'react';
import Index from '../../components/Index';

class IndexSpanish extends React.Component {
  render() {
    return <Index locale="es" query={this.props.query} />
  }
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: { query }
  }
}

export default IndexSpanish;