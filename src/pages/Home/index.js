import React from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import {book4} from '../../assets';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Navbaar}>
          <Text style={styles.text}>Halaman Utama</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Search"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.komik}>
          <Image source={book4} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>Serendipity</Text>
              <Text style={styles.textkomik3}>Pengarang : Erisca Febriani</Text>
              <Text style={styles.textkomik2}>
                Serendipity diawali dengan Rani yang diputusin Arkan karena
                suatu hal. Sejak saat itu, Arkan berlaku sadis banget ke Rani.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.komik}>
          <Image source={book4} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>Serendipity</Text>
              <Text style={styles.textkomik3}>Pengarang : Erisca Febriani</Text>
              <Text style={styles.textkomik2}>
                Serendipity diawali dengan Rani yang diputusin Arkan karena
                suatu hal. Sejak saat itu, Arkan berlaku sadis banget ke Rani.
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.komik}>
          <Image source={book4} style={styles.Komik1} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
            <View>
              <Text style={styles.textkomik1}>Serendipity</Text>
              <Text style={styles.textkomik3}>Pengarang : Erisca Febriani</Text>
              <Text style={styles.textkomik2}>
                Serendipity diawali dengan Rani yang diputusin Arkan karena
                suatu hal. Sejak saat itu, Arkan berlaku sadis banget ke Rani.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.komik}>
          <Image source={book4} style={styles.Komik1} />
          <TouchableOpacity>
            <View>
              <Text style={styles.textkomik1}>Serendipity</Text>
              <Text style={styles.textkomik3}>Pengarang : Erisca Febriani</Text>
              <Text style={styles.textkomik2}>
                Serendipity diawali dengan Rani yang diputusin Arkan karena
                suatu hal. Sejak saat itu, Arkan berlaku sadis banget ke Rani.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
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
    marginTop: 10,
    width: 111,
    height: 149,
    marginLeft: 10,
  },
  textkomik1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    maxWidth: 400,
    marginLeft: 10,
  },
  textkomik2: {
    fontSize: 15,
    marginTop: 5,
    maxWidth: 260,
    marginLeft: 10,
  },
  textkomik3: {
    fontSize: 16,
    marginTop: 5,
    maxWidth: 400,
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
});

// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {HeaderInformation, Saldo} from '../../components';
// const Home = () => {
//   return (
//     <View style={styles.page}>
//       <View style={styles.wrapperHeader}>
//         <HeaderInformation />
//       </View>
//       <View style={styles.saldo}>
//         <Saldo />
//       </View>
//     </View>
//   );
// };
// export default Home;
// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: '#F5C8C9',
//     flex: 1,
//   },
//   wrapperHeader: {
//     paddingHorizontal: 30,
//     paddingTop: 30,
//   },
// });
