const INITIAL_STATE = {
  expense: [
    { names: "book", amount: 290 },
    { names: "pen", amount: 10 },
  ],
  items: "",
  amount: 0,
  selectedId: null,
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
    case "edit-todo":
      return {
        ...state,
        selectedId: action.payload,
      };
    case "save-new-edit":
      return {
        ...state,
        expense: [...action.payload],
      };
    case "clear-input":
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
