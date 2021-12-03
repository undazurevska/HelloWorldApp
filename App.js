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
      <Text
        style={{
          fontSize: 20,
        }}>
      Hello World from Group 1 member: Unda Zurevska!  {'\n'}This is my Unda Zurevska first React Native application!
      </Text>
     <Image source={require('./assets/cat.png')} />
    </View>
  )
}
export default HelloWorldApp;


