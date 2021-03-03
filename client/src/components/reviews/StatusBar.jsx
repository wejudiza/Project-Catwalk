import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProgressBar
        completed={this.props.completed}
        isLabelVisible={false}
        bgcolor='black'
        baseBgColor='grey'
        borderRadius='0'
        width='20%'
        height='10px'
      />
    )
  }
}

export default Status;