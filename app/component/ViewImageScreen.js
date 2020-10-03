import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      </View>
      <View style={styles.deleteIcon}>
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
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    position:"absolute",
    top:40,
    left:10
  },
  deleteIcon: {
    backgroundColor: "green",
    height: 50,
    width: 50,
    position:"absolute",
    top:40,
    right:10
  },
});
