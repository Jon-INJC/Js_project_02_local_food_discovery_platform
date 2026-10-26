import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ExploreHero() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Initialize local input state from the URL (e.g., /explore?q=sushi)
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  // 2. Debounce the URL update
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (query.trim()) {
          newParams.set("q", query.trim());
        } else {
          newParams.delete("q"); // Clean up URL if input is empty
        }
        return newParams;
      });
    }, 400); // 400ms delay

    // Cleanup timer on every keystroke
    return () => clearTimeout(timer);
  }, [query, setSearchParams]);

  function handleCategoryClick(category) {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      if (newParams.get("category") === category) {
        // Clicking an active category removes the filter.
        newParams.delete("category");
      } else {
        newParams.set("category", category);
      }

      return newParams;
    });
  }
  return (
    <div className="container flex flex-col">
      <div className="hidden md:flex md:flex-col md:space-y-2">
        <h1 className="font-bold font-main-header text-5xl text-left text-on-surface">
          Discover Extraordinary Culinary Experiences
        </h1>
        <p className="max-w-md text-center text-secondary md:text-left">
          Curated selections tailored to your palate.
        </p>
      </div>

      <div className="flex justify-between md:hidden">
        <h1 className="max-w-md font-bold font-main-header text-5xl text-left text-on-surface">
          Explore
        </h1>
        <select
          name="location"
          id="location"
          className="border-none outline-none focus:ring-0"
        >
          <option value="">Current location</option>
        </select>
      </div>
      <div className="container flex items-center justify-between mt-4 ">
      <div className="flex items-center w-full px-4 py-2 space-x-2 border-b border-on-surface">
        <input
          className="w-100 border-none outline-none focus:ring-0"
          type="text"
          placeholder="Search cuisines, restaurants, or dishes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
        <select
          name="location"
          id="location"
          className="hidden underline underline-offset-4 border-none outline-none focus:ring-0 text-secondary md:inline-block"
        >
          <option value="">Current location</option>
        </select>
      </div>
      <div className="container flex space-x-6 mt-4 text-xs font-bold border-b border-outline-variant">
        {["Nordic", "Modern European", "Mediterranean", "Café", "VEGAN"].map((cat) => {
          const isActive = searchParams.get("category:contains") === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary pb-2 ${
                isActive ? "text-primary underline -mt-1" : ""
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreHero;
