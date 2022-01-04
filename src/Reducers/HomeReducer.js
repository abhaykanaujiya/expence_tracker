const INITIAL_STATE = {
  expense: [],
  items: "",
  amount: 0,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload, "payload");

  switch (action.type) {
    case "name":
      return {
        ...state,
        items: action.payload,
      };
    case "amount":
      return {
        ...state,
        amount: action.payload,
      };
    case "submit":
      return {
        ...state,
        expense: [...action.payload],
      };
    case "edit":
      return {
        ...state,
        text: state.expense[action.payload],
      };
    case "addtext":
      return {
        ...state,
        text: action.payload,
      };
    case "clear_input":
      return {
        ...state,
        items: "",
        amount: "",
      };
    default:
      return state;
  }
};
export default HomeReducer;
