import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, Image } from 'react-native';

export default function MyDog() {
  let pic = {
    uri: 'https://www.bing.com/images/search?view=detailV2&ccid=rxfDXpkh&id=4C8F11FF12426F626C95EBE0F618E9C2AF88CAFC&thid=OIP.rxfDXpkhzOPoaTdqYiqOTwHaE8&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fRaf17c35e9921cce3e869376a622a8e4f%3frik%3d%252fMqIr8LpGPbg6w%26riu%3dhttp%253a%252f%252fdogdayzgrooming.com%252fwp-content%252fgallery%252fhome-gallery%252fLaughing-Golden-1140x760.jpg%26ehk%3dvsfwlaUWGQ3RcV6v3fsa4eT6xOaWyRNaOv0pck44O04%253d%26risl%3d%26pid%3dImgRaw&exph=760&expw=1140&q=dog&simid=607988178873116428&ck=7E2090E816CF8246E8607AD30394AED4&selectedIndex=9&FORM=IRPRST'
  }

  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    
    
    }}>
      <Image source = {pic}
      style = {{width: 200 , height: 200}}
      />

      <Text > Hello, THis is my dog</Text>
  
    </View>
  );
}

