import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.selectAnswer:
      let newAnswerArray = state.answers;
      newAnswerArray.push(action.payload);
      return {
        ...state,
        answers: newAnswerArray,
        actual: state.actual < 7 ? state.actual + 1 : state.actual,
      };
    case actions.setComment:
      return {
        ...state,
        comments: action.payload,
      };
    case actions.resetData:
      return {
        answers: [],
        comments: "",
        actual: 0,
      };
    default:
      return state;
  }
};
