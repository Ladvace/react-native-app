import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import firebase from "firebase";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const SignUp = async () => {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      firebase
        .firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .set({
          name,
          email,
        });
      console.log("result", result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <TextInput placeholder="name" onChangeText={(e) => setName(e)} />
      <TextInput placeholder="Email" onChangeText={(e) => setEmail(e)} />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />
      <Button title="" onPress={() => SignUp()} />
    </View>
  );
};

export default Register;

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
});
