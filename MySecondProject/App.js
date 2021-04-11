import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {

  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n"}
        Ian Schlierf is cool!{"\n"}
        </Text>
        <TextInput 
         style={{
           height: 40,
           borderColor: "Green",
           BorderWidth: 1
         }}
         />
      </View>
  
  );
}


export default function MultiComp(){

return (
  <View style = {{
    flex: 1, 
    justifyContent: 'Center',
    alignItems: 'Center'
  }}
  >
    <Text> {"\n\n\n\n\n\n"} Welcome to my class </Text>
    <MyApp/>
    <MyApp/>
    <MyApp/>
    <MyApp/>
  </View>


)




}

