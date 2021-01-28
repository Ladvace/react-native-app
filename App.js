import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import RootReducer from "./src/redux/reducers";
import LandingScreen from "./src/screens/Landing";
import Router from "./src/navigation/Router";
import MainScreen from "./src/screens/Main";
import NavigationBar from "./src/components/NavigationBar";

// <View style={styles.container}>
//   <StatusBar style="auto" />
//   <Router />
//   <NavigationBar />
// </View>

const store = createStore(RootReducer, applyMiddleware(thunk));

const firebaseConfig = {};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <>
        <StatusBar style="auto" />
        <Router />
      </>
    );
  }

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

/* <NavigationBar /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "normal",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
