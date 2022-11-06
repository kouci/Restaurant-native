import React, { useState } from "react";
import { Image, StyleSheet, View,Text, TouchableOpacity, Touchable } from "react-native";
import { elevation } from "../common/styles";
import { withNavigation } from "react-navigation";

const RestaurantItem = ({ restaurant, navigation }) => {

  const id = navigation.getParam("id");
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {id: restaurant.id})}>
    <View style={[styles.container, styles.elevation]}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating}</Text>
          <Text style={styles.price}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image:{
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4
  },
  infoContainer: {
    marginHorizontal:10,
    flex: 1
  },
  info :{
    flexDirection: "row"
  },
  rating: {
    marginRight: 10
  },
  price:{
    color: "gold"
  }
});

export default withNavigation(RestaurantItem);
