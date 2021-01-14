import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.changeValue:
      console.log('Entra acá juasjuas')
      return {
        ...state,
        stadistics: action.payload,
      };
    case actions.resetAll:
      console.log("Entró Aquí");
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
