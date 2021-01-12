import * as React from "react";

import { View, Text, Button } from "react-native";

import { LoginContext } from "../../Navigators";

function SessionScreen() {
  const { onLogout } = React.useContext(LoginContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={onLogout} title="Logout" />
    </View>
  );
}

export default SessionScreen;
