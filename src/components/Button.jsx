export default function Button({
  setSelectedCategory,
  children,
  category,
  className = "",
}) {
  return (
    <button
      className={`cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md ${className}`}
      onClick={() => setSelectedCategory(category)}
    >
      {children}
    </button>
  );
}
