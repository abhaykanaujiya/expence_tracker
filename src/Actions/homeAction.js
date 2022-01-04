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
export const handleChangeInput = (data) => {
  console.log(data, "handle ID");
};
export const handleClearInput = () => {
  return (dispatch) => {
    dispatch({
      type: "clear_input",
    });
  };
};

export const handleEdit = (key) => {
  console.log(key, "select");
  return (dispatch) => {
    dispatch({ type: "edit", payload: key });
  };
};
export const addText = (value) => {
  return (dispatch) => {
    dispatch({ type: "addtext", payload: value });
  };
};
