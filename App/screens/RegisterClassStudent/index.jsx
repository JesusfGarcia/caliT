import * as React from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "../../utils/styles";

import { LoginContext } from "../../Navigators/index";

import firebase from "../../utils/firebase";

function RegisterClassStudent() {
  const { user } = React.useContext(LoginContext);
  const [code, setCode] = React.useState("");

  const registerClass = async () => {
    const response = await firebase.database().ref("classes/").once("value");
    const data = response.val();
    let classExist = false;

    for (let item in data) {
      if (code.toLocaleUpperCase() === item.toLocaleUpperCase()) {
        classExist = true;
      }
    }
    if (classExist) {
      //la clase si existe
      firebase
        .database()
        .ref(
          "classes/" + code.toLocaleUpperCase() + "/answers" + `/${user.uid}`
        )
        .set({
          complete: false,
        })
        .then(() => {
          alert("Se ha registrado correctamente dentro de la clase");
          setCode("");
        });
    } else {
      alert("La clase a la que quiere ingresar no existe");
    }
    console.log("classExist", classExist);
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

export default RegisterClassStudent;
