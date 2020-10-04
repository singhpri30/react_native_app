import React from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import ListItem from "../component/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    img: require("../../assets/priyanka.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    img: require("../../assets/priyanka.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    img: require("../../assets/priyanka.png"),
  },
];

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => {
          message.id.toString();
        }}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.img}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
    }
});
