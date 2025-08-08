import { Link } from "@tanstack/react-router";
import { BackgroundGradient } from "./ui/background-grandient";
import IngredientsBadge from "./IngredientsBadge";
import { useEffect, useState } from "react";
import { getMealOfTheDay } from "@/api/mealsAPI";
import type { Meal } from "@/types/meal";
import Loader from "./Loader";

export function MealForYou() {
  const [meal,setMeal] = useState<Meal>();
  const [loading,SetLoading] = useState(true);
  const steps = meal?.strInstructions
    .split("\r\n")
    .filter((step) => step.trim() !== "");

  const firstTwoSteps = steps?.slice(0, 2);

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

 useEffect(() => {
    getMealOfTheDay()
      .then((data) => {
        console.log(data);
        setMeal(data);
        SetLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meal:", error);
      });
  }, []);

  if(loading) return <Loader />;

  return (
    <div className="m-5">
      <BackgroundGradient className="rounded-[22px] m-1 p-0 sm:p-0 bg-white dark:bg-zinc-900">
        {meal?
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-1">
          <img
            src={meal.strMealThumb}
            alt="food"
            width={500}
            height={500}
            className="rounded-[22px] object-cover w-full md:w-1/2"
          />
          <div className="flex flex-col w-full md:w-1/2 text-start p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-2">
              Meal For You
            </h1>
            <div className="flex flex-col text-lg font-bold justify-around md:flex-row w-full gap-4 bg-blue-300 dark:bg-blue-800 rounded-[22px] px-4 py-2 my-4">
              <p>Name: {meal?.strMeal}</p>
              <p>Category: {meal?.strCategory}</p>
              <p>Area: {meal?.strArea}</p>
            </div>
            <h1 className="text-2xl font-bold">Main Ingredient</h1>
            <div className="flex flex-wrap gap-2 my-4">
              {getIngredients(meal).map((item, index) => (
                <IngredientsBadge item ={item} key ={index} />
              ))}
            </div>

            {firstTwoSteps?.map((step, idx) => (
              <p
                key={idx}
                className="mb-2 text-neutral-700 dark:text-neutral-300 sm:text-sm lg:text-lg md:text-md"
              >
                {step}
              </p>
            ))}
            <Link
              to={`/meals/${meal?.idMeal}`}
              className="p-[3px] lg:m-2 relative rounded-[25px] lg:absolute lg:bottom-0 lg:right-0 lg:w-[300px] inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[22px]" />
              <div className="px-8 py-2 bg-black rounded-[22px] relative group transition duration-200 text-white hover:bg-transparent flex items-center justify-center text-center">
                See More
              </div>
            </Link>
          </div>
        </div>: <div>No Meal</div>}
      </BackgroundGradient>
    </div>
  );
}
