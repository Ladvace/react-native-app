import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";

const image = {
  uri:
    "https://scontent.ffco4-1.fna.fbcdn.net/v/t1.0-9/60361812_2422149811168695_4917821688034361344_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a4a2d7&_nc_ohc=C1vt-XIyYkIAX_1vxtP&_nc_ht=scontent.ffco4-1.fna&oh=c4d71cad559c1ee7afd0be322848271c&oe=60313EE5",
};

// <ImageBackground source={image} style={styles.image} />
const Home = () => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.titles}>
        <Text style={styles.title}>Chi e' il piu' figo del villaggio? </Text>
        <Text style={styles.subtitle}>TEST 2</Text>
      </View>
      <Pressable style={styles.button} onPress={() => console.warn("TEST")}>
        <Text>Click</Text>
      </Pressable>
      <StatusBar style="auto" />
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
