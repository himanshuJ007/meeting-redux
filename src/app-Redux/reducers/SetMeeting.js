import * as action_type from "../Action/action";
const initialState = { 
  home: false ,
  meeting_date:'2020/01/01',
  meeting_time:'00:00:00',
  meeting_Location:"Room A1",
  meeting_Equipments:"1 PC",
  meeting_Participants:""
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case action_type.SET_HOME:
        console.log("STATE=",state);
        return {
          ...state,
          home: true
        };
      case action_type.SET_DATE:
        return {
          ...state,
          meeting_date: action.value
        };
      case action_type.SET_TIME:
        return {
          ...state,
          meeting_time: action.value
        };
      case action_type.SET_EQUIPMENT:
        return {
          ...state,
          meeting_Equipments: action.value
        };
      case action_type.SET_PARTICIPANTS:
        return {
          ...state,
          meeting_Participants: action.value
        };
      default:
        return state;
    }
  };
  export default reducer;
  