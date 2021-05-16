import {createStore ,combineReducers,applyMiddleware} from "redux"
import loginReducer from "../app-Redux/reducers/Login"
import homeReducer from "../app-Redux/reducers/Home"
import setMeetingReducer from '../app-Redux/reducers/SetMeeting';
import thunk from "redux-thunk"
const rootReducer = combineReducers({
    Login:loginReducer,
    Home:homeReducer,
    SetMeeting:setMeetingReducer
  });
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;
  