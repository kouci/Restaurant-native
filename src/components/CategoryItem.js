import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";
const CategoryItem = ({ name, imageUrl, index, active,handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
    <View
      style={[
        styles.container,
        styles.elevation,
        index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
        active
          ? { backgroundColor: "rgb(241,186,87)" }
          : { backgroundColor: "white" },
      ]}
    >
      <View style={styles.containerImage}>
        <Image style={styles.image} source={imageUrl} />
      </View>
      <Text style={styles.headre}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  headre: {
    fontWeight: "bold",
  },
  containerImage: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default CategoryItem;
