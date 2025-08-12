import { createFileRoute } from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import CustomLoader from "@/components/Loader";
import type { AreaMeal } from '@/types/AreaMealsType';
import { getAreaMeals } from '@/api/mealsAPI';
import AreaMealCard from '@/components/AreaMealCard';
export const Route = createFileRoute('/area/$areaName')({
  component: AreaPage
})

function AreaPage() {
  const { areaName } = useParams({ from: '/area/$areaName' })
  const [meals, setMeals] = useState<AreaMeal[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAreaMeals(areaName)
    .then((res)=>{
        setMeals(res);
    })
    .catch((error)=>{
        console.error(error)
    }).finally(()=>{
        setLoading(false);
    })
  }, [areaName])

  if (loading) return <CustomLoader />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{areaName} Meals</h1>
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
