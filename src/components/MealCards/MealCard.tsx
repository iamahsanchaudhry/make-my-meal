import { Card } from "@/components/ui/card";
import type { Meal } from "@/types/meal";
import { Link } from "@tanstack/react-router";
import type { JSX } from "react";

export default function MealCard({ meal }: { meal: Meal }): JSX.Element {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof Meal] as
      | string
      | undefined;
    const measure = meal[`strMeasure${i}` as keyof Meal] as string | undefined;

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ?? ""} ${ingredient}`.trim());
    }
  }

  return (
    <Card className="flex flex-col sm:flex-row w-full max-w-[760px] rounded-[22px] overflow-hidden shadow-md bg-white dark:bg-black">
      <div className="w-full sm:w-[220px] h-[200px] sm:h-auto">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between p-4 w-full relative">
        <div>
          <h2 className="text-lg font-bold">{meal.strMeal}</h2>
          <p className="text-sm text-gray-600 mt-1 mb-2">
            {meal.strCategory} - {meal.strArea}
          </p>

          <div className="flex flex-wrap my-2 gap-2 text-sm">
            {ingredients.map((item, index) => (
              <span
                key={index}
                className="bg-blue-300 dark:bg-blue-800 px-2 py-1 text-xs border border-neutral-300 rounded-[22px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end sm:mt-0">
          <Link
            to={`/meals/${meal.idMeal}`}
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border text-black dark:text-white border-neutral-300 font-semibold bg-blue-300 dark:bg-blue-800 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            See More
          </Link>
        </div>
      </div>
    </Card>
  );
}
