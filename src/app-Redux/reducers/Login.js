import * as action_type from "../Action/action";
const initialState = {
    login: false,
    username: "",
    pass: "",
    incorrect: false,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case action_type.UPDATE_EMAIL:
        console.log("UPDATE_EMAIL_REDUCER")
        return {
          ...state,
          username: action.value,
        };
      case action_type.UPDATE_PASS:
        console.log("UPDATE_PASS_REDUCER")
        return {
          ...state,
          pass: action.value,
        };
      case action_type.LOGIN:
        console.log("login_REDUCER")
        return {
          ...state,
          login: action.login,
          incorrect: action.incorrect,
        };
  
      default:
        return state;
    }
  };
  export default reducer;
  