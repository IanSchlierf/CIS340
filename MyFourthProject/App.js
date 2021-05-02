import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


const dog = {
  uri: 'https://www.bing.com/images/search?view=detailV2&ccid=%2fwL9a4P4&id=336F9C2909D8CE272FA58ADD8096C1B6F4850CB5&thid=OIP._wL9a4P4nvCOR1IhCckaIwHaLH&mediaurl=https%3a%2f%2fwww.gooddoggyphotography.com%2fwp-content%2fuploads%2f2019%2f01%2fgood-doggy-pet-photography-new-jersey-home-01.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fRff02fd6b83f89ef08e47522109c91a23%3frik%3dtQyF9LbBloDdig%26pid%3dImgRaw&exph=1500&expw=1000&q=doggy&simid=608050554681850421&ck=22AC93AD5A846EBCA274CA023AD04594&selectedIndex=3&FORM=IRPRST',
  width: 64,
  height: 64
};

export default  MyScrollViewApp = () => (
  


  

    <ScrollView style = {{padding: 40}}>
      <Text style = {{fontSize:80}}> Try to scroll down</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize:80}}> Try to scroll down more</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style = {{fontSize:80}}> Try to scroll down more</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />





    </ScrollView>
   
  );

