import { createFileRoute } from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import CustomLoader from "@/components/Loader";
import {getCategoryMeals } from '@/api/mealsAPI';
import AreaMealCard from '@/components/MealCards/AreaMealCard';
import type { CategoryMeal } from '@/types/CategoryMealsType';
export const Route = createFileRoute('/category/$categoryName')({
  component: CategoryPage
})

function CategoryPage() {
  const { categoryName } = useParams({ from: '/category/$categoryName' })
  const [meals, setMeals] = useState<CategoryMeal[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCategoryMeals(categoryName)
    .then((res)=>{
        setMeals(res);
    })
    .catch((error)=>{
        console.error(error)
    }).finally(()=>{
        setLoading(false);
    })
  }, [categoryName])

  if (loading) return <CustomLoader />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{categoryName} Meals</h1>
      {meals?.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals?.map((meal) => (
            <AreaMealCard {...meal}  key={meal.idMeal}/>
          ))}
        </div>
      )}
    </div>
  )
}
