import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.changeValue:
      return {
        ...state,
        stadistics: action.payload,
      };
    case actions.resetAll:
      return {
        ...state,
        stadistics: [
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
          [[], [], [], [], []],
        ],
      };
    default:
      return state;
  }
};
