
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow}>Just yellow Text!</Text>
      <Text style = {styles.LargGreen}> This is Big Green</Text>
      <Text style = {[styles.yellow, styles.LargGreen]}> Yellow Text, then Big green text</Text>
      <Text style = {[styles.LargGreen, styles.Yellow]}> Big Green Text, then yellow text</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:60,
  },

  LargGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },
  yellow: {
    color: 'yellow',
    fontSize: 10,

  }
});
