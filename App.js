// import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/component/AppText";
import RegistrationForm from "./app/Screens/RegistrationScreen";
// import Welcome from "./app/Screens/WelcomeScreen";
// import ImageScreen from "./app/component/ViewImageScreen"
import Screen from "./app/component/Screen"
import Card from "./app/component/Card"
import Messages from "./app/Screens/MessageScreen"
import AppTextInput from "./app/component/AppTextInput";
import SubmitButton from "./app/component/Button"
import colors from "./app/config/colors";

export default function App() {
 
  // return <Card title="Red jacket for sale" subTitle="$100" image={require("./assets/237-536x354.jpg")}></Card>;
  // return <Messages></Messages>
  // return  <RegistrationForm title="CREATE YOUR ACCOUNT"></RegistrationForm>
  return <RegistrationForm></RegistrationForm>
}
