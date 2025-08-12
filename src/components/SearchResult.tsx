import type { Meal } from "@/types/meal";
import MealCard from "./MealCards/MealCard";

interface SearchResultProps {
  meals: Meal[];
}

export default function SearchResult({ meals }: SearchResultProps) {
    if (!meals || meals.length === 0) {
    return <p className="text-center text-gray-500">No meals found</p>;
  }
  return (
    <div className="flex flex-col items-center gap-6 p-5">
      {meals?.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
