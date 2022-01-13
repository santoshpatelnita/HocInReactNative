import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import UpdatedComponent from './withCounter';

export class ClickCounter extends Component {
  

  render() {
    const {count, incrementCount} = this.props;
    console.log("=============Click Increment",this.props)
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
            width: 170,
            height: 30,
            borderColor: 'red',
            borderRadius: 18,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}
          onPress={incrementCount}
          >
          <Text style={{color: 'red', fontWeight: '500', fontSize: 12}}>
            Clicked {count} Times
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

export default UpdatedComponent(ClickCounter);
