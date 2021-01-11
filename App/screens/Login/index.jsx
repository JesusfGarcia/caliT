import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { styles } from "../../utils/styles";

import { LoginContext } from "../../Navigators/";

//reducer

import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

import firebase from "../../utils/firebase";

const Login = ({ navigation }) => {
  const { setUser } = React.useContext(LoginContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onLogin = async () => {
    try {
      dispatch({ type: actions.postLoading });
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(state.user.email, state.user.password);
      setUser(user);

      dispatch({ type: actions.postLoadingSuccess });
    } catch (error) {
      dispatch({
        type: actions.postLoadingError,
        payload: error.code,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe_area}>
        <Text style={styles.text}>Login Screen</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Correo Institucional</Text>
          <TextInput
            style={styles.input}
            value={state.user.email}
            placeholder="example@tecnmx.com"
            onChangeText={(text) =>
              dispatch({ type: actions.setUser, name: "email", payload: text })
            }
          />
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.input}
            value={state.user.password}
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={(text) =>
              dispatch({
                type: actions.setUser,
                name: "password",
                payload: text,
              })
            }
          />
        </View>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("register")}
            style={styles.link}
          >
            ¿no tienes usuario? Crea tu cuenta aquí
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onLogin} style={styles.button}>
          <Text style={styles.text}>{state.buttonText}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export { Login };
