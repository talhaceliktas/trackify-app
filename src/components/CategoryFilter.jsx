import Button from "./Button";

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide pb-3">
      {[
        "All",
        "Food",
        "Transport",
        "Entertainment",
        "Health",
        "Education",
        "Clothing",
        "Other",
      ].map((value, index) => (
        <Button
          className={`px-3 py-2 text-[#4F7396] cursor-pointer border-b-2 font-bold ${
            value === selectedCategory ? "selected-category" : ""
          }`}
          key={index}
          category={value}
          setSelectedCategory={setSelectedCategory}
        >
          {value}
        </Button>
      ))}
    </div>
  );
}
