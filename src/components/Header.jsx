import Button from "./Button";

export default function Header({ setShowAddExpense }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-medium">Expenses</h1>
      <button
        className="cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md"
        onClick={() => setShowAddExpense(true)}
      >
        Add Expense
      </button>
    </div>
  );
}
