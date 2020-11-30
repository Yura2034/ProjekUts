import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderInformation, Saldo} from '../../components';
const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperHeader}>
        <HeaderInformation />
      </View>
      <View style={styles.saldo}>
        <Saldo />
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F5C8C9',
    flex: 1,
  },
  wrapperHeader: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
});
