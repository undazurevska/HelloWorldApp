import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const HelloWorldApp = () => {
  return (
    <View
      style={styles.container}>
      <Text style={styles.paragraphN}>Hello World {'\n\n\n'} 
       Hello World from Group 01 {'\n'}
       Member: <Text style={styles.paragraphB}> Inita Legzdina </Text> {'\n\n'}
      This is my Inita Legzdina first React Native application!
      </Text>
      <Image source={require('./assets/logo.png')}style={styles.logo} />
    </View>
  )
}
export default HelloWorldApp;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraphN: {
    margin: 22,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  paragraphB: {
    margin: 22,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',    
  },
  logo: {
    height: 120,
    width: 120,
  }
});
