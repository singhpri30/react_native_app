import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ children,style }) {
  return <Text style={[styles.text,style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    marginTop:10
  },
});
