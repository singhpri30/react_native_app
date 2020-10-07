import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/style"

export default function AppTextInput({...otherProps}) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons />
      <TextInput style={defaultStyles.text}  {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius:25,
    flexDirection:"row",
    width:"100%",
    padding:15,
    marginVertical:10
  },
});
