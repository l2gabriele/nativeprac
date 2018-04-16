import React from 'react';
import { 
    StyleSheet, Text, View, Image, Animated, Easing, Button, TouchableWithoutFeedback 
  } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.RotateValueHolder = new Animated.Value(0);
    this.state = {
      alwaysBe: "You Should",
      isShould: true,
      isRotate: true,
      spinSpeed: 1,
      image: './img/batsym.png'
    }
  }

StartImageRotateFunction() {
    this.RotateValueHolder.setValue(0);
  Animated.timing(
    this.RotateValueHolder,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }
  ).start(() => this.StartImageRotateFunction())
}

spinner(e) {
    console.log("I'm Batman");
  if(this.state.spinSpeed === 1) {
    this.StartImageRotateFunction();
    this.setState({
      spinSpeed: 1.1,
      isRotate: true,
    })
   } 
  else {
    this.setState({
      spinSpeed: 0,
      isRotate: false,
    })
  }
} // end spinner(e)

clickText(e) {
    console.log("Always");
  if (this.state.isShould) {
    this.setState({
      alwaysBe: "Always",
      isShould: false,
    })
  } else {
    this.setState({
      alwaysBe: "You Should",
      isShould: true,
    })
  }
} //end clickText(e)

  render() {
    const rotateData = this.RotateValueHolder.interpolate({
      inputRange: [0,1],
      outputRange: ["0 deg", "360 deg"]
    })

    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>Always be Yourself..</Text>
          <TouchableWithoutFeedback onPress={(e) => this.spinner(e)}>
            <Animated.Image
              style={{ transform: [{ rotate: rotateData }],
              width: 400, height: 400 }}
              source={require('./img/batsym.png')}
            />
          </TouchableWithoutFeedback>
        <Text style={styles.baseText}>Unless You can be</Text>
        <Text style={styles.baseText}>Batman, then</Text>
        <Text onPress={(e) => this.clickText(e)}
            style={styles.alwaysText}>{this.state.alwaysBe}
        </Text>
        <Text style={styles.baseText}>be Batman!</Text>
      </View>
    ); //end return
  } //end render

} //end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '900',
    fontSize: 35,
  },
   alwaysText: {
     color: '#faff00',
     textDecorationLine: 'underline',
     fontFamily: 'Cochin',
     fontWeight: '900',
     fontStyle: 'italic',
     fontSize: 55,
   },
});
