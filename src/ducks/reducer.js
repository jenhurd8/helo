const USER = "USER";

const initialState = {
  username: "Test Person",
  password: "",
  id: 0,
  picture: "https://robohash.org/63.143.42.243.png",
  userData: []
};

export function user(username, pic) {
  return {
    type: USER,
    payload: username,
    pic
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

    default:
      return state;
  }
}
