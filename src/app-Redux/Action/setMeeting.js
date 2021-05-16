import * as action_type from "../../app-Redux/Action/action";
import axios from "axios";

export const set = (user, date, time, location, equipments, participants) => {
  var ob = {
    meeting_date: date,
    meeting_time: time,
    meeting_Location: location,
    meeting_Equipments: equipments,
    meeting_Participants: participants,
  };
  //async function
  return async (dispatch) => {
    console.log(ob);
    // await axios.post(`http://localhost:3000/meeting/${user}`,ob);
    return dispatch({ type: action_type.SET_HOME });
  };
};
export const onChangeDate = (date, dateString) => {
  console.log("DATE=", dateString); //
  return { type: action_type.SET_DATE, value: dateString };
};
export const onChangeTime = (time, timeString) => {
  console.log("TIME==", timeString);
  return { type: action_type.SET_TIME, value: timeString };
};
export const onChangeLocation = (value) => {
  console.log("Location=", value);
  return { type: action_type.SET_LOCATION, value: value };
};
export const onChangeEquipment = (value) => {
  console.log("EQUIPMENT==", value);
  return { type: action_type.SET_EQUIPMENT, value: value };
};
export const onChangeParticipants = (value) => {
  console.log("EQUIPMENT==", value);
  return { type: action_type.SET_PARTICIPANTS, value: value };
};
