import MealCard from "./MealCard";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strYoutube: string;
};

interface SearchResultProps {
  meals: Meal[];
}

export default function SearchResult({ meals }: SearchResultProps) {
  return (
    <div className="flex flex-col items-center gap-6 p-5">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
