import Header from "./Header";
import SearchInput from "./SearchInput";
import CategoryFilter from "./CategoryFilter";
import SortType from "./SortType";
import ExpenseList from "./ExpenseList";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MainMenu({
  setShowAddExpense,
  expensesData,
  setExpensesData,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("newest");
  const [searchText, setSearchText] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto relative">
        <Header setShowAddExpense={setShowAddExpense} />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <hr className="text-gray-400 mt-3" />
        <SortType setSortType={setSortType} sortType={sortType} />
        <ExpenseList
          selectedCategory={selectedCategory}
          sortType={sortType}
          expensesData={expensesData}
          setExpensesData={setExpensesData}
          searchText={searchText}
        />
      </div>
    </motion.div>
  );
}
