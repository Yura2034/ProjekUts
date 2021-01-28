import React from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Input} from '../../components';
import ActionBottom from './ActionBottom';
import {book3} from '../../assets';

const Register = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={book3} style={styles.book} />
        </View>
        <View style={styles.textcover}>
          <Text style={styles.text1}>Novelis Indonesi</Text>
        </View>
        <View>
          <Text style={styles.text2}>Sign In</Text>
        </View>
        <View style={styles.inputView3}>
          <Input style={styles.inputText} placeholder="Username" />
        </View>
        <View style={styles.inputView}>
          <Input style={styles.inputText} placeholder="Email" />
        </View>
        <View style={styles.inputView2}>
          <Input style={styles.inputText} placeholder="Password" />
        </View>
        <View>
          <ActionBottom
            title="REGISTER"
            onPress={() => handleGoTo('MainApp')}
          />
        </View>
        {/* <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <View style={styles.button2}>
            <Text style={styles.textButton}>Sign In</Text>
          </View>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  book: {
    width: 409,
    height: 200,
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003f5c',
    marginVertical: 25,
    marginHorizontal: 10,
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
    marginVertical: 10,
  },
  textcover: {
    width: 409,
    height: 90,
    backgroundColor: '#cbc2c0',
  },
  inputView: {
    borderColor: '#cbc2c0',
    backgroundColor: '#dcd4d1',
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  inputView2: {
    borderColor: '#cbc2c0',
    backgroundColor: '#dcd4d1',
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  inputView3: {
    borderColor: '#cbc2c0',
    backgroundColor: '#dcd4d1',
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  inputText: {
    height: 25,
    color: 'black',
    fontSize: 20,
  },
  button1: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#cbc2c0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  button2: {
    backgroundColor: '#cbc2c0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textButton: {
    color: '#003f5c',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  textButton2: {
    color: '#003f5c',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

//   return (
//     <View style={styles.wrapper.page}>
//       <Text style={styles.text.desc}>
//         Mohon mengisi beberapa data untuk proses mendaftar
//       </Text>
//       <View style={styles.space(64)} />
//       <Input placeholder="Username" />
//       <View style={styles.space(33)} />
//       <Input placeholder="Email" />
//       <View style={styles.space(33)} />
//       <Input placeholder="Password" />

//     </View>
//   );
// };

// export default Register;

// const styles = {
//   wrapper: {
//     page: {padding: 20, backgroundColor: '#323336', flex: 1},
//   },
//   text: {
//     desc: {
//       fontSize: 14,
//       fontWeight: 'bold',
//       color: '#ffff',
//       marginTop: 16,
//       maxWidth: 200,
//     },
//   },
//   space: (value) => {
//     return {
//       height: value,
//     };
//   },
// };
