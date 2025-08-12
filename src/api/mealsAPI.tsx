import type { Meal } from "@/types/meal";
import axiosInstance from "./axiosInstance";
import type { Category, MealCategory } from "@/types/categoriesType";
import type { MealArea } from "@/types/AreaType";
import type { AreaMeal, AreaMeals } from "@/types/AreaMealsType";



export const getAllMeals = async (): Promise<Meal[]> => {
  const response = await axiosInstance.get<Meal[]>("/meals");
  return response.data;
};

export const getMealById = async (id: number): Promise<Meal> => {
  const response = await axiosInstance.get< {meals: Meal[] }>(`lookup.php?i=${id}`);
  return response.data.meals[0];
};

export const getMealOfTheDay = async (): Promise<Meal> => {
  const response = await axiosInstance.get<{ meals: Meal[] }>(`random.php`);
  return response.data.meals[0];
};

export const getAllCategories = async (): Promise<MealCategory[]> => {
  const response = await axiosInstance.get<Category>(`list.php?c=list`)
  return response.data.meals;
}

export const getAllAreas = async (): Promise<MealArea[]> => {
  const res = await axiosInstance.get<{ meals: MealArea[] }>("list.php?a=list");
  return res.data.meals;
};

export const getAreaMeals = async (area :string): Promise<AreaMeal[]> => {
  const res = await axiosInstance.get<{ meals: AreaMeal[] }>(`filter.php?a=${area}`);
  return res.data.meals;
};
