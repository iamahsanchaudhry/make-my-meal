import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-4">About Make My Meal</h1>
      <p className="text-lg mb-6">
        <strong>Make My Meal</strong> is your personal meal companion, designed to help you explore,
        discover, and enjoy delicious recipes from around the world. Whether you're a beginner in the
        kitchen or a seasoned home cook, our app provides a simple and delightful way to plan and make meals effortlessly.
      </p>

      <h2 className="text-2xl font-semibold mb-2">🍽 What We Offer</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Thousands of free recipes from multiple cuisines</li>
        <li>Detailed instructions with images and video tutorials</li>
        <li>Search by meal type, ingredient, or category</li>
        <li>Save your favorite meals for quick access</li>
        <li>Light and dark theme support for comfortable browsing</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">👨‍🍳 Our Mission</h2>
      <p className="mb-6">
        We aim to make cooking more enjoyable and accessible for everyone. Whether you're cooking for
        yourself, your family, or hosting friends, <strong>Make My Meal</strong> gives you the tools and inspiration
        to prepare something delicious with confidence.
      </p>

      <h2 className="text-2xl font-semibold mb-2">💡 Powered By</h2>
      <p className="mb-6">
        This app is built with React and uses <a href="https://www.themealdb.com/api.php" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">TheMealDB API</a> for fetching meals and recipe data.
      </p>

      <h2 className="text-2xl font-semibold mb-2">📬 Contact Us</h2>
      <p>
        Have feedback, ideas, or need support? Feel free to reach out at <a href="" className="text-blue-500 underline">contact</a>.
      </p>
    </div>
  );
}