import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CountryList from "../screens/CountryList";
import Landing from "../screens/Landing";
// import Home from "../screens/Main";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name={"Landing"}
          component={Landing}
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
