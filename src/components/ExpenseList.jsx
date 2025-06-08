import { useEffect } from "react";
import Expense from "./Expense";

export default function ExpenseList({
  selectedCategory,
  sortType,
  expensesData,
  setExpensesData,
  searchText,
}) {
  const categoryImages = {
    Food: "food.jpg",
    Transport: "transport.png",
    Entertainment: "entertainment.jpg",
    Health: "health.jpg",
    Education: "education.webp",
    Clothing: "clothing.jpeg",
    Other: "other.avif",
  };

  useEffect(() => {
    async function fetchExpenses() {
      const res = await fetch(`http://localhost:5000/api/expenses`);
      const data = await res.json();
      setExpensesData(data);
    }

    fetchExpenses();
  }, []);

  const filteredAndSortedExpenses = expensesData
    .filter((expense) =>
      selectedCategory === "All" || selectedCategory === ""
        ? true
        : expense.category === selectedCategory
    )
    .filter((expense) =>
      expense.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortType === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortType === "lowest") {
        return a.amount - b.amount;
      } else if (sortType === "highest") {
        return b.amount - a.amount;
      }
      return 0;
    });

  const totalExpenses = filteredAndSortedExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="w-full flex flex-col gap-8 md:items-stretch items-center">
      {filteredAndSortedExpenses.map((expense) => (
        <Expense
          {...expense}
          categoryImages={categoryImages}
          key={expense._id}
          setExpensesData={setExpensesData}
        />
      ))}

      <h2 className="text-center text-gray-400">
        Total Expenses: ${totalExpenses.toFixed(2)}
      </h2>
    </div>
  );
}
