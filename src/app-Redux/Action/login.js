import * as action_type from "../../app-Redux/Action/action";
import axios from "axios";

export const updateEmail = (value) => {
  console.log(value);
  return { type: action_type.UPDATE_EMAIL, value: value };
};
export const updatePass = (value) => {
  return { type: action_type.UPDATE_PASS, value: value };
};
export const Login_Function = (username, password) => {
  return async (dispatch) => {
    var login = false;
    var details = false;
    var incorrect = true;
    if (username) {
      var res = await axios({
        method: 'get',
        url: `http://localhost:3000/login/password/${username}`,
        data: {
          pass: password
        }
      } 
      );
      console.log(res.data);
    } else {
      return dispatch({
        type: action_type.LOGIN,
        login: login,
        incorrect: incorrect,
      });
    }
    // if (passwords.data) {
    //   console.log("PASSWORDS", passwords.data);
    //   console.log("PASSWORD", password);
    //   passwords.data.forEach((p) => {
    //     if (p === password) {
    //       details = true;
    //       login = true;
    //       incorrect = false;
    //     }
    //   });
    // }
    // if (!details) {
    //   login = false;
    //   incorrect = true;
    // }
    return dispatch({
      type: action_type.LOGIN,
      login: login,
      incorrect: incorrect,
    });
  };
};