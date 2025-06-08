import { div, span } from "framer-motion/client";

export default function SearchInput({ searchText, setSearchText }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start mt-10">
      <input
        type="text"
        placeholder="Search expenses"
        className="mt-6 sm:mt-0 border-gray-300 border-2 p-2 rounded-md w-full max-w-md opacity-60"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="cursor-pointer bg-[#E8EDF2] py-2 sm:ml-5 mt-5 px-4 rounded-md block sm:inline-block sm:mt-0 mx-auto"
        onClick={() => setSearchText("")}
      >
        Clear
      </button>
    </div>
  );
}
