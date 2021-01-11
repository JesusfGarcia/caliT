import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createStackNavigator();

const OutsideNavigator = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};

export { OutsideNavigator };
