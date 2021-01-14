import * as React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import firebase from "../../utils/firebase";

import { LoginContext } from "../../Navigators";
import { styles } from "../../utils/styles";

import Stadistics from "../stadistics";

export const DashboardContext = React.createContext();

function Dashboard() {
  const { user } = React.useContext(LoginContext);
  const [myclasses, setClasses] = React.useState([]);
  const [classId, setClassId] = React.useState("");
  const [showSta, setShowSta] = React.useState(false);

  React.useEffect(() => {
    const classes = firebase.database().ref("classes/");

    classes.on("value", (snapshot) => {
      try {
        const data = snapshot.val();
        const newClasses = [];
        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            let propietario = data[i].owner;
            console.log(propietario);
            if (propietario === user.uid) {
              console.log("hola");
              newClasses.push(i);
            }
          }
        }
        console.log(newClasses);
        setClasses(newClasses);
      } catch (error) {}
    });
  }, []);

  const selectClass = (id) => {
    setShowSta(true);
    setClassId(id);
  };

  if (showSta) {
    return (
      <DashboardContext.Provider value={{ classId, setShowSta: setShowSta }}>
        <Stadistics />
      </DashboardContext.Provider>
    );
  } else {
    return (
      <View style={styles.dashboardContainer}>
        <Text style={styles.DashboardTitle}>Mis Clases</Text>
        {myclasses.length === 0 && <Text>Sin clases registradas</Text>}
        {myclasses.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() => selectClass(item)}
              style={styles.classButton}
            >
              <Text style={styles.classButtonText} key={idx}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default Dashboard;
