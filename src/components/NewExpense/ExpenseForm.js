import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''

  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    // setUserInput = ((prevState)  => {
    //     return{...prevState, enteredTitle: event.target.value}

    // });
  };
  const amoutChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })

    // setUserInput = ((prevState) => {
    //     return{...prevState, enteredAmount: event.target.value}

    // });
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // })

    // setUserInput = ((prevState)  => {
    //     return{...prevState, enteredDate: event.target.value}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    //------- AFTER SUBMITTING DELETING THE DATA ---------------------//
    setEnteredTitle('');
    setEnteredAmount('');
    setEnterDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value = {enteredTitle} onChange={titleChangeHandler} ></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}      //---AFTER SUBMITTING DELETING THE DATA
            onChange={amoutChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
