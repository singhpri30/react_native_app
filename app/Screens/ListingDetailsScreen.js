import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function ListingDetailsScreen({ title, subTitle, image }) {
    return (
        <View style={styles.listItem}>
      <Image style={styles.img} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
       <ListItem
       image={require("../../assets/1057-536x354.jpg")}
       title="Priyanka"
       subTitle="5 Listings"></ListItem>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.white,
        padding: 20,
        paddingTop: 100,
        marginBottom: 10,
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
})
