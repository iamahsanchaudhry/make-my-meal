import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  const handleSearch = (event: { target: { value: any } }) => {
    const query = event.target.value;
    // Implement your search logic here, e.g., filter data, call API
    console.log("Searching for:", query);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start  gap-4 sm:gap-0 mx-5 sm:mx-5 my-2 py-3 px-5 sm:px-5 bg-blue-300 dark:bg-blue-800 rounded-[22px]">
      <div className="flex items-center h-10">
        <h2 className="font-bold">Find Your Favorite Recipe </h2>
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

        {/* Search Button matching height */}
        <button className="h-10 px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 dark:bg-black text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Search
        </button>
      </div>
    </div>
  );
}
