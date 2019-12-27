import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

const BookDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("author")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Text>{navigation.getParam("notes")}</Text>
    </View>
  );
};

export default BookDetails;
