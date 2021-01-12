import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

import firebase from "../utils/firebase";

import { LoginContext } from "./index";

import DashboardTeacher from "../screens/DashboardTeacher";
import DashboardStudent from "../screens/DashboardStudent";
import RegisterClassTeacher from "../screens/RegisterClassTeacher";
import RegisterClassStudent from "../screens/RegisterClassStudent";
import SessionScreen from "../screens/SessionInfo";

import { COLORS } from "../utils/COLORS";

const Tabs = createBottomTabNavigator();

function LoadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Cargando...</Text>
    </View>
  );
}

const InsideNavigator = () => {
  const { user } = React.useContext(LoginContext);
  const [isTeacher, setIsTeacher] = React.useState();
  const [Loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getRolInfo = async () => {
      setLoading(true);
      const response = await firebase
        .database()
        .ref("users/" + user.uid)
        .once("value");
      setLoading(false);
      setIsTeacher(response.val().teacher);
    };
    getRolInfo();
  }, [user]);

  if (Loading) {
    return <LoadingScreen />;
  }

  return (
    <Tabs.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: COLORS.primary_dark,
        activeBackgroundColor: COLORS.primary_light,
        activeTintColor: COLORS.secondary_text,
        inactiveTintColor: "#ffeeff",
      }}
    >
      {isTeacher ? (
        <>
          <Tabs.Screen name="Inicio" component={DashboardTeacher} />
          <Tabs.Screen
            name="Registrar Clase"
            component={RegisterClassTeacher}
          />
        </>
      ) : (
        <>
          <Tabs.Screen name="Inicio" component={DashboardStudent} />
          <Tabs.Screen
            name="Ingresar a Clase"
            component={RegisterClassStudent}
          />
        </>
      )}
      <Tabs.Screen name="Sesión" component={SessionScreen} />
    </Tabs.Navigator>
  );
};

export { InsideNavigator };
