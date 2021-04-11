
import React, {useState} from 'react';
import {  Text, View, Button } from 'react-native';

function TV(props){

  const [isOff,setIsOff] = useState(true);


  <View>
    {"\n\n\n\n\n"}
    <Text>
      THis is {props.name} TV, and it is {isOff ? "OFF" : "Turned Me On"}!
    </Text>
    <Button 
       onPress={() => {
        setIsOff(false);



      }}
      disabled ={!isOff}
      title= {isOff ? "Turn me on" : "Thank you"}


  />

  </View>
  

}
export default function MultiTVs(){
  return(
  <View >
  
  <Text> Welcome to CIS 340</Text>
  <TV name = 'LG'/>
  <TV name = 'Sony'/>
  </View>
  )
  
  
  }
