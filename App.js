import React from 'react';
import { Text, View , Image} from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>{'Hello World from Group 001 member: Diana Svitka! \n\n This is my Diana Svitka first React Native application!'}</Text>
      <Image source={require('./assets/logo1.png')} />
    </View>
    
  )
}
export default HelloWorldApp;
