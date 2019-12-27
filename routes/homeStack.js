import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import BookDetails from "../screens/BookDetails";

const screens = {
  // first one will be shown as default
  Home: {
    screen: Home,
    navigationOptions: {
      title: "BookZone"
    }
  },
  BookDetails: {
    screen: BookDetails,
    navigationOptions: {
      title: "Book Details"
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 60
    }
  }
});

export default createAppContainer(HomeStack);
