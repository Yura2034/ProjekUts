import React from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import {book4, book7, ikon} from '../../assets';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import ActionBottom from './actionBottom';

const Profile = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={{backgroundColor: '#FFFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Image source={ikon} style={styles.ikon} />
          <View style={styles.text3}>
            <Text style={styles.textuser1}>@Kuhakku27_</Text>
            <Text style={styles.textuser2}>12/07/20</Text>
            <Text style={styles.textuser2}>Status: Member/Admin</Text>
          </View>
        </View>
        <View style={styles.Navbaar}>
          <Text style={styles.text1}>Daftar Bacaan</Text>
        </View>
        <View style={styles.komik}>
          <Image source={book7} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>CECILIA AND THE ANGEL</Text>
              <Text style={styles.textkomik3}>Pengarang : Jotein Gaarder</Text>
              <Text style={styles.textkomik2}>
                “Orang bilang, kita akan ke surga setelah mati. Benarkah?”
                Malaikat Ariel mendesah, “Kalian semua sekarang sudah berada di
                surga. Sekarang, di sini. Jadi, sebaiknya kalian berhenti
                bertengkar dan berkelahi. Sangat tidak sopan berkelahi di
                hadapan Tuhan.”
              </Text>
              <Text style={styles.textkomik4}>Dibaca</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.komik}>
          <Image source={book7} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>CECILIA AND THE ANGEL</Text>
              <Text style={styles.textkomik3}>Pengarang : Jotein Gaarder</Text>
              <Text style={styles.textkomik2}>
                “Orang bilang, kita akan ke surga setelah mati. Benarkah?”
                Malaikat Ariel mendesah, “Kalian semua sekarang sudah berada di
                surga. Sekarang, di sini. Jadi, sebaiknya kalian berhenti
                bertengkar dan berkelahi. Sangat tidak sopan berkelahi di
                hadapan Tuhan.”
              </Text>
              <Text style={styles.textkomik4}>Dibaca</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.komik}>
          <Image source={book7} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>CECILIA AND THE ANGEL</Text>
              <Text style={styles.textkomik3}>Pengarang : Jotein Gaarder</Text>
              <Text style={styles.textkomik2}>
                “Orang bilang, kita akan ke surga setelah mati. Benarkah?”
                Malaikat Ariel mendesah, “Kalian semua sekarang sudah berada di
                surga. Sekarang, di sini. Jadi, sebaiknya kalian berhenti
                bertengkar dan berkelahi. Sangat tidak sopan berkelahi di
                hadapan Tuhan.”
              </Text>
              <Text style={styles.textkomik4}>Dibaca</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.komik}>
          <Image source={book7} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>CECILIA AND THE ANGEL</Text>
              <Text style={styles.textkomik3}>Pengarang : Jotein Gaarder</Text>
              <Text style={styles.textkomik2}>
                “Orang bilang, kita akan ke surga setelah mati. Benarkah?”
                Malaikat Ariel mendesah, “Kalian semua sekarang sudah berada di
                surga. Sekarang, di sini. Jadi, sebaiknya kalian berhenti
                bertengkar dan berkelahi. Sangat tidak sopan berkelahi di
                hadapan Tuhan.”
              </Text>
              <Text style={styles.textkomik4}>Dibaca</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ActionBottom title="Keluar" onPress={() => handleGoTo('Splash')} />
      </ScrollView>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  Navbaar: {
    width: 409,
    backgroundColor: '#dcd4d1',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  Navbaar: {
    width: 409,
    backgroundColor: '#dcd4d1',
  },
  inputView: {
    borderColor: '#cbc2c0',
    backgroundColor: '#dcd4d1',
    borderRadius: 30,
    marginTop: 29,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 30,
    color: 'black',
  },
  inputText: {
    fontSize: 20,
  },
  text2: {
    fontSize: 20,
    color: '#c7c7c7',
    paddingVertical: 30,
    alignItems: 'center',
  },
  komik: {
    flexDirection: 'row',
    marginTop: 20,
  },
  Komik1: {
    marginTop: 20,
    width: 120,
    height: 200,
    marginLeft: 10,
  },
  textkomik1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 13,
    maxWidth: 400,
    marginLeft: 10,
  },
  textkomik2: {
    fontSize: 15,
    marginTop: 'auto',
    maxWidth: 270,
    marginLeft: 10,
  },
  textkomik3: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    maxWidth: 400,
    marginLeft: 10,
  },
  textkomik4: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    maxWidth: 260,
    marginLeft: 10,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  button2: {
    flexDirection: 'row',
  },
  ikon: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#dcd4d1',
    borderRadius: 100,
  },
  text3: {
    marginHorizontal: 10,
    marginVertical: 30,
  },
  textuser1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textuser2: {
    fontSize: 15,
    marginTop: 10,
  },
});
