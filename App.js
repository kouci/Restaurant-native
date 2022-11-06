import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { createAppContainer } from "react-navigation";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Accueil",
    },
  }
);

export default createAppContainer(navigator);