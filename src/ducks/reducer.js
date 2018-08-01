import axios from "axios";

const USER = "USER";

const initialState = {
  username: "Test Person",
  id: 0,
  picture: "https://robohash.org/63.143.42.243.png"
};

export function user(userId, username, pic) {
  return {
    type: USER,
    payload: { userId, username, pic }
  };
}

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "USER_PENDING":
      return { ...state, isLoading: true };
    case "USER_FULFILLED":
      //check the username: action.payload.data not setup
      return { user: action.payload };
    case "USER_REJECTED":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
