// src/routes/meals/$mealId.tsx
import IngredientsBadge from "@/components/MealCards/IngredientsBadge";
import { createFileRoute } from "@tanstack/react-router";
import type { Meal } from "@/types/meal";
import { useEffect, useState } from "react";
import { getMealById } from "@/api/mealsAPI";
import CustomLoader from "@/components/Loader";

export const Route = createFileRoute("/meals/$mealId")({
  component: MealDetailsPage,
});

function MealDetailsPage() {
  const { mealId } = Route.useParams();
  const [meal, setMeal] = useState<Meal>();
  const [loading, SetLoading] = useState(true);
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    getMealById(mealId)
      .then((res) => {
        setMeal(res);
        console.log(res);
        const ingre: string[] = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = (res as any)[`strIngredient${i}`];
          const measure = (res as any)[`strMeasure${i}`];

          if (ingredient && ingredient.trim()) {
            ingre.push(`${measure} ${ingredient}`.trim());
          }
        }
        setIngredients(ingre);
        SetLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meal:", error);
        SetLoading(false);
      });
  }, []);

  if (loading) return <CustomLoader />;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{meal?.strMeal}</h1>

      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="rounded-[22px] w-full max-h-[400px] object-cover shadow-lg"
      />
      <div className="text-sm text-gray-500 dark:text-white flex flex-wrap gap-4 mt-2">
        <span>
          Category: <strong>{meal?.strCategory}</strong>
        </span>
        <span>
          Area: <strong>{meal?.strArea}</strong>
        </span>
        {meal?.strTags && (
          <span>
            Tags:{" "}
            <span className="italic text-purple-600">
              {meal?.strTags.split(",").join(", ")}
            </span>
          </span>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <div className="flex flex-wrap gap-2 my-4">
          {ingredients.map((item, index) => (
            <IngredientsBadge item={item} key={index} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="whitespace-pre-line leading-relaxed text-gray-800">
          {meal?.strInstructions}
        </p>
      </div>

      {/* YouTube Video */}
      {meal?.strYoutube && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Watch on YouTube</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
            title={meal.strMeal}
            allowFullScreen
            className="rounded-[22px] shadow-md"
          ></iframe>
        </div>
      )}
    </div>
  );
}
