import * as React from "react";

import { View, Text, ScrollView } from "react-native";

import firebase from "../../utils/firebase";

import { LoginContext } from "../../Navigators";
import { styles } from "../../utils/styles";

import Questions from "../../data/teachers";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";

function Stadistics() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { user } = React.useContext(LoginContext);

  React.useEffect(() => {
    const getData = async () => {
      const response = await firebase
        .database()
        .ref("classes/ABCDEF")
        .once("value");
      const answers = response.val().answers;
      const newStadistics = state.stadistics;
      //console.log(answers);
      for (let student in answers) {
        if (answers[student].complete) {
          //console.log(answers[student].answers);
          answers[student].answers.map((item, idx) => {
            if (idx !== 7) {
              newStadistics[idx][item - 1].push("1");
            }
          });
        }
      }
      console.log(newStadistics);
    };
    getData();
    console.log(state);
  });

  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.DashboardTitle}>Estadisticas</Text>
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
