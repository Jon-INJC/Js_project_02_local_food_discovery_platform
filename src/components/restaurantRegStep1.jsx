import { useForm } from "react-hook-form";
import Error from "./error";
function RegStep1() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form is Submitted", data);
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-[90%] flex flex-col p-6 gap-y-5 bg-on-tertiary border-2 border-outline-variant"
        >
          <div className="flex flex-col gap-y-2">
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
              {...register("restaurantName", {
                required: {
                  value: true,
                  message: "Restaurant Name is Required",
                },
              })}
              className="border-b-2 border-outline-variant outline-none focus:ring-0"
            />
            <Error text={errors.restaurantName?.message} />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="Category"
              className="text-sm text-on-surface-variant font-bold"
            >
              Cuisine / Category
            </label>
            <input
              list="items-list"
              id="category"
              placeholder="Select or type..."
              required
              {...register("category", {
                required: {
                  value: true,
                  message: "Restaurant category is Required",
                },
              })}
              className="border-b-2 border-outline-variant outline-none focus:ring-0"
            />
            <Error text={errors.category?.message} />
            <datalist id="items-list">
              <option value="Apple"></option>
              <option value="Banana"></option>
              <option value="Cherry"></option>
            </datalist>
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="location"
              className="text-sm text-on-surface-variant font-bold"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Full street address"
              required
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is Required",
                },
              })}
              className="border-b-2 border-outline-variant outline-none focus:ring-0"
            />
            <Error text={errors.location?.message} />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="discription"
              className="text-sm text-on-surface-variant font-bold"
            >
              About the Restaurant
            </label>
            <textarea
              id="discription"
              maxLength={300}
              rows={3}
              {...register("discription")}
              className="border-2 border-outline-variant outline-none focus:ring-0"
            ></textarea>
            <p className="text-xs text-secondary self-end">
              0 / 300 characters
            </p>
          </div>
          <div className="py-6 flex items-end justify-end">
            <button className="px-4 py-2 bg-secondary text-on-tertiary cursor-pointer">
              Continue <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegStep1;
