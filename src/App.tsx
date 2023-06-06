import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import exp from "constants";

export const categories = ["Groceries", "Utilities", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      Id: 1,
      Description: "Milk",
      Amount: 5,
      Category: "Groceries",
    },
    {
      Id: 2,
      Description: "Milk",
      Amount: 15,
      Category: "Groceries",
    },
    {
      Id: 3,
      Description: "Couch",
      Amount: 35,
      Category: "Groceries",
    },
  ]);

  const onChange = (id: number) => {
    console.log("Delete ", id);
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.Category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <Form />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.Id !== id))}
      />
    </>
  );
}

export default App;
