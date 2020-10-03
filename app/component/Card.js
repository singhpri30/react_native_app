import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 100,
    marginBottom: 10,
    borderRadius:15,
    overflow:"hidden"
  },
  detailsContainer: {
    padding: 10,
  },
  title:{
      fontWeight:"bold"
  },
  subTitle:{
      color:colors.secondary
  },
  img: {
    width: "100%",
    height: 200,
  },
});
