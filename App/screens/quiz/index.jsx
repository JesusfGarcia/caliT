import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import TEMP_QUESTIONS from "../../data/teachers";
import { Button, ButtonContainer } from "../../components/Button";

import { StatusBar } from "expo-status-bar";

import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";

import { styles } from "../../utils/styles";

import { QuizContext } from "../DashboardStudent/index";
import { LoginContext } from "../../Navigators/index";

import firebase from "../../utils/firebase";

const oldstyles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});

const Quiz = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { quizSelected, setShowQuiz } = React.useContext(QuizContext);
  const { user } = React.useContext(LoginContext);
  const question = TEMP_QUESTIONS[state.actual];

  const sendTest = async () => {
    const answers = state.answers;

    answers.push(state.comments);
    firebase
      .database()
      .ref("classes/" + quizSelected + "/answers" + `/${user.uid}`)
      .set({
        complete: true,
        answers,
      })
      .then(() => {
        alert("Se ha subido de manera correcta su evaluación");
        dispatch({ type: actions.resetData });
        setShowQuiz(false);
      });
  };
  return (
    <View style={oldstyles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={oldstyles.safearea}>
        <View>
          <Text style={oldstyles.text}>{question.question}</Text>
          {state.actual === 7 ? (
            <ButtonContainer>
              <View style={[styles.inputContainer]}>
                <TextInput
                  onChangeText={(text) =>
                    dispatch({ type: actions.setComment, payload: text })
                  }
                  multiline
                  numberOfLines={7}
                  style={styles.input}
                  placeholder={"Comentarios"}
                  value={state.comments}
                />
              </View>
              <TouchableOpacity onPress={sendTest} style={styles.button}>
                <Text style={styles.text}>Listo!</Text>
              </TouchableOpacity>
            </ButtonContainer>
          ) : (
            <ButtonContainer>
              {question.answers.map((answer) => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() =>
                    dispatch({ type: actions.selectAnswer, payload: answer.id })
                  }
                />
              ))}
            </ButtonContainer>
          )}
        </View>
        <Text style={oldstyles.text}>{`${state.actual + 1}/${
          TEMP_QUESTIONS.length
        }`}</Text>
      </SafeAreaView>
    </View>
  );
};

export default Quiz;
