import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "../../utils/styles";

import { LoginContext } from "../../Navigators/";

const Login = ({ navigation }) => {
  const { setIsLogged } = React.useContext(LoginContext);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe_area}>
        <Text style={styles.text}>Login Screen</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Usuario</Text>
          <TextInput style={styles.input} placeholder="Usuario" />
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput style={styles.input} placeholder="Contraseña" />
        </View>

        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("register")}
            style={styles.link}
          >
            ¿no tienes usuario? Crea tu cuenta aquí
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsLogged(true)}
          style={styles.button}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export { Login };
