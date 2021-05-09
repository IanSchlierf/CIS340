
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

conts [count, setCount] = useState(0);

const onTap = () => setCount(count => count + 1)

  return (
    <View style={styles.container}>
     <View style={styles.counterText}>
       <Text> Tap Counter: {count} </Text>
     </View>
     <TouchableOpacity
       style={styles.button}
       onPress={onTap}

    >
      <Text>Touch Me</Text>
     </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    alignItems: "center",
    backgroundColor: 'blue',
    padding: 10
  },

  counterText: {

    alignItems: 'center',
    padding: 10
  }
});
