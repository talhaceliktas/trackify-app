import { useRef, useEffect, useState } from "react";

export default function Expense({
  _id,
  title,
  amount,
  category,
  categoryImages,
  setExpensesData,
  date,
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  async function deleteExpense() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/expenses/${_id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Silme işlemi başarısız!");
      }

      // Silinen harcamayı state'ten kaldır
      setExpensesData((prev) => prev.filter((expense) => expense._id !== _id));
    } catch (error) {
      console.error("Silme sırasında hata oluştu:", error);
    }
  }

  return (
    <div
      ref={ref}
      key={_id}
      className={`flex justify-between transition-opacity duration-700 ease-in-out transform expense-div flex-col md:flex-row mb-16 md:mb-0 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mr-4">
        <div className="flex justify-start gap-x-2 w-full">
          <h1 className="font-medium">{title}</h1>
          <h1 className="text-gray-500">{formattedDate}</h1>
        </div>

        <p className="text-gray-300">{category}</p>
        <h2 className="mt-5">${amount}</h2>
      </div>
      <div>
        <img src={categoryImages[category]} alt="" style={{ width: "400px" }} />
        <button onClick={deleteExpense}>Delete</button>
      </div>
    </div>
  );
}
