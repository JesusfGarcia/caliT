import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createStackNavigator();

const OutsideNavigator = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export { OutsideNavigator };
