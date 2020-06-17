import React from 'react';
import Index from '../components/Index';
import Banner from '../components/Banner';

export async function getServerSideProps() {
  let geo = {};

  try {
  	const path = process.env.NODE_ENV === 'production' ? 'https://14habits.com' : 'http://localhost:3000';
	  const geoFetch = await fetch(`${path}/api/geo`);
	  geo = await geoFetch.json();
  }
  catch(e) {
  	console.log(e);
  }
  finally {
  	return { props: geo };
  }
}

class IndexEnglish extends React.Component {
  render() {
  	return <div>
    	<Banner geo={this.props.geo} />
    	<Index locale="en-US" />
  	</div>
  }
}

export default IndexEnglish;