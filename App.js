import * as React from 'react';
import {Text, Image, View} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
      }}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
      }}
      >Hello World
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontweight: 300,
          margin: 20,
          lineHeight: 25,
        }}>
      Hello World from Group 1{'\n'}Member: 
      <Text style={{fontWeight: "bold"}}> Unda Zurevska</Text>  
      {'\n'}This is my Unda Zurevska first React Native application!
      </Text>
     <Image source={require('./assets/cat.png')} />
    </View>
  )
}
export default HelloWorldApp;


