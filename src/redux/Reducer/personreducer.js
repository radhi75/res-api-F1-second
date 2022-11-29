import { GET_PERSON } from "../ActionType/actionType";

const initialState = {
  person: [],
};

const personreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PERSON:
      return { ...state, person: payload.persons };

    default:
      return state;
  }
};
export default personreducer;
