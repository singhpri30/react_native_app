import React from "react";
// touchableopacity to tap the button
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors"

export default function Button({ title,onPress,color="primary" }) {
  return (
    <TouchableOpacity style={[styles.btn,{backgroundColor:colors[color]}]} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems:"center",
    padding: 15,
    width: "100%",
    marginVertical:10
  },
  txt: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
