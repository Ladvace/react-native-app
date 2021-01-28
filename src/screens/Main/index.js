import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { fetchUser } from "../../redux/actions";

const Main = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userState.currentUser);
  console.log("currentUser", currentUser);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <View style={styles.container}>
      <Text>User is loggedIn</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
