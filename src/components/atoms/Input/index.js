import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={'#003f5c'}
    />
  );
};
export default Input;
const styles = StyleSheet.create({
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 20,
    color: 'black',
  },
});
