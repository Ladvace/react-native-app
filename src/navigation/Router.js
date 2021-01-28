import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CountryList from "../screens/CountryList";
import Home from "../screens/Home";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Register"}
          component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Posts"}
          component={CountryList}
          options={{
            title: "Posts",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
