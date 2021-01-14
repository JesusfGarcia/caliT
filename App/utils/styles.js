import { StyleSheet } from "react-native";
import { COLORS } from "./COLORS";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 20,
  },
  insideContainer: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  dashboardContainer: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  safe_area: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    color: COLORS.primary_text,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    borderBottomColor: COLORS.primary_dark,
    borderBottomWidth: 3,
  },
  link: {
    color: COLORS.primary_text,
    fontSize: 16,
    letterSpacing: -1,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.primary_dark,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  inputContainer: {
    width: "100%",
  },
  inputLabel: {
    color: COLORS.primary_text,
    fontWeight: "bold",
    fontSize: 17,
  },
  row_between: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  classButton: {
    width: "95%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  classButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 2,
  },
  DashboardTitle: {
    color: COLORS.primary_text,
    fontSize: 50,
    fontWeight: "bold",
  },
  QuestionsContainer: {
    width: "100%",
    height: "100%",
    paddingRight: 20,
  },
  QuestionText: {
    color: COLORS.primary_text,
    fontWeight: "bold",
    fontSize: 20,
  },
  AnswersText: {
    color: COLORS.primary_dark,
    fontWeight: "bold",
    fontSize: 16,
  },
  goBackButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
  },
});
