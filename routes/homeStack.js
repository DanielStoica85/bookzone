import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Home from "../screens/Home";
import BookDetails from "../screens/BookDetails";
import Header from "../shared/Header";

const screens = {
  // first one will be shown as default
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="BookZone" />
      };
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

export default HomeStack;
