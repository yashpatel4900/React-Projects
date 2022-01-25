import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // This should be done in App.js file so that it changes dynamically and
  // whole ExpenseItem Component can be reused.

  // These constants are declared in JS so that then it can be used inside
  // HTML code to make it change dynamically
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  //   This was written here befor but now movinf it to new ExpenseDate.js
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //   const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      {/* This was written here before but now moving it to ExpenseDate.js */}
      {/* <div>
        This is also Valid
        // <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
