import { useForm } from "react-hook-form";
import Error from "./error";
function RegStep3() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted.", data);
  };

  return (
    <>
      <div className="container max-w-175 mx-auto pt-10 flex flex-col gap-y-4 items-center">
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-sm text-secondary font-bold">STEP 3 OF 3</p>
          <div className="w-50 h-1 bg-surface-variant rounded-full">
            <div className="w-full h-1 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <h1 className="text-4xl text-center text-on-surface font-bold font-main-header">
            Final Touches
          </h1>
          <p className="text-sm text-center text-on-surface-variant">
            Your culinary story starts here. Complete your profile to set the
            stage.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-[90%] flex flex-col p-6 gap-y-5 bg-on-tertiary border-2 border-outline-variant"
        >
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="ownerName"
              className="text-sm text-on-surface-variant font-bold"
            >
              Owner/Manager Name
            </label>
            <input
              type="text"
              id="ownerName"
              placeholder="Jane Doe"
              required
              {...register("ownerName", {
                required: {
                  value: true,
                  message: "Owner Name is Required",
                },
              })}
              className="border-b-2 border-outline-variant outline-none focus:ring-0"
            />
            <Error text={errors.ownerName?.message} />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="dashPassword"
              className="text-sm text-on-surface-variant font-bold"
            >
              Dashboard Password
            </label>
            <input
              type="password"
              id="dashPassword"
              placeholder="*******"
              required
              {...register("dashPassword", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
              })}
              className="border-b-2 border-outline-variant outline-none focus:ring-0"
            />
            <Error text={errors.dashPassword?.message} />
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="operationalHours"
              className="text-sm text-on-surface-variant font-bold"
            >
              Operating Hours summary
            </label>
            <input
              type="text"
              id="operationalHours"
              placeholder="e.g., Tue-Sun, 5 PM - 11 PM"
              className="border-b-2 border-outline-variant outline-none focus:ring-0"
            />
            <p className="text-xs text-secondary">
              You can set detailed daily hours later in the dashboard.
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <input type="checkbox" id="termsAndConditions" required />
            <label
              htmlFor="termsAndConditions"
              className="text-sm text-on-surface-variant font-bold"
            >
              I agree to the{" "}
              <a href="http://" className="text-primary">
                Terms & Conditions
              </a>{" "}
              and confirm the information provided is accurate.
            </label>
          </div>
          <div className="flex justify-between pt-6">
            <button
              type="button"
              className="px-8 py-4 border border-secondary font-bold font-main-header"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-10 py-4 bg-secondary text-on-tertiary font-bold font-main-header"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegStep3;
