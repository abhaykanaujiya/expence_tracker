import React, { useState } from "react";
import { connect } from "react-redux";
import {
  handleInputChange,
  handleAmountInputChange,
  handleSubmit,
  handleClearInput,
  handleSaveNewEdit,
} from "../Actions/homeAction";

const Home = (props) => {
  const [selectedId, setSelectId] = useState(-1);
  const [selectedIdName, setSelectIdName] = useState("");
  const [selectedIdAmount, setSelectIdAmount] = useState();

  const total = (data) => {
    let sum = 0;
    let i;
    for (i = 0; i < data.length; i++) {
      sum = sum + data[i].amount;
    }
    return sum;
  };
  const output = total(props.expense);

  const handleTextChange = (e) => {
    props.handleInputChange(e.target.value);
  };

  const handleAmountChange = (e) => {
    props.handleAmountInputChange(e.target.value);
  };
  const handleClick = () => {
    props.handleSubmit(props.expense, props.items, props.amount);
    props.handleClearInput();
    // props.updateTodo(props.items, props.editTodo.id, props.expense);
  };
  console.log(props.expense, "list");

  const handleEdit = (item, id) => {
    setSelectId(id);
    setSelectIdName(item.names);
    setSelectIdAmount(item.amount);
    console.log(selectedId, "selected id");
    // props.handleSelectedItem(id);

    //  props.handleSelectInputField(setSelectIdName, id, props.items);
  };
  console.log(props.selectedId, "edit todo");

  const handleSelectedInputChange = (e) => {
    setSelectIdName(e.target.value);
    console.log(selectedIdName, "slectedidname");
  };
  const handleSelectedAmountChange = (e) => {
    setSelectIdAmount(e.target.value);
    console.log(selectedIdAmount, "amount selected id");
  };

  const handleNewEdit = () => {
    setSelectIdAmount();
    setSelectId(-1);
    props.handleSaveNewEdit(
      props.expense,
      selectedId,
      selectedIdName,
      selectedIdAmount
    );
  };

  return (
    <div>
      <div className='inner' style={{ display: "flex" }}>
        <div style={{ border: "2px solid", width: "200px", height: "200px" }}>
          <h2>Total Expense</h2>
          <h3>
            <i>Rs-</i>
            {output}
          </h3>
        </div>
        <br />
        <div
          style={{
            border: "2px solid",
            width: "40vw",
            height: "200px",
            overflow: "scroll",
            display: "",
          }}
        >
          <h2>Expenses</h2>

          <div>
            {props.expense.map((item, index) => (
              <div>
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "10px",
                  }}
                >
                  {selectedId === index ? (
                    <input
                      type='text'
                      value={selectedIdName}
                      onChange={(e) => handleSelectedInputChange(e)}
                    />
                  ) : (
                    <div>{item.names}</div>
                  )}

                  <div>
                    amount:
                    <input
                      type='number'
                      value={item.amount}
                      onChange={(e) => handleSelectedAmountChange(e)}
                    />
                  </div>

                  <button
                    onClick={
                      index !== selectedId
                        ? () => handleEdit(item, index)
                        : () => handleNewEdit()
                    }
                  >
                    {index === selectedId ? "Save" : "Edit"}
                  </button>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          width: "61vw",
          marginTop: "10px",
        }}
      >
        <input
          type='text'
          value={props.items}
          placeholder='Enter Text'
          onChange={(e) => handleTextChange(e)}
        />
        <br></br>
        <input
          type='number'
          value={props.amount}
          placeholder='Enter Amount'
          onChange={(e) => handleAmountChange(e)}
        />
        <br />
        <button onClick={handleClick}>Add Transaction</button>
      </div>
    </div>
  );
};

function mapStateToProps({ HomeReducer }) {
  const { expense, items, amount, selectedId } = HomeReducer;

  return {
    expense,
    items,
    amount,
    selectedId,
  };
}

export default connect(mapStateToProps, {
  handleInputChange,
  handleAmountInputChange,
  handleSubmit,
  handleClearInput,
  handleSaveNewEdit,
})(Home);
