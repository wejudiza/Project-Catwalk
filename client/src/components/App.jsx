import React from 'react';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import Reviews from './reviews/Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div id="products">
          <Overview />
        </div>
        <div id="relatedItems">
          <RelatedItems />
        </div>
        <div>
          <Reviews />
        </div>
      </div>
    );
  }
}

export default App;
