const USER = "USER";
const LOGOUT = "LOGOUT";

const initialState = {
  username: "Test Person",
  password: "",
  id: 0,
  picture: "https://robohash.org/63.143.42.243.png"
};

// export function user(username, pic) {
//   return {
//     type: USER,
//     payload: username,
//     pic
//   };
// }

export function user(username) {
  return {
    type: USER,
    payload: username
  };
}

export function logout() {
  console.log("logging out");
  return {
    type: LOGOUT,
    payload: null
  };
}

export default function reducer(state = initialState, action) {
  console.log("action.payload " + action.payload);

  switch (action.type) {
    case "USER_PENDING":
      console.log("pending");
      return { ...state };
    case "USER":
      console.log("fulfilled");
      console.log(action.payload);
      return Object.assign({}, state, {
        username: action.payload,
        picture: "https://robohash.org/" + action.payload
      });
    case "USER_REJECTED":
      console.log("rejected");
      return { ...state, error: action.payload };
    case "LOGOUT":
      console.log("logout");
      return Object.assign({}, state, {
        username: "",
        picture: "",
        password: "",
        id: 0
      });
    default:
      return state;
  }
}
