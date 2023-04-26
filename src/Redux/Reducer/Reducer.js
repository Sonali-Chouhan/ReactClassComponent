const initialState = {
  UserData: [
    { id: 1, userName: "sonali", userEmail: "sonali123@gmail.com" },
    { id: 2, userName: "mahima", userEmail: "mahima123@gmail.com" },
    { id: 3, userName: "nikita", userEmail: "nikita123@gmail.com" },
    { id: 4, userName: "ambalika", userEmail: "ambalika123@gmail.com" },
  ],
};
const Userreducer = function (state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
      };
    case "ADD_USERS":
      return {
        ...state,
        UserData: state.UserData.concat(action.payload),
      };
    case "REMOVE_USERS":
      return {
        ...state,
        UserData: state.UserData.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_USERS":
      return {
        ...state,
        UserData: state.UserData.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                userName: action.payload.userName,
                userEmail: action.payload.userEmail
              }
            : content
        )
      };
      // var items=state.UserData
      // items.splice(action.payload.id,1,{
      //   userName:action.payload.userName,
      //  })
      // return {
      //   ...state,
      //   UserData:[...items]
      //   };
    default:
      return state;
  }
};
export default Userreducer;
