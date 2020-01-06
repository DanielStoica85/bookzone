import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import About from "../screens/About";
import Header from "../shared/Header";

const screens = {
  // first one will be shown as default
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About BookZone" />
        )
      };
    }
  }
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 60
    }
  }
});

export default AboutStack;
