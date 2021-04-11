import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {

  function getFullName(fName,mName,lName){
    return fName + " " + mName + " " + lName
  }
  const pet = "Dog";
  return (
   
      <Text>
        {"\n\n\n\n\n\n\n"}
        Ian Schlierf is cool!{"\n"}
        My full name is {getFullName("Ian","Michael","Schlierf")}{"\n"}
        I have a {pet}!
        </Text>
       
  
  );
}

