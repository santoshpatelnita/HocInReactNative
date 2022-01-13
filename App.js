import React from 'react';
import {View, Text} from 'react-native';
import IncrementCounter from './Src/IncrementCounter';
import DecrementCounter from './Src/DecrementCounter';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: '700', fontSize: 15}}>
        Hello HOC In React Native
      </Text>
      <View style={{marginTop: 30}}>
        <IncrementCounter />
      </View>
      <Text style={{marginTop: 20, fontSize: 16, fontWeight: '700'}}>2nd Component HOC</Text>
      <View style={{marginTop: 30}}>
        <DecrementCounter />
      </View>
    </View> 
  );
};

export default App;
