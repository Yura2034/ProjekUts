import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';
import {IconleftArrow, IconRegister} from '../../assets';
import ActionBottom from './ActionBottom';

const Register = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <IconleftArrow width={40} height={40} />
      <IconRegister width={141} height={97} marginTop={8} />
      <Text style={styles.text.desc}>
        Mohon mengisi beberapa data untuk proses mendaftar
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Username" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
      <ActionBottom title="REGISTER" onPress={() => handleGoTo('MainApp')} />
    </View>
  );
};

export default Register;

const styles = {
  wrapper: {
    page: {padding: 20, backgroundColor: '#323336', flex: 1},
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#ffff',
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};
