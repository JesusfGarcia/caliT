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
    case actions.postLoading:
      return {
        ...state,
        isLoading: true,
        buttonText: "Cargando...",
        errorMsg: null,
      };
    case actions.postLoadingSuccess:
      return {
        ...state,
        isLoading: false,
        buttonText: "Entrar",
        errorMsg: null,
      };
    case actions.postLoadingError:
      return {
        ...state,
        isLoading: false,
        buttonText: "Entrar",
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
