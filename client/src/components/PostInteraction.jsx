import React from 'react';
import axios from 'axios';

const postInteraction = (Component) => {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {

      }
      this.postToApi = this.postToApi.bind(this);
    }
    postToApi(e, name) {
      axios.post('/api/interactions', {
        element: e.target.outerHTML,
        widget: name,
        time: new Date().toString() + ' FROM WEJUDIZA',
      })
      .then(() => {
        console.log('User should not be able to see this, but we would like to keep it for our benefits')
      })
      .catch((err) => {
        console.log(err);
      });
    }

    render() {
      return (
        <Component {...this.props} postToApi={this.postToApi}/>
      )
    }
  }
}

export default postInteraction;