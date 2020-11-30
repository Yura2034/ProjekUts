import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Saldo}>
        <View style={styles.textWrapper}>
          <Text style={styles.Saldo2}>Saldo</Text>
          <Text style={styles.Jumlah}>Rp.100.000</Text>
        </View>
        <View style={styles.point}>
          <Text style={styles.point2}>Point</Text>
          <Text style={styles.JumlahPoin}>300 P</Text>
        </View>
      </View>
    </View>
  );
};

export default Saldo;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 30,
    marginHorizontal: 30,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  Saldo: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginLeft: 4,
  },
  Saldo2: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  Jumlah: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  point: {
    marginLeft: 100,
  },
  point2: {
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  JumlahPoin: {
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
});
