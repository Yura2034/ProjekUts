import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TampilanPerpustakaan} from '../../components';

const Pustaka = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperHeader}>
        <TampilanPerpustakaan />
      </View>
    </View>
  );
};
export default Pustaka;
const styles = StyleSheet.create({
  // page: {
  //   flex: 1,
  // },
  // wrapperHeader: {
  //   paddingHorizontal: 30,
  //   paddingTop: 30,
  // },
});
