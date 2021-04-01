import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, alertTypes, timeOut = 5000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertTypes, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
};
