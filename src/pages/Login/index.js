import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';
import {IconleftArrow, IconLogin} from '../../assets';
import ActionBottom from './ActionBottom';

const Login = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <IconleftArrow width={40} height={40} />
      <IconLogin width={141} height={97} marginTop={8} />
      <Text style={styles.text.desc}>
        Silahkan mengisi data untuk masuk ke aplikasi GO-Green
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Username" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
      <ActionBottom title="Login" onPress={() => handleGoTo('MainApp')} />
    </View>
  );
};

export default Login;

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
      maxWidth: 300,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};
