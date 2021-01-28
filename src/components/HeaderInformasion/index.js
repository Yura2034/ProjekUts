import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconProfil} from '../../assets';
import {Warnautama} from '../../utils/constant';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.NameUser}>
        <View style={styles.textWrapper}>
          <Text style={styles.Welcome}>Welcome</Text>
          <Text style={styles.username1}>Wulandari</Text>
        </View>
      </View>
      <View style={styles.ImgUser}>
        <IconProfil />
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NameUser: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginLeft: 4,
  },
  Welcome: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
  },
  username1: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
});
