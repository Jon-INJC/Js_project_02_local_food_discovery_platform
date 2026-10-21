import { Search } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchEngine() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const executeSearch = () => {
    const query = inputRef.current?.value.trim();
    if (query) {
      navigate(`/explore?q=${encodeURIComponent(query)}`);
    } else {
      navigate("/explore");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeSearch();
    }
  };

  return (
    <div className="container flex flex-col items-center p-6 mx-auto mt-10 space-y-4 bg-surface-container-low rounded-md border-2 border-solid border-outline-variant">
      <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
        What are you craving?
      </h2>

      <div className="flex items-center gap-x-2 px-6 py-3 border-b-2 border-secondary">
        <Search className="w-5 h-5 text-secondary cursor-pointer" onClick={executeSearch} />
        <input
          ref={inputRef}
          className="w-100 border-none outline-none focus:ring-0"
          type="text"
          placeholder="Search cuisines, restaurants, or dishes..."
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="flex space-x-4 text-xs font-bold">
        <a
          href="#"
          className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
        >
          COFFEE
        </a>
        <a
          href="#"
          className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
        >
          FINE DINING
        </a>
        <a
          href="#"
          className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
        >
          BREAKFAST
        </a>
        <a
          href="#"
          className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
        >
          SUSHI
        </a>
        <a
          href="#"
          className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
        >
          VEGAN
        </a>
      </div>
    </div>
  );
}

export default SearchEngine;
