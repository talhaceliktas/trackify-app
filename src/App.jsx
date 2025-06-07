import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import AddExpense from "./components/AddExpense";

export default function App() {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const [expensesData, setExpensesData] = useState([]);

  return (
    <>
      <Navbar />
      {showAddExpense ? (
        <AddExpense
          setShowAddExpense={setShowAddExpense}
          setExpensesData={setExpensesData}
        />
      ) : (
        <MainMenu
          setShowAddExpense={setShowAddExpense}
          expensesData={expensesData}
          setExpensesData={setExpensesData}
        />
      )}
    </>
  );
}
