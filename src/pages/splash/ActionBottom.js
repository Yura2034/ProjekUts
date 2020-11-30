import React from 'react';
import {Text, View} from 'react-native';
import {Buttom} from '../../components';
import {WarnaDasar} from '../../utils/constant';

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
      fontSize: 12,
      textAlign: 'center',
      color: WarnaDasar,
      paddingHorizontal: '5%',
      marginBottom: 6,
    },
  },
};
export default ActionBottom;
