import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { InsideNavigator } from "./inside";
import { OutsideNavigator } from "./outside";

import firebase from "../utils/firebase";

export const LoginContext = React.createContext();

function MainNavigator() {
  const [user, setUser] = React.useState(firebase.auth().currentUser);
  const onLogout = async () => {
    console.log("Entra a este logout");
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <NavigationContainer>
      <LoginContext.Provider value={{ onLogout, setUser: setUser, user }}>
        {user ? <InsideNavigator /> : <OutsideNavigator />}
      </LoginContext.Provider>
    </NavigationContainer>
  );
}

export default MainNavigator;
