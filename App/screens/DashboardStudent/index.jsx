import * as React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import firebase from "../../utils/firebase";

import { LoginContext } from "../../Navigators";

import Quiz from "../quiz";

import { styles } from "../../utils/styles";

export const QuizContext = React.createContext();

function Dashboard() {
  const { user } = React.useContext(LoginContext);
  const [myclasses, setClasses] = React.useState([]);
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizSelected, setQuizSelected] = React.useState("");
  React.useState(() => {
    const classes = firebase.database().ref("classes/");
    classes.on("value", (snapshot) => {
      try {
        const data = snapshot.val();
        const newClasses = [];

        for (let item in data) {
          if (data.hasOwnProperty(item) && data[item].answers) {
            for (let students in data[item].answers) {
              students === user.uid && newClasses.push(item);
            }
          }
        }
        setClasses(newClasses);
      } catch (error) {
        alert('Ocurrió un error en la sesión')
      }
    });

    /*const getMyClasses = async () => {
      const response = await firebase.database().ref("classes/").once("value");
      const data = response.val();
      const newClasses = [];

      for (let item in data) {
        if (data.hasOwnProperty(item) && data[item].answers) {
          for (let students in data[item].answers) {
            students === user.uid && newClasses.push(item);
          }
        }
      }
      setClasses(newClasses);
    };

    getMyClasses();*/
  }, []);

  const SelectQuiz = (value) => {
    setShowQuiz(true);
    setQuizSelected(value);
  };

  if (showQuiz) {
    return (
      <QuizContext.Provider value={{ quizSelected, setShowQuiz: setShowQuiz }}>
        <Quiz />
      </QuizContext.Provider>
    );
  } else {
    return (
      <View style={styles.dashboardContainer}>
        <Text style={styles.DashboardTitle}>Mis Clases</Text>
        {myclasses.length === 0 && (
          <Text style={styles.text}>Sin clases registradas</Text>
        )}
        {myclasses.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() => SelectQuiz(item)}
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
