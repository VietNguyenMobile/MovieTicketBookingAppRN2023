import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native';

const NoConnectionScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/image/no-internet.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.text}>
        <Text style={styles.header}>Connection Lost</Text>
        <Text style={styles.content}>
          Looks like you have lost connection with Wifi or other Internet
          connection.
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '95%',
    height: '50%',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  header: {
    fontSize: 30,
    marginBottom: 15,
    color: 'gray',
  },
  content: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
});
export default NoConnectionScreen;
