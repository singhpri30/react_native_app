// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.registrationForm}>
      <Text style={styles.header}>Registration</Text>
      <TextInput style={styles.textInput} placeholder="Your Name"></TextInput>
      <TextInput style={styles.textInput} placeholder="Email"></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={styles.submitButton}>
        <Text styele={styles.signBtn}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  registrationForm: {
    alignSelf: "stretch",
  },
  header: {
    fontWeight: "bold",
    fontSize: 27,
    color: "#FFF",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: "#199187",
    borderBottomWidth: 3,
  },
  textInput: {
    fontSize: 18,
    color: "grey",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 3,
  },
  submitButton: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#59cbbd",
    padding: 20,
    marginTop:30
    
  },
  signBtn:{
      color:"#fff",
      fontWeight:"bold"

  }
});
