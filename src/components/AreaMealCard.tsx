import type { AreaMeal } from "@/types/AreaMealsType";
import { Link } from "@tanstack/react-router";

export default function AreaMealCard({
  idMeal,
  strMeal,
  strMealThumb,
}: AreaMeal) {
  const isShortName = strMeal.length <= 30;
  return (
    <div
      key={idMeal}
      className="border rounded-[22px] p-1 flex flex-col h-full"
    >
      <img src={strMealThumb} alt={strMeal} className="w-full rounded-[22px]" />
      <div
        className={`flex p-2 ${
          isShortName
            ? "flex-row justify-between items-start mt-2"
            : "flex-row justify-between items-end mt-2"
        } gap-2 flex-1`}
      >
        <p
          className={`font-semibold p-2 text-sm flex-1 ${
            isShortName ? "truncate" : "line-clamp-2"
          }`}
        >
          {strMeal}
        </p>
        <Link
          to={`/meals/${idMeal}`}
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-md border text-black dark:text-white border-neutral-300 font-semibold bg-blue-300 dark:bg-blue-800 text-xs sm:text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md whitespace-nowrap"
        >See More</Link>
      </div>
    </div>
  );
}
