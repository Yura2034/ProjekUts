import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {WarnaGaris, Warnautama} from '../../../utils/constant';

const Input = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Warnautama}
    />
  );
};
export default Input;
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: WarnaGaris,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#ffff',
  },
});
