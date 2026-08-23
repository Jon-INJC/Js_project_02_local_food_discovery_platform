function RegStep1() {
  return (
    <>
      <div className="container max-w-125 mx-auto pt-10 flex flex-col gap-y-4 items-center">
        <div className="flex flex-col items-center gap-y-2">
            <p className="text-sm text-secondary font-bold">STEP 1 OF 3</p>
            <div className="w-50 h-1 bg-surface-variant rounded-full">
                <div className="w-1/3 h-1 bg-primary rounded-full"></div>
            </div>
        </div>
        <div className="flex flex-col gap-y-4 items-centers">
          <h1 className="text-4xl text-center text-on-surface font-bold font-main-header">
            Begin Your Journey with Aura
          </h1>
          <p className="text-sm text-center text-secondary">
            Introduce your culinary vision to our curated community. Let's start
            with the essentials.
          </p>
        </div>
        <form className="w-[90%] flex flex-col p-6 gap-y-5 bg-on-tertiary border-2 border-outline-variant">
          <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
            <label
              htmlFor="restaurantName"
              className="text-sm text-on-surface-variant font-bold"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              placeholder="The French Laundry"
              required
              className="border-none outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
            <label
              htmlFor="Category"
              className="text-sm text-on-surface-variant font-bold"
            >
              Cuisine / Category
            </label>
            <select id="Category" className="border-none outline-none focus:ring-0">
                <option value="">Select primary cuisine</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
            <label
              htmlFor="Location"
              className="text-sm text-on-surface-variant font-bold"
            >
              Location
            </label>
            <input
              type="text"
              id="Location"
              placeholder="Full street address"
              required
              className="border-none outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="discription"
              className="text-sm text-on-surface-variant font-bold"
            >
              About the Restaurant
            </label>
            <textarea name="discription" id="discription" maxLength={300} rows={3} className="border-2 border-outline-variant outline-none focus:ring-0"></textarea>
            <p className="text-xs text-secondary self-end">0 / 300 characters</p>
          </div>
          <div className="py-6 flex items-end justify-end">
            <button className="px-4 py-2 bg-secondary text-on-tertiary cursor-pointer">Continue <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegStep1;
