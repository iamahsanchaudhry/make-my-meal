// src/routes/meals/$mealId.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/meals/$mealId')({
  component: MealDetailsPage,
})

function MealDetailsPage() {
  const { mealId } = Route.useParams()

  // Simulate API call (replace with your actual fetch)
  // You can also use useLoader if you want SSR or async data
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Details</h1>
      <p>Showing details for Meal ID: <strong>{mealId}</strong></p>

      {/* Optional: Fetch and render full meal data here */}
    </div>
  )
}
