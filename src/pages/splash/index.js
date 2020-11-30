import React from 'react';
import {Text, View, Image} from 'react-native';
import {welcomeauth} from '../../assets';
import ActionBottom from './ActionBottom';

const Splash = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeauth} style={styles.wrapper.illustrasion} />
      <Text style={styles.text.welcome}>Selamat Datang di G0-Green</Text>
      <ActionBottom
        desc="  Silahkan masuk, jika anda sudah memiliki akun"
        title="LOGIN"
        onPress={() => handleGoTo('Login')}
      />
      <ActionBottom
        desc="atau silahkan daftar jika anda belum memiliki akun"
        title="SIGN IN"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

export default Splash;

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#323336',
    },
    illustrasion: {
      width: 152,
      height: 132,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffff',
      marginBottom: 76,
    },
  },
};
