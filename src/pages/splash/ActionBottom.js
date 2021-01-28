import React from 'react';
import {Text, View} from 'react-native';
import {Buttom} from '../../components';

const ActionBottom = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.Component}>
      <Text style={styles.text.Desc}>{desc}</Text>
      <Buttom title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    Component: {
      marginBottom: 43,
      maxWidth: 225,
    },
  },
  text: {
    Desc: {
      fontSize: 14,
      textAlign: 'center',
      color: '#af7ea4',
      paddingHorizontal: '5%',
      marginBottom: 6,
    },
  },
};
export default ActionBottom;
