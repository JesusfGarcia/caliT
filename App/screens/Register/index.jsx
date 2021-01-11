import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../utils/styles";

//reducer
import { actions } from "./actions";
import { initialState } from "./constants";
import { reducer } from "./reducer";

//firebase
import firebase from "../../utils/firebase";

const Register = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleChange = (payload, name) => {
    dispatch({ type: actions.setUser, name, payload });
  };

  const onUpload = async () => {
    console.log("entra a la función");
    try {
      dispatch({ type: actions.postRegister });
      const user = state.user;
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      const uid = response.user.uid;
      const newUser = {
        name: state.user.name,
        teacher: state.user.teacher,
        email: user.email,
        controlNumber: user.controlNumber,
      };
      firebase
        .database()
        .ref("users/" + uid)
        .set(newUser);
      dispatch({ type: actions.postRegisterSuccess });
      navigation.navigate("login");
    } catch (error) {
      dispatch({ type: actions.postRegisterError, payload: error.code });
      console.log("Valió vrga compadre");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe_area}>
        <Text style={styles.text}>Register Screen</Text>
        <View style={styles.row_between}>
          <Text style={styles.inputLabel}>¿Es docente?</Text>
          <Switch
            value={state.user.teacher}
            onValueChange={() => dispatch({ type: actions.toggleTeacher })}
          />
        </View>
        {state.user.teacher ? (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput
              onChangeText={(text) => handleChange(text, "name")}
              value={state.user.name}
              style={styles.input}
              placeholder="Su nombre completo"
            />
            <Text style={styles.inputLabel}>Correo Institucional</Text>
            <TextInput
              onChangeText={(text) => handleChange(text, "email")}
              value={state.user.email}
              style={styles.input}
              placeholder="Correo Institucional"
            />
            <Text style={styles.inputLabel}>Contraseña</Text>
            <TextInput
              value={state.user.password}
              onChangeText={(text) => handleChange(text, "password")}
              secureTextEntry
              textContentType="password"
              style={styles.input}
              placeholder="Contraseña"
            />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput
              onChangeText={(text) => handleChange(text, "name")}
              value={state.user.name}
              style={styles.input}
              placeholder="Su nombre completo"
            />
            <Text style={styles.inputLabel}>Correo Institucional</Text>
            <TextInput
              onChangeText={(text) => handleChange(text, "email")}
              value={state.user.email}
              style={styles.input}
              placeholder="example@tecmx.net"
            />
            <Text style={styles.inputLabel}>Número de control</Text>
            <TextInput
              value={state.user.controlNumber}
              onChangeText={(text) => handleChange(text, "controlNumber")}
              style={styles.input}
              placeholder="17445683"
            />
            <Text style={styles.inputLabel}>Contraseña</Text>
            <TextInput
              value={state.user.password}
              onChangeText={(text) => handleChange(text, "password")}
              secureTextEntry
              textContentType="password"
              style={styles.input}
              placeholder="Contraseña"
            />
          </View>
        )}
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.link}
          >
            Ya tengo una cuenta creada
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onUpload} style={styles.button}>
          <Text style={styles.text}>{state.buttonMsg}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export { Register };
