import React from "react";
import { Text, Image, ImageBackground, View, StyleSheet } from "react-native";
const App = () => {
  return (
    <View style={styles.pageContainer}>
      {/* <View style={styles.card}> */}
      <ImageBackground source={require('./assets/rentabuddylogo/Imagelogo.png')}
        style={styles.image}>

      </ImageBackground>
      {/* </View> */}
    </View>

  )
}

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  // card: {
  //   height: '35%',
  //   width: '55%',
  //   borderRadius: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: ,
  //     height: 12,
  //   },
  //   shadowOpacity: 0.58,
  //   shadowRadius: 16.00,

  //   elevation: 24,
  // },
  image: {
    height: '55%',
    width: '75%',
  
    // borderRadius: 10,
    // overflow: 'hidden',
    // justifyContent: 'flex-end'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',

  },
  bio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  cardInner: {
    padding: 10
  }
})
export default App;