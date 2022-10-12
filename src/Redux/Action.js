export const user_Request = "user_Request";
export const user_Success = "user_Success";
export const user_Failure = "user_Failure";

export const fetchUserRequest = () => {
  return {
    type: user_Request,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: user_Success,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: user_Failure,
    payload: error,
  };
};

// doen't need to be pure function
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((actualData) => {
        const users = actualData;
        dispatch(fetchUserSuccess(users))
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg))
      });
  };
};
