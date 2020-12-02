import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';
import {IconleftArrow, IconProfil, IconRegister, IconUser} from '../../assets';
import ActionBottom from './actionBottom';

const Profile = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <IconProfil width={150} height={150} marginTop={40} marginLeft={100} />
      <View style={styles.text.desc} />
      <Text style={styles.text.desc}>Username</Text>
      <Text style={styles.text.isi}>Wulan_3084</Text>
      <View style={{borderBottomColor: '#ffff', borderBottomWidth: 1}} />
      <View />
      <Text style={styles.text.desc}>Alamat Email</Text>
      <Text style={styles.text.isi}>KomangWulandari236@gmail.com</Text>
      <View style={{borderBottomColor: '#ffff', borderBottomWidth: 1}} />
      <View />
      <Text style={styles.text.desc}>Passwort</Text>
      <Text style={styles.text.isi}>********</Text>
      <View style={{borderBottomColor: '#ffff', borderBottomWidth: 1}} />
      <ActionBottom title="Keluar" onPress={() => handleGoTo('Splash')} />
    </View>
  );
};

export default Profile;

const styles = {
  wrapper: {
    page: {Padding: 20, backgroundColor: '#F5E0E0'},
  },
  text: {
    desc: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffff',
      marginTop: 16,
      maxWidth: 200,
      padding: 12,
    },
    isi: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#B0A5A5',
      padding: 10,
    },
  },
};
