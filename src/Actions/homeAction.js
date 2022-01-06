import { v4 as uuidv4 } from "uuid";

export const handleInputChange = (data) => {
  console.log(data, "hello data");

  return (dispatch) => {
    dispatch({ type: "name", payload: data });
  };
};

export const handleAmountInputChange = (data) => {
  return (dispatch) => {
    dispatch({ type: "amount", payload: data });
  };
};

export const handleSubmit = (data, items, amount) => {
  console.log(data, "iddddddd");

  return (dispatch) => {
    dispatch({
      type: "submit",
      payload: [
        ...data,
        { id: uuidv4(), names: items, amount: parseInt(amount) },
      ],
    });
  };
};

// export const handleSelectedItem = (index) => {
//   console.log(index, "handle ID");
//   return (dispatch) => {
//     dispatch({ type: "edit-todo", payload: index });
//   };
// };
export const handleSaveNewEdit = (expense, id, name, amount) => {
  console.log(expense, id, name, amount, "handleSaveNewEdit");
  return (dispatch) => {
    const newList = expense;
    newList.map((data, index) => {
      if (index === id) {
        console.log("inside handleSaveNewEdit");
        newList[index] = { names: name, amount };
      }
    });
    console.log(newList, "handleSaveNewEdit new");
    dispatch({ type: "save-new-edit", payload: newList });
  };
};
// export const handleNewInputTextChange = (data) => {
//   return (dispatch) => {
//     dispatch({ type: "new-text", payload: data });
//   };
// };
// export const handleSelectInputField = (expense, index, items) => {
//   return (dispatch) => {
//     //      expense.map((data) => {
//     //       if (data.id === index) {
//     // data.names
//     //       }
//     //     });
//     dispatch({ type: "selected-input-field", payload: "" });
//   };
// };
export const handleClearInput = () => {
  return (dispatch) => {
    dispatch({
      type: "clear-input",
    });
  };
};
