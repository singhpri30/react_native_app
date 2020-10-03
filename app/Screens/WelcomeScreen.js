import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

import AppButton from "../component/Button";

export default function WelcomeScreen() {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("button tapped")}
        ></AppButton>
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("button tapped")}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer:{
    width:"100%",
   padding:20

  },
  tagLine:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20
  }
});
