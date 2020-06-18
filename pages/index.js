import React from 'react';
import Index from '../components/Index';
import Banner from '../components/Banner';

class IndexEnglish extends React.Component {
  render() {
  	return <div>
    	<Banner />
    	<Index locale="en-US" />
  	</div>
  }
}

export default IndexEnglish;