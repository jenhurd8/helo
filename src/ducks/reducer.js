const initialState = {
  username: "Test Person",
  id: 0,
  picture: "https://robohash.org/63.143.42.243.png"
};

export default function reducer(state = initialState, action) {
  //console.log(action.payload);
  switch (action.type) {
    // case "GET_USER_PENDING":
    //   return { ...state, isLoading: true };
    // case "GET_USER_FULFILLED":
    //   return { ...state, isLoading: false, user????: action.payload.data };
    // case "GET_USER_REJECTED":
    //   return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
