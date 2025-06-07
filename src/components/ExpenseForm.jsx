import { useState } from "react";

export default function ExpenseForm({ setExpensesData }) {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");

  async function addExpense(newExpense) {
    try {
      const response = await fetch("http://localhost:5000/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newExpense),
      });

      const data = await response.json();

      // Burada doğru şekilde, dizinin sonuna ekle
      setExpensesData((prev) => [...prev, data]);
    } catch (error) {
      console.error("Gider eklenirken hata oluştu:", error);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    if (!selectedCategory || !title || !number || Number(number) <= 0) return;
    const newExpense = {
      title,
      amount: Number(number),
      category: selectedCategory,
    };
    addExpense(newExpense);
    setTitle("");
    setNumber("");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl mb-4">Title</h1>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h1 className="text-xl mb-4 mt-5">Amount</h1>
        <input
          type="number"
          className="w-full border border-gray-300 rounded px-4 py-2"
          min={1}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <h1 className="text-xl mb-4 mt-5">Category</h1>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {[
            "Food",
            "Transport",
            "Entertainment",
            "Health",
            "Education",
            "Clothing",
            "Other",
          ].map((name, index) => (
            <option value={name} key={index}>
              {name}
            </option>
          ))}
        </select>
      </form>
      <button
        className="cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md self-end mt-16"
        onClick={submitForm}
      >
        Add Expense
      </button>
    </div>
  );
}
