import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AnaBeatriz from "./pages/AnaBeatriz/AnaBeatriz";
import Evelyn from "./pages/Evelyn/Evelyn";
import Giovanna from "./pages/Giovanna/Giovanna";
import Isabella from "./pages/Isabella/Isabella";
import Laura from "./pages/Laura/Laura";

import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="AnaBeatriz">
        <Tab.Screen
          name="AnaBeatriz"
          component={AnaBeatriz}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Evelyn"
          component={Evelyn}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
                <Tab.Screen
          name="Giovanna"
          component={Giovanna}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
                <Tab.Screen
          name="Isabella"
          component={Isabella}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
                <Tab.Screen
          name="Laura"
          component={Laura}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}