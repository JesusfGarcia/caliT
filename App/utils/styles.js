import { StyleSheet } from "react-native";
import { COLORS } from "./COLORS";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: 20,
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
    width: "100%",
  },
});
