
import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style = {{flex: 1, flexDIrection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'}}>
      <View style = {{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style = {{width: 50, height: 50,backgroundColor: 'yellow'}}/>
      <View style = {{width: 50, height: 50,backgroundColor: 'green'}}/>
      






    </View>
   
  );
}

