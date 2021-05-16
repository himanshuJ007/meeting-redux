import * as action_type from "../Action/action";
const initialState = {
    path: "/",
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case action_type.HOME:
        return {
          ...state,
          path: action_type.HOME,
        };
      case action_type.VIEW:
        return {
            ...state,
            path: action_type.VIEW,
          };
      case action_type.FEEDBACK:
        return {
            ...state,
            path: action_type.FEEDBACK,
          };
  
      default:
        return state;
    }
  };

  export default reducer;