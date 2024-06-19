import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react';

const App = () => {
  const [input,setInput]=useState('');
  const [result,setResult]=useState('');

  const press=(value)=>{
    setInput(input+value);
  };

  const clear=()=>{
    setInput('');
    setResult('');
  };

  const equal=()=>{
    try{
      setResult(eval(input).toString());
    } catch(error){
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} editable={false} value={input} placeholder="Enter Here" />
      <View style={styles.keyboard}>

      <TouchableOpacity style={styles.button} onPress={() => press('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => press('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => press('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => press('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => press('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        </View>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  input: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: 40,
    margin: 50,
    borderRadius: 5,
    width:500,
    textAlign:'right',
    paddingRight: 10,
    width: '95%',
    height: 100,
  },

  keyboard:{
    flexDirection:'row',
    letterSpacing:20
  },
  
  

})
