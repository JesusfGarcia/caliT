import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { InsideNavigator } from "./inside";
import { OutsideNavigator } from "./outside";

export const LoginContext = React.createContext();

function MainNavigator() {
  const [isLogged, setIsLogged] = React.useState(false);
  return (
    <NavigationContainer>
      <LoginContext.Provider value={{ setIsLogged }}>
        {isLogged ? <InsideNavigator /> : <OutsideNavigator />}
      </LoginContext.Provider>
    </NavigationContainer>
  );
}

export default MainNavigator;
