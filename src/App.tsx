import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import exp from "constants";
import categories from "./ExpenseCategory";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 5,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Milk",
      amount: 15,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Couch",
      amount: 35,
      category: "Groceries",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([
              ...expenses,
              { ...expense, id: expenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
