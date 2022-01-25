import "./ExpenseItem.css";

function ExpenseItem(props) {
  // This should be done in App.js file so that it changes dynamically and
  // whole ExpenseItem Component can be reused.

  // These constants are declared in JS so that then it can be used inside
  // HTML code to make it change dynamically
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
