import { motion } from "framer-motion";
import ExpenseForm from "./ExpenseForm";

export default function AddExpense({ setShowAddExpense, setExpensesData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto relative">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium">Add Expense</h1>
          <button
            className="cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md"
            onClick={() => setShowAddExpense(false)}
          >
            Back to Expenses
          </button>
        </div>
        <ExpenseForm setExpensesData={setExpensesData} />
      </div>
    </motion.div>
  );
}
