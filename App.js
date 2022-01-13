import React from 'react';
import {View, Text} from 'react-native';
import ourHoc from './Src/HocExample';
import ClickCounter from './Src/ClickCounter';
import HoverCounter from './Src/HoverCounter';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: '700', fontSize: 15}}>
        Hello HOC In React Native
      </Text>
      <View style={{marginTop: 30}}>
        <ClickCounter />
      </View>
      <Text style={{marginTop: 20, fontSize: 16, fontWeight: '700'}}>2nd Component HOC</Text>
      <View style={{marginTop: 30}}>
        <HoverCounter />
      </View>
    </View>
  );
};

export default App;
