import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";



// <ImageBackground source={image} style={styles.image} />
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
      {/* <Button title="Login" onPress={() => navigation.navigate("Login")} /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "#FFFF",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFFF",
    fontSize: 20,
    fontWeight: "normal",
  },
  button: {
    padding: 10,
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#dd6e42",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
