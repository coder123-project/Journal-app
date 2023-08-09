import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import JournalScreen from "../screens/JournalScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="JournalScreen" component={JournalScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
