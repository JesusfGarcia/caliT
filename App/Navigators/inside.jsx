import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

function Dashboard() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard</Text>
    </View>
  );
}

function RegisterClass() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Register a class</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const InsideNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Inicio" component={Dashboard} />
      <Tabs.Screen name="Registar clase" component={RegisterClass} />
    </Tabs.Navigator>
  );
};

export { InsideNavigator };
