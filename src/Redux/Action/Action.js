export const getUsers = () => {
    return {
      type: "GET_USERS",
    };
  };
  export const addUsers=(data)=> {
     return{
      type: "ADD_USERS",
        payload: data
     }
  }
  export const removeUsers=(data)=> {
    return{
     type:"REMOVE_USERS",
     payload: data
    }
 }
 export const updateUsers=(data)=> {
  return{
   type: "UPDATE_USERS",
     payload: data
  }
}
 