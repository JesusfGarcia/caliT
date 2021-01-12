import * as React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../../utils/styles";

import { LoginContext } from "../../Navigators";

function SessionScreen() {
  const { onLogout } = React.useContext(LoginContext);
  return (
    <View style={styles.insideContainer}>
      <TouchableOpacity onPress={onLogout} style={styles.button}>
        <Text style={styles.text}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SessionScreen;
