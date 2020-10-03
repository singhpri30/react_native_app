import React from "react";
import { StyleSheet,View, Image} from "react-native";
import colors from "../config/colors";



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
    backgroundColor:colors.black
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    position:"absolute",
    top:50,
    left:10
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    position:"absolute",
    top:50,
    right:10
  },
});
