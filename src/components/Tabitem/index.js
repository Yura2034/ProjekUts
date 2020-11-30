import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {warnasekunder, Warnautama} from '../../utils/constant';
import {
  IconHome,
  IconHomeAktif,
  IconCalender,
  IconCalenderAktif,
  IconUser,
  IconUserAktif,
} from '../../assets';
import {Directions} from 'react-native-gesture-handler';
const TabItem = ({label, isFocused, onLongPress, onPress}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'Jadwal') {
      return isFocused ? <IconCalenderAktif /> : <IconCalender />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconUserAktif /> : <IconUser />;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocuse : styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: 5,
  },
  containerFocuse: {
    alignContent: 'center',
    padding: 5,
    backgroundColor: warnasekunder,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: Warnautama,
    fontSize: 18,
    marginLeft: 8,
    fontFamily: 'poppins-Bold',
  },
});
