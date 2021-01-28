import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {book} from '../../assets';
import ActionBottom from './ActionBottom';

const Splash = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <View>
        <Image source={book} style={styles.ilustrasion} />
      </View>
      <Text style={styles.text}>Selamat Datang di Novel Indonesia</Text>
      <View style={styles.wrapper}>
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
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  ilustrasion: {
    width: 409,
    height: 250,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003f5c',
    marginVertical: 25,
    marginHorizontal: 10,
    textAlign: 'center',
  },

  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#af7ea4',
    marginTop: 20,
  },
});
