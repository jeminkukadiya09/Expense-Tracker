import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //----- 3rd WAT TO APPLY CONDITION [LOGIC WRITTEN IN COMPONENT FUNCTION ITSELF]

  // let expensesContent = <p>NO Expenses Found</p>

  // if(filteredExpenses.length > 0){
  //   expensesContent =filteredExpenses.map((expenses) => (
  //     <ExpenseItem
  //     key={expenses.id}     //---- for uniquly identity [if we can't use this that time expense add bottom in the list]
  //       title={expenses.title}
  //       amount={expenses.amount}
  //       date={expenses.date}
  //     />

    
    
  //   ))};
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* {expensesContent} */}
        <ExpensesList items={filteredExpenses}/>  


        {/* {filteredExpenses.length === 0 ? <p>NO EXPENSES FOUND</p> : filteredExpenses.map((expenses) => (
          <ExpenseItem
          key={expenses.id}     //---- for uniquly identity [if we can't use this that time expense add bottom in the list]
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
           */}

            {/* -----------SECOND WWAT TO APPLY CONDITION---------------*/}


      {/* {filteredExpenses.length === 0 && <p>NO EXPENSES FOUND</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenses) => (
          <ExpenseItem
          key={expenses.id}     //---- for uniquly identity [if we can't use this that time expense add bottom in the list]
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />

        
        
        ))} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
        
      </Card>
    </div>
  );
};
export default Expenses;
