import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ActionBottom from './ActionBottom';
import {ScrollView} from 'react-native-gesture-handler';
import {book2} from '../../assets';
import {Input} from '../../components';

const Login = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={book2} style={styles.book} />
        </View>
        <View style={styles.textcover}>
          <Text style={styles.text1}>Novelis Indonesi</Text>
        </View>
        <View>
          <Text style={styles.text2}>Login</Text>
        </View>
        <View style={styles.inputView}>
          <Input style={styles.inputText} placeholder="Email" />
        </View>
        <View style={styles.inputView2}>
          <Input
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View>
          <ActionBottom title="Login" onPress={() => handleGoTo('MainApp')} />
        </View>
        {/* <View style={styles.button1}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            // onPress={() => {
            //   props.navigation.navigate("Home");
            // }}
          >
            <View style={styles.button}>
              <Text style={styles.textButton2}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            // onPress={() => {
            //   props.navigation.navigate("sign");
            // }}
          >
            <View style={styles.button2}>
              <Text style={styles.textButton}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  book: {
    width: 409,
    height: 250,
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
    marginVertical: 20,
  },
  textcover: {
    width: 409,
    height: 100,
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
  inputText: {
    height: 25,
    color: 'black',
    fontSize: 20,
  },
});

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
//       maxWidth: 300,
//     },
//   },
//   space: (value) => {
//     return {
//       height: value,
//     };
//   },
// };
