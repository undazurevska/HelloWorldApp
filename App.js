import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Hello, World from Group 01{'\n\n'}Member:
    <Text style={{fontWeight: "bold"}}> Paula Anete Urza</Text> 
    {'\n\n'}This is my, Paula Anete Urza, first React Native application! </Text>
    <Image style = {styles.logo} source={require('./assets/donut.png')}/>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  logo: {
    height: 210,
    width: 210,
}
});