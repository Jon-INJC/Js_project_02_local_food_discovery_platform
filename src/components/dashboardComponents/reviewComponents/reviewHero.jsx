function ReviewHero() {
  return (
    <div className="container mt-7 flex flex-col gap-y-4 md:mt-0">
      <div className="flex items-start justify-between pb-5 border-b-2 border-outline-variant md:items-end">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl text-on-surface font-bold font-main-header">
            Reviews
          </h1>
          <p className="text-xs text-secondary md:text-sm md:max-w-full">
            See what visitors are saying about your restaurant and menu.
          </p>
        </div>
        <select
          name="date"
          id="date"
          className="hidden text-xs text-secondary px-3 py-2 border-2 border-secondary rounded-sm hover:cursor-pointer md:block"
        >
          <option value="">Last 30 Days</option>
        </select>
      </div>
    </div>
  );
}

export default ReviewHero;
