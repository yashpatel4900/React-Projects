import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

// You can see HTML code inside JS function code
// This is because of JSX - JavaScript XML Code
function App() {
  return (
    <div className="App">
      <h2>Let's get Started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
