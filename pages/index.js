import React from 'react';
import Index from '../components/Index';

class IndexEnglish extends React.Component {
  state = {
  	geo: {}
  };

  async componentDidMount() {
    const geoFetch = await fetch('/api/geo');
    const { geo } = await geoFetch.json();
    this.setState({ geo });
  }

  render() {
  	return <Index locale="en-US" geo={this.state.geo} />
  }
}

export default IndexEnglish;