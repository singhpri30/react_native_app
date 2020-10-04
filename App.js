// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/component/AppText";
// import RegistrationForm from "./app/component/RegistrationScreen";
// import Welcome from "./app/Screens/WelcomeScreen";
// import ImageScreen from "./app/component/ViewImageScreen"
import Card from "./app/component/Card"
import Messages from "./app/Screens/MessageScreen"

export default function App() {
  // return <Card title="Red jacket for sale" subTitle="$100" image={require("./assets/237-536x354.jpg")}></Card>;
  return <Messages></Messages>
}
