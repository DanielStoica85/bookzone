import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Homo Deus",
      author: "Yuval Noah Harari",
      rating: 5,
      notes: "lorem ipsum",
      key: "1"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      rating: 4,
      notes: "lorem ipsum",
      key: "2"
    },
    {
      title: "21 Lessons for the 21st Century",
      author: "Yuval Noah Harari",
      rating: 3,
      notes: "lorem ipsum",
      key: "3"
    }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BookDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
