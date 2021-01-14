import * as React from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "../../utils/styles";

import { LoginContext } from "../../Navigators/index";

import firebase from "../../utils/firebase";

function RegisterClassTeacher({ navigation }) {
  const { user } = React.useContext(LoginContext);
  const [code, setCode] = React.useState("");

  const registerClass = async () => {
    try {
      const data = {
        owner: user.uid,
      };
      await firebase
        .database()
        .ref("classes/" + code.toLocaleUpperCase())
        .set(data);
      setCode("");
      navigation.navigate("Inicio");
    } catch (error) {
      alert("Ocurrió un error en el servidor");
    }
  };

  return (
    <View style={styles.insideContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Código de clase</Text>
        <TextInput
          value={code}
          onChangeText={setCode}
          style={styles.input}
          placeholder={"ABCDEF"}
        />
      </View>
      <TouchableOpacity onPress={registerClass} style={styles.button}>
        <Text style={styles.text}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterClassTeacher;
