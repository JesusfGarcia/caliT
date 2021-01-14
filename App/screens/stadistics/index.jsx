import * as React from "react";

import { View, Text, ScrollView } from "react-native";

import firebase from "../../utils/firebase";

import { DashboardContext } from "../DashboardTeacher";
import { styles } from "../../utils/styles";

import Questions from "../../data/teachers";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";
import { TouchableOpacity } from "react-native-gesture-handler";

function Stadistics() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { classId, setShowSta } = React.useContext(DashboardContext);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await firebase
          .database()
          .ref(`classes/${classId}`)
          .once("value");
        const answers = response.val().answers;
        const newStadistics = [
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
        ];
        for (let student in answers) {
          if (answers[student].complete) {
            answers[student].answers.map((item, idx) => {
              if (idx !== 7) {
                newStadistics[idx][item - 1].push("1");
              }
            });
          }
        }
        dispatch({ type: actions.changeValue, payload: newStadistics });
      } catch (error) {
        alert("Ocurrió un error en la aplicación");
      }
    };
    getData();
  }, []);

  const goBack = () => {
    setShowSta(false);
  };

  return (
    <View style={styles.dashboardContainer}>
      <View style={styles.row_between}>
        <Text style={styles.DashboardTitle}>Estadisticas</Text>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.goBackButton}>Atrás</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.QuestionsContainer}>
        {Questions.map((item, idx) => {
          return (
            <>
              <Text key={idx} style={styles.QuestionText}>{`${idx + 1}) ${
                item.question
              }`}</Text>

              {item.answers.map((question, idy) => {
                return (
                  <View style={styles.row_between} key={idy}>
                    <Text style={styles.AnswersText}>{question.text}</Text>
                    <Text style={styles.AnswersText}>
                      {state.stadistics[idx][idy].length}
                    </Text>
                  </View>
                );
              })}
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Stadistics;
