import type { Meal } from "@/types/meal";
import axiosInstance from "./axiosInstance";



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
