import Button from "./Button";

export default function SortType({ setSortType, sortType }) {
  return (
    <div className="mb-5">
      <h1 className="font-bold mt-12 mb-4">Sort By</h1>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        <button
          className={`cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md ${
            sortType === "newest" ? "selected-sort" : ""
          }`}
          onClick={() => setSortType("newest")}
        >
          Newest
        </button>
        <button
          className={`cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md  ${
            sortType === "oldest" ? "selected-sort" : ""
          }`}
          onClick={() => setSortType("oldest")}
        >
          Oldest
        </button>
        <button
          className={`cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md ${
            sortType === "highest" ? "selected-sort" : ""
          }`}
          onClick={() => setSortType("highest")}
        >
          Highest Amount
        </button>
        <button
          className={`cursor-pointer bg-[#E8EDF2] py-1 px-4 rounded-md ${
            sortType === "lowest" ? "selected-sort" : ""
          }`}
          onClick={() => setSortType("lowest")}
        >
          Lowest Amount
        </button>
      </div>
    </div>
  );
}
