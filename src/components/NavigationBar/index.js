import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const image = {
  uri:
    "https://scontent.ffco4-1.fna.fbcdn.net/v/t1.0-9/60361812_2422149811168695_4917821688034361344_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a4a2d7&_nc_ohc=C1vt-XIyYkIAX_1vxtP&_nc_ht=scontent.ffco4-1.fna&oh=c4d71cad559c1ee7afd0be322848271c&oe=60313EE5",
};

const NavigationBar = () => {
  return <View style={styles.container}></View>;
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#095256",
    width: "100%",
    height: "10%",
  },
  bar: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
