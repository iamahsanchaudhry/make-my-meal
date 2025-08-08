export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealAlternate?: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;

  // Ingredient and Measure dynamic fields (optional, can be null/empty)
  [key: `strIngredient${number}`]: string | null | undefined;
  [key: `strMeasure${number}`]: string | null | undefined;
};
