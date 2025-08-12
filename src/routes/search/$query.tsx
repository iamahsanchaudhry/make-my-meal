import { createFileRoute } from '@tanstack/react-router'
import { SearchMealsByFirstLetter, SearchMealsByName } from '@/api/mealsAPI'
import SearchResult from '@/components/SearchResult'

export const Route = createFileRoute('/search/$query')({
  loader: async ({ params }) => {
    const { query } = params
    if (query.length === 1) {
      return await SearchMealsByFirstLetter(query) ?? []
    }
    return await SearchMealsByName(query) ?? []
  },
  component: SearchPage
})

function SearchPage() {
  const {query} = Route.useParams();
  const meals = Route.useLoaderData()
  return <>
  <a className='px-10 py-3'>Search Result: <b>{query}</b></a>
  <SearchResult meals={meals} />
  </>
}
