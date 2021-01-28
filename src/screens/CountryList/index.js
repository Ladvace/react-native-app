import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import { allCountry } from "../../api";

// import Post from "../../components/Post";

// const posts = [
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
//   { name: "gino", info: "some other info" },
// ];

const Card = (props) => {
  console.log(props);

  return (
    <View style={styles.cardContainer}>
      <Text>{props.name}</Text>
      <Image style={styles.image} source={props.flag} />
    </View>
  );
};

export default function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get(allCountry).then(({ data }) => {
      setCountries(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={Card}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "normal",
  },
  cardContainer: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
