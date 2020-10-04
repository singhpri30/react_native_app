import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.listItem}>
      <Image style={style.img} source={image}></Image>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});