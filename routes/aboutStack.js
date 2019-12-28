import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/About";

const screens = {
  // first one will be shown as default
  About: {
    screen: About,
    navigationOptions: {
      title: "About BookZone"
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
