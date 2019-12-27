import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import BookDetails from "../screens/BookDetails";

const screens = {
  // first one will be shown as default
  Home: {
    screen: Home
  },
  BookDetails: {
    screen: BookDetails
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
