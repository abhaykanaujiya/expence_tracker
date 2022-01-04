import React from "react";
import { connect } from "react-redux";
import {
  handleInputChange,
  handleAmountInputChange,
  handleSubmit,
  handleClearInput,
  handleEdit,
  handleChangeInput,
} from "../Actions/homeAction";

const input = {
  textEdit: false,
};

const Home = (props) => {
  const handleTextChange = (e) => {
    props.handleInputChange(e.target.value);
  };

  const handleAmountChange = (e) => {
    props.handleAmountInputChange(e.target.value);
  };
  const handleClick = () => {
    props.handleSubmit(props.expense, props.items, props.amount);
    props.handleClearInput();
  };
  console.log(props.expense, "list");

  const total = (data) => {
    let sum = 0;
    let i;
    for (i = 0; i < data.length; i++) {
      sum = sum + data[i].amount;
    }
    return sum;
  };
  const output = total(props.expense);

  const handleEdit = ({ id }) => {
    const findTodo = props.expense.find((todo) => todo.id === id);
    console.log(findTodo, "find todo");
    props.handleChangeInput(findTodo);

    // props.handleEdit();
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
          {!input.textEdit ? (
            <div>
              {props.expense.map((item) => (
                <div>
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginBottom: "10px",
                    }}
                  >
                    <div>name:{item.names}</div>
                    <div>amount:{item.amount}</div>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                  </li>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {props.expense.map((item) => (
                <input
                  type='text'
                  value={item.names}
                  onChange={(e) => e.preventDefault}
                />
              ))}
            </div>
          )}
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
  const { expense, items, amount, text } = HomeReducer;
  console.log(expense, "expense");
  console.log(items, "items");
  return {
    expense,
    items,
    amount,
    text,
  };
}

export default connect(mapStateToProps, {
  handleInputChange,
  handleAmountInputChange,
  handleSubmit,
  handleClearInput,
  handleEdit,
  handleChangeInput,
})(Home);
