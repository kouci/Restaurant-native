import React, { useEffect } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import yelp from "../api/yelp";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  useEffect(() => {
      searchRestaurant(id);
  },[id]);


  if (loading) return <Text>loading....</Text>;
  return (
    <View>
      <FlatList
        data={data.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image
            style={{ height: imageHeight, width: imageWidth }}
            source={{ uri: item }}
          />
        )}
      />
    </View>
  );
};

export default RestaurantScreen;
