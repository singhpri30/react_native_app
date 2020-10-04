import React from "react";
import { StyleSheet,View, Image} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="while" size={30}></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}></MaterialCommunityIcons>
      </View>
      <Image
        style={styles.imageContainer}
        source={require("../../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.black
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    position:"absolute",
    top:50,
    left:10
  },
  deleteIcon: {
    position:"absolute",
    top:50,
    right:10
  },
});
