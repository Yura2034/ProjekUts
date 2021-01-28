import React from 'react';
import {StyleSheet, Text, View, Image, _ScrollView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {book6} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TampilanPerpustakaan = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Navbaar}>
          <Text style={styles.text}>Perpustakaan</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.komik}>
            <Image source={book6} style={styles.Komik1} />
            <TouchableOpacity>
              <View>
                <Text style={styles.textkomik1}>Dunia Cecilia</Text>
                <Text style={styles.textkomik3}>CHAPTER 25</Text>
                <Text style={styles.textkomik2}>12/10/20</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.komik}>
            <Image source={book6} style={styles.Komik1} />
            <TouchableOpacity>
              <View>
                <Text style={styles.textkomik1}>Dunia Cecilia</Text>
                <Text style={styles.textkomik3}>CHAPTER 25</Text>
                <Text style={styles.textkomik2}>12/10/20</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.komik}>
            <Image source={book6} style={styles.Komik1} />
            <TouchableOpacity>
              <View>
                <Text style={styles.textkomik1}>Dunia Cecilia</Text>
                <Text style={styles.textkomik3}>CHAPTER 25</Text>
                <Text style={styles.textkomik2}>12/10/20</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.komik}>
            <Image source={book6} style={styles.Komik1} />
            <TouchableOpacity>
              <View>
                <Text style={styles.textkomik1}>Dunia Cecilia</Text>
                <Text style={styles.textkomik3}>CHAPTER 25</Text>
                <Text style={styles.textkomik2}>12/10/20</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.komik}>
            <Image source={book6} style={styles.Komik1} />
            <TouchableOpacity>
              <View>
                <Text style={styles.textkomik1}>Dunia Cecilia</Text>
                <Text style={styles.textkomik3}>CHAPTER 25</Text>
                <Text style={styles.textkomik2}>12/10/20</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.komik}>
            <Image source={book6} style={styles.Komik1} />
            <TouchableOpacity>
              <View>
                <Text style={styles.textkomik1}>Dunia Cecilia</Text>
                <Text style={styles.textkomik3}>CHAPTER 25</Text>
                <Text style={styles.textkomik2}>12/10/20</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TampilanPerpustakaan;

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
  komik: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    marginLeft: 12,
  },
  textkomik2: {
    fontSize: 15,
    marginTop: 'auto',
    maxWidth: 90,
    marginLeft: 12,
    textAlign: 'center',
  },
  textkomik3: {
    fontSize: 15,
    marginTop: 'auto',
    maxWidth: 150,
    marginLeft: 12,
  },
});
