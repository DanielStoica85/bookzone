import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

import Card from "../shared/Card";

const BookDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("author")}</Text>
        <Text>{navigation.getParam("rating")}</Text>
        <Text>{navigation.getParam("notes")}</Text>
      </Card>
    </View>
  );
};

export default BookDetails;
