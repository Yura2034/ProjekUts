import React from 'react';
import {Text, View} from 'react-native';
import {ButtomRegister} from '../../components';
import {WarnaDasar} from '../../utils/constant';

const ActionBottom = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.Component}>
      <Text style={styles.text.Desc}>{desc}</Text>
      <ButtomRegister title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    Component: {
      marginBottom: 30,
    },
  },
  text: {
    Desc: {
      fontSize: 12,
      textAlign: 'center',
      color: WarnaDasar,
      marginBottom: 10,
    },
  },
};
export default ActionBottom;
