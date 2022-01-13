import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HocCounter from './HocCounter';

export class DecrementCounter extends Component {
  render() {
    // const {count}  = this.state;
    const {count, decrementCounter} = this.props;

    return (
      <>
        {/* <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Name Comes From HOC</Text>
          <Text>{this.props.name}</Text>
        </View> */}

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 160,
            height: 30,
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 18,
            marginTop: 5,
          }}
          onPress={decrementCounter}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 12,
              color: 'green',
            }}>
            {' '}
            Decrement {count} time{' '}
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default HocCounter(DecrementCounter);
