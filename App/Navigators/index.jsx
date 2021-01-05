import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { InsideNavigator } from "./inside";
import { OutsideNavigator } from "./outside";

function MainNavigator() {
  const [isLogged, setIsLogged] = React.useState(false);
  return (
    <NavigationContainer>
      {isLogged ? <InsideNavigator /> : <OutsideNavigator />}
    </NavigationContainer>
  );
}

export default MainNavigator;
