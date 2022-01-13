import React, {Component} from 'react';
import {Text, View} from 'react-native';

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState(prevState => {
        return {count: prevState.count + 1};
      });
    };

    decrementCounter = () => {
      this.setState(preState => {
        return {count: preState.count - 1};
      });
    };

    render() {
      return (
        <OriginalComponent
        count={this.state.count}
          incrementCount={this.incrementCount}
          decrementCounter={this.decrementCounter}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
