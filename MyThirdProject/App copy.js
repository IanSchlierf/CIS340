import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>I am {}</Text>
  
    </View>
  );
}

export default function MultiComp(){
return(
<View style = {{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'


}}>
<Text> Welcome to CIS 340</Text>
<Student name = 'Ian Schlierf'/>
<Student name = 'John Clark'/>
<Student name = 'Test Mytest'/>
<Student name = '##########'/>
</View>
)


}