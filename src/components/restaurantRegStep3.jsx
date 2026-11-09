import { set, useFormContext } from "react-hook-form";
import Error from "./error";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getRestaurantByName, setRestaurant } from "../api/restaurantAPI";
import { useContext, useState } from "react";
import Spinner from "./spinner";
import PopUpMessage from "./modalsAndMessages/popUpMessage";
import { RestaurantContext } from "../context_API/restaurantContextProvider";
function RegStep3() {
  const { setRestaurantValue } = useContext(RestaurantContext);
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState } = useFormContext();
  const { errors } = formState;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState({});

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(async () => {
      try {
        let restaurantData = await getRestaurantByName(data.restaurantName);
        if (restaurantData.length > 0) {
          setError("root", {
            type: "manual",
            message: "A restaurant was found with this name address.",
          });
          setIsSubmitting(false);
          setIsModalOpen(true);
          setConfirmationMessage({
            header: "Registration Failed!",
            message: "A restaurant was found with this name address.",
            type: "error",
          });
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
          return;
        }
        const payload = new FormData();
        for (const [key, value] of Object.entries(data)) {
          payload.append(key, value);
        }
        restaurantData = Object.fromEntries(await setRestaurant(payload));

        if (restaurantData) {
          setIsSubmitting(false);
          setConfirmationMessage({
            header: "Registration Successful!",
            message:
              "Your restaurant has been successfully registered. Redirecting you to your restaurant dashboard.",
            type: "success",
          });
          setIsModalOpen(true);
          setTimeout(() => {
            setRestaurantValue(restaurantData);
            navigate("/dashboard/overview");
            setIsModalOpen(false);
          }, 2000);
        }
      } catch (err) {
        setError("root", {
          type: "manual",
          message: err.message || "An unexpected error occurred",
        });
      }
    }, 2000);
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
          {errors.root && <Error text={errors.root.message} />}
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
            <input
              type="checkbox"
              id="termsAndConditions"
              {...register("termsAndConditions", {
                required: "You must accept the terms and conditions",
              })}
            />
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
              disabled={isSubmitting}
              type="button"
              onClick={() => navigate("/register/step2")}
              className={`px-4 py-2 border border-secondary font-bold font-main-header text-secondary ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-surface-variant"}`}
            >
              Back
            </button>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`flex items-center gap-2 px-4 py-2 bg-secondary text-on-tertiary cursor-pointer ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-surface-variant"}`}
            >
              {isSubmitting ? (
                <Spinner />
              ) : (
                <>
                  Submit <ArrowRight />
                </>
              )}
            </button>
          </div>
        </form>
        <PopUpMessage
          isOpen={isModalOpen}
          confirmationMessage={confirmationMessage}
        />
      </div>
    </>
  );
}

export default RegStep3;
