"use client";

import { BackgroundGradient } from "./ui/background-grandient";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealAlternate?: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
   strCreativeCommonsConfirmed: string  | null,
   dateModified: string | null;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
};

export function MealOfTheDayCard() {
  const data: { meals: Meal[] } = {
    meals: [
      {
        idMeal: "52802",
        strMeal: "Fish pie",
        strMealAlternate: null,
        strCategory: "Seafood",
        strArea: "British",
        strInstructions:
          "01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large saut\u00e9 pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190\u00b0C/fan170\u00b0C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
        strTags: "Fish,Pie,Breakfast,Baking",
        strYoutube: "https://www.youtube.com/watch?v=2sX4fCgg-UI",
        strIngredient1: "Floury Potatoes",
        strIngredient2: "Olive Oil",
        strIngredient3: "Semi-skimmed Milk",
        strIngredient4: "White Fish Fillets",
        strIngredient5: "Plain flour",
        strIngredient6: "Nutmeg",
        strIngredient7: "Double Cream",
        strIngredient8: "Jerusalem Artichokes",
        strIngredient9: "Leek",
        strIngredient10: "Prawns",
        strIngredient11: "Parsley",
        strIngredient12: "Dill",
        strIngredient13: "Lemon",
        strIngredient14: "Gruyère",
        strIngredient15: "Lemon",
        strIngredient16: "",
        strIngredient17: "",
        strIngredient18: "",
        strIngredient19: "",
        strIngredient20: "",
        strMeasure1: "900g",
        strMeasure2: "2 tbsp",
        strMeasure3: "600ml",
        strMeasure4: "800g",
        strMeasure5: "1 tbsp",
        strMeasure6: "Grating",
        strMeasure7: "3 tbsp",
        strMeasure8: "200g",
        strMeasure9: "1 finely sliced",
        strMeasure10: "200g peeled raw",
        strMeasure11: "Large handful",
        strMeasure12: "Handful",
        strMeasure13: "Grated zest of 1",
        strMeasure14: "25g grated",
        strMeasure15: "Juice of 1",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "",
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
      },
    ],
  };

  const steps = data.meals[0].strInstructions
    .split("\r\n")
    .filter((step) => step.trim() !== "");

  const firstTwoSteps = steps.slice(0, 2);

  const getIngredients = (meal: Meal): string[] => {
    const ingredients: string[] = [];

    for (let i = 1; i <= 8; i++) {
      const key = `strIngredient${i}` as keyof Meal;
      const ingredient = meal[key];
      if (ingredient && ingredient.trim()) {
        ingredients.push(ingredient.trim());
      }
    }

    return ingredients;
  };

  return (
    <div className="m-5">
      <BackgroundGradient className="rounded-[22px] m-1 p-0 sm:p-0 bg-white dark:bg-zinc-900">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-1">
          {/* Image on the left */}
          <img
            src={`https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg`}
            alt="food"
            width={500}
            height={500}
            className="rounded-[22px] object-cover w-full md:w-1/2"
          />
          <div className="flex flex-col w-full md:w-1/2 text-start p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-2">
              Meal of the Day
            </h1>
            <div className="flex flex-col text-lg font-bold justify-around md:flex-row w-full gap-4 bg-blue-300 dark:bg-blue-800 rounded-[22px] px-4 py-2 my-4">
              <p>Name: {data.meals[0].strMeal}</p>
              <p>Category: {data.meals[0].strCategory}</p>
              <p>Area: {data.meals[0].strArea}</p>
            </div>
            <h1 className="text-2xl font-bold">Main Ingredient</h1>
            <div className="flex flex-wrap gap-2 my-4">
              {getIngredients(data.meals[0]).map((item, index) => (
                <div
                  key={index}
                  className="inline-flex bg-blue-300 dark:bg-blue-800 rounded-[22px] px-3 py-1 text-md sm:text-sm"
                >
                  <h3 className="font-semibold">{item}</h3>
                </div>
              ))}
            </div>

            {firstTwoSteps.map((step, idx) => (
              <p
                key={idx}
                className="mb-2 text-neutral-700 dark:text-neutral-300 sm:text-sm lg:text-lg md:text-md"
              >
                {step}
              </p>
            ))}

            <button className="p-[3px] lg:m-2 relative rounded-[25px] lg:absolute lg:bottom-0 lg:right-0 lg:w-[300px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[22px]" />
              <div className="px-8 py-2 bg-black rounded-[22px] relative group transition duration-200 text-white hover:bg-transparent">
                See More
              </div>
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
