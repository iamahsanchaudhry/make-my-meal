// src/routes/meals/$mealId.tsx
import IngredientsBadge from '@/components/IngredientsBadge';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meals/$mealId')({
  component: MealDetailsPage,
})



function MealDetailsPage() {
  const { mealId } = Route.useParams()
const meals = {
  meals: [
    {
      idMeal: "52771",
      strMeal: "Spicy Arrabiata Penne",
      strMealAlternate: null,
      strCategory: "Vegetarian",
      strArea: "Italian",
      strInstructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      strTags: "Pasta,Curry",
      strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
      strIngredient1: "penne rigate",
      strIngredient2: "olive oil",
      strIngredient3: "garlic",
      strIngredient4: "chopped tomatoes",
      strIngredient5: "red chilli flakes",
      strIngredient6: "italian seasoning",
      strIngredient7: "basil",
      strIngredient8: "Parmigiano-Reggiano",
      strIngredient9: "",
      strMeasure1: "1 pound",
      strMeasure2: "1/4 cup",
      strMeasure3: "3 cloves",
      strMeasure4: "1 tin",
      strMeasure5: "1/2 teaspoon",
      strMeasure6: "1/2 teaspoon",
      strMeasure7: "6 leaves",
      strMeasure8: "sprinkling",
    },
  ],
};
  const meal = meals.meals[0];

  // Extract ingredients and measures
  const ingredients: string[] = [];

for (let i = 1; i <= 20; i++) {
  const ingredient = (meal as any)[`strIngredient${i}`];
  const measure = (meal as any)[`strMeasure${i}`];

  if (ingredient && ingredient.trim()) {
    ingredients.push(`${measure} ${ingredient}`.trim());
  }
}

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-[22px] w-full max-h-[400px] object-cover shadow-lg"
      />
      <div className="text-sm text-gray-500 dark:text-white flex flex-wrap gap-4 mt-2">
        <span>Category: <strong>{meal.strCategory}</strong></span>
        <span>Area: <strong>{meal.strArea}</strong></span>
        {meal.strTags && (
          <span>
            Tags:{" "}
            <span className="italic text-purple-600">
              {meal.strTags.split(",").join(", ")}
            </span>
          </span>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <div className="flex flex-wrap gap-2 my-4">
          {ingredients.map((item, index) => (
            // <li key={index} className="text-gray-700">{item}</li>
            <IngredientsBadge item={item} key={index} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="whitespace-pre-line leading-relaxed text-gray-800">
          {meal.strInstructions}
        </p>
      </div>

      {/* YouTube Video */}
      {meal.strYoutube && (
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
