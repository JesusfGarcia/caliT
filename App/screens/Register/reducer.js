import { initialState } from "./constants";
import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setUser:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.payload,
        },
      };
    case actions.toggleTeacher:
      return {
        ...state,
        user: {
          ...state.user,
          teacher: !state.user.teacher,
        },
      };
    case actions.postRegister:
      return {
        ...state,
        isLoading: true,
        buttonMsg: "Cargando...",
      };
    case actions.postRegisterSuccess:
      return {
        ...state,
        isLoading: false,
        buttonMsg: "Registrarme",
      };
    case actions.postRegisterError:
      return {
        ...state,
        isLoading: false,
        buttonMsg: "Registrarme",
        isError: action.payload,
      };
    default:
      return state;
  }
};
