import { user_Request, user_Failure, user_Success } from "./Action";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case user_Request:
      return {
        ...state,
        loading: true,
      };
    case user_Success:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case user_Failure:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
