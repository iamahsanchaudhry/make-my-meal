
import { Card } from "@/components/ui/card";
import type { JSX } from "react";

type Meal = {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strYoutube: string;
  [key: `strIngredient${number}`]: string | undefined;
  [key: `strMeasure${number}`]: string | undefined;
};

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps): JSX.Element {
  const ingredients: string[] = [];

  for (let i = 1; i <= 8; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
  <Card className="flex flex-col sm:flex-row w-full max-w-[760px] rounded-[22px] overflow-hidden shadow-md bg-white dark:bg-black">
    {/* Image */}
    <div className="w-full sm:w-[220px] h-[200px] sm:h-auto">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-between p-4 w-full relative">
      {/* Title + Category */}
      <div>
        <h2 className="text-lg font-bold">{meal.strMeal}</h2>
        <p className="text-sm text-gray-600 mt-1 mb-2">
          {meal.strCategory} - {meal.strArea}
        </p>

        {/* Ingredient Tags */}
        <div className="flex flex-wrap gap-2 text-sm">
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

      {/* Button at Bottom Right */}
      <div className="flex justify-end mt-4 sm:mt-0">
        <a
          href={meal.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md border text-black dark:text-white border-neutral-300 font-semibold bg-blue-300 dark:bg-blue-800 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        >
          See More
        </a>
      </div>
    </div>
  </Card>
);

}
