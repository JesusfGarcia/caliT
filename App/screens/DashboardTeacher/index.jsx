import * as React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import firebase from "../../utils/firebase";

import { LoginContext } from "../../Navigators";

function Dashboard() {
  const { user } = React.useContext(LoginContext);
  const [myclasses, setClasses] = React.useState([]);

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

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {myclasses.length === 0 && <Text>Sin clases registradas</Text>}
      {myclasses.map((item, idx) => {
        return (
          <TouchableOpacity
            style={{
              elevation: 1,
              width: "90%",
              height: 100,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
              borderRadius: 1,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
                letterSpacing: 2,
              }}
              key={idx}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default Dashboard;
