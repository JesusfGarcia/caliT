import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../utils/styles";

const Register = ({ navigation }) => {
  const [teacher, setTeacher] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe_area}>
        <Text style={styles.text}>Register Screen</Text>
        <View style={styles.row_between}>
          <Text style={styles.inputLabel}>¿Es docente?</Text>
          <Switch value={teacher} onValueChange={() => setTeacher(!teacher)} />
        </View>

        {teacher ? (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput style={styles.input} placeholder="Nombre" />
            <Text style={styles.inputLabel}>Correo electrónico</Text>
            <TextInput style={styles.input} placeholder="Correo electrónico" />
            <Text style={styles.inputLabel}>Contraseña</Text>
            <TextInput
              secureTextEntry
              textContentType="password"
              style={styles.input}
              placeholder="Contraseña"
            />
            <Text style={styles.inputLabel}>Matrícula</Text>
            <TextInput style={styles.input} placeholder="Matrícula" />
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput style={styles.input} placeholder="Nombre" />
            <Text style={styles.inputLabel}>Correo electrónico</Text>
            <TextInput style={styles.input} placeholder="Correo electrónico" />
            <Text style={styles.inputLabel}>Contraseña</Text>
            <TextInput
              secureTextEntry
              textContentType="password"
              style={styles.input}
              placeholder="Contraseña"
            />
            <Text style={styles.inputLabel}>Número de control</Text>
            <TextInput style={styles.input} placeholder="Número de control" />
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Registrarme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export { Register };
