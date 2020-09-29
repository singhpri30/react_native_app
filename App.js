// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegistrationForm from "./app/component/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationForm></RegistrationForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    paddingLeft: 60,
    paddingRight: 60,
  },
});
