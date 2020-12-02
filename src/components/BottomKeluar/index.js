import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Warnautama} from '../../utils/constant';

const ButtomKeluar = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      fontSize: 18,
      backgroundColor: Warnautama,
      borderRadius: 20,
      paddingVertical: 12,
      paddingHorizontal: 18,
    },
  },
  text: {
    title: {
      fontSize: 18,
      color: '#ffff',
      fontFamily: 'poppins-Bold',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
};
export default ButtomKeluar;
