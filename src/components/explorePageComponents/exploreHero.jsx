function ExploreHero() {
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
        <input
          className="w-100 underline underline-offset-3 border-none outline-none focus:ring-0"
          type="text"
          placeholder="Search cuisines, restaurants, or dishes..."
        />
        <select
          name="location"
          id="location"
          className="hidden underline underline-offset-4 border-none outline-none focus:ring-0 text-secondary md:inline-block"
        >
          <option value="">Current location</option>
        </select>
      </div>
      <div className="container flex space-x-6 mt-4 text-xs font-bold border-b border-outline-variant">
        <a
          href="#"
          className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
        >
          COFFEE
        </a>
        <a
          href="#"
          className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
        >
          FINE DINING
        </a>
        <a
          href="#"
          className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
        >
          BREAKFAST
        </a>
        <a
          href="#"
          className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
        >
          SUSHI
        </a>
        <a
          href="#"
          className="text-secondary hover:text-primary hover:underline hover:-mt-1 decoration-primary"
        >
          VEGAN
        </a>
      </div>
    </div>
  );
}

export default ExploreHero;
