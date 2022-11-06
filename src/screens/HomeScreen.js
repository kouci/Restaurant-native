import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useEffect, useState } from "react";
import Categories from "../components/categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

export default function HomeScreen() {

   const [term, setTerm] = useState("Burger");

   const commonCategories = [
      {
        name: "Burger",
        imageUrl: require("../assets/images/burger.png"),
      },
      {
        name: "Pizza",
        imageUrl: require("../assets/images/pizza.png"),
      },
      {
        name: "Dessert",
        imageUrl: require("../assets/images/cake.png"),
      },
      {
        name: "Drinks",
        imageUrl: require("../assets/images/smoothies.png"),
      },
      {
        name: "Steak",
        imageUrl: require("../assets/images/steak.png"),
      },
    ];

   return(
      <View>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
   )
}

