import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      ></Image>
      <Text>Sell what you don't need</Text>
        </View>
      
      <View style={styles.loginBtn}>
        <Text style={styles.btnText}>Login</Text>
      </View>
      <View style={styles.registerBtn}>
        <Text style={styles.btnText}>Register</Text>
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
  logoContainer:{
    position: "absolute",
    top: 70,
    alignItems:"center"
  },
  logo: {
    width: 100,
    height: 100,  
  },
  loginBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "blue",
  },
  registerBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "pink",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
});
