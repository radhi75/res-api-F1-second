import { GET_PERSON } from "../ActionType/actionType";
import axios from "axios";
export const get_person = () => async (dispatch) => {
  try {
    const res = await axios.get("/person/get");
    dispatch({ type: GET_PERSON, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const add_person = (data) => async (dispatch) => {
  try {
    await axios.post("/person/add", data);
    dispatch(get_person());
  } catch (error) {
    console.log(error);
  }
};
export const delete_person = (id) => async (dispatch) => {
  try {
    await axios.delete(`/person/${id}`);
    dispatch(get_person());
  } catch (error) {
    console.log(error);
  }
};
export const edit_person = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/person/edit/${id}`, data);
    dispatch(get_person());
  } catch (error) {
    console.log(error);
  }
};
