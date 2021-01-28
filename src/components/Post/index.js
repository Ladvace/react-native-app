import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const image = {
  uri:
    "https://scontent.ffco4-1.fna.fbcdn.net/v/t1.0-9/60361812_2422149811168695_4917821688034361344_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a4a2d7&_nc_ohc=C1vt-XIyYkIAX_1vxtP&_nc_ht=scontent.ffco4-1.fna&oh=c4d71cad559c1ee7afd0be322848271c&oe=60313EE5",
};

const Post = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
