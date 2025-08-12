import { Input } from "@/components/ui/input";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useRef } from "react";

export default function SearchBar() {
  const debounceRef = useRef<number | null>(null);
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim();

    // Clear previous debounce
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = window.setTimeout(() => {
      if (query.length > 0) {
        // Simply navigate — the search results page will handle the API call
        navigate({ to: `/search/${query}` });
      }
    }, 500);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 mx-5 my-2 py-3 px-5 bg-blue-300 dark:bg-blue-800 rounded-[22px]">
      <div className="flex items-center h-10">
        <h2 className="font-bold">Find Your Favorite Recipe</h2>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative w-full max-w-sm">
          <Input
            type="search"
            placeholder="Search..."
            onChange={handleSearch}
            className="pl-10 pr-4 h-10 dark:text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>

        <button
          className="h-10 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 dark:bg-black text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          onClick={() => {
            const input = document.querySelector<HTMLInputElement>("input[type='search']");
            if (input && input.value.trim()) {
              navigate({ to: `/search/${input.value.trim()}` });
            }
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
