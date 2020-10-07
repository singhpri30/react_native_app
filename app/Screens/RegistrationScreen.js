import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../component/AppText";
import Screen from "../component/Screen";
import AppTextInput from "../component/AppTextInput";
import SubmitButton from "../component/Button";

export default function RegistrationScreen({ title }) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText style={styles.text}>CREATE YOUR ACCOUNT</AppText>
        <AppTextInput placeholder="First Name"></AppTextInput>
        <AppTextInput placeholder="Last Name"></AppTextInput>
        <AppTextInput placeholder="Email"></AppTextInput>
        <SubmitButton title="Submit"></SubmitButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginVertical: 12,
  },
});
