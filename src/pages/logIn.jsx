import AltFooter from "../components/altFooter";
import { ArrowRight } from "lucide-react";
import { set, useForm } from "react-hook-form";
import Error from "../components/error";
import { useContext, useState } from "react";
import { UserContext } from "../context_API/userContextProvider";
import { getUsers } from "../api/authAPI";
import { getRestaurantByOwnerId } from "../api/restaurantAPI";
import { RestaurantContext } from "../context_API/restaurantContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import PopUpMessage from "../components/modalsAndMessages/popUpMessage";
import Spinner from "../components/spinner";
function LogIn() {
  const navigate = useNavigate();
  const { setUserValue } = useContext(UserContext);
  const { setRestaurantValue } = useContext(RestaurantContext);
  const { register, handleSubmit, setError, formState } = useForm();
  const { errors } = formState;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState({});

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(async () => {
      try {
        const userData = await getUsers(data.email);
        if (!userData) {
          // Set error on the email field specifically
          setError("email", {
            type: "manual",
            message: "No account found with this email address.",
          });
          setIsSubmitting(false);
          setIsModalOpen(true);
          setConfirmationMessage({
            header: "Login Failed!",
            message: "No account found with this email address.",
            type: "error",
          });
          setTimeout(() => {
            setIsModalOpen(false);
          }, 2000);
          return;
        }

        setUserValue(userData);
        if (userData.role == "restaurant_owner") {
          const restaurant = await getRestaurantByOwnerId(userData.id);
          setIsSubmitting(false);
          setConfirmationMessage({
            header: "Login Successful!",
            message: "Welcome back! Redirecting you to your restaurant dashboard.",
            type: "success",
          });
          setIsModalOpen(true);
          setTimeout(() => {
            setRestaurantValue(restaurant);
            navigate("/dashboard/overview");
            setIsModalOpen(false);
          }, 2000);
        }
        console.log("Logged in user:", userData);
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
      <div className="min-h-screen flex flex-col bg-surface-bright">
      <main className="grow p-6 md:p-10">
        <section className="w-full max-w-4xl px-4 mx-auto">
          <div className="max-w-150 mx-auto pt-4 flex flex-col gap-y-5 items-center">
            <h1 className="text-6xl text-center text-primary font-bold font-main-header">
              Aura
            </h1>
            <div className="flex flex-col gap-y-2 items-center">
              <h2 className="text-4xl text-center text-on-surface font-bold font-main-header">
                Welcome back to Aura
              </h2>
              <p className="text-sm text-center text-on-surface-variant">
                Continue your culinary journey.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="w-[80%] flex flex-col p-8 gap-y-8 bg-on-tertiary border-2 border-outline-variant"
            >
              {errors.root && <Error text={errors.root.message} />}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-on-surface-variant font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid Email Format",
                    },
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                  className="border-b-2 border-outline-variant outline-none focus:ring-0"
                />
                <Error text={errors.email?.message} />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="text-sm text-on-surface-variant font-bold"
                  >
                    Password
                  </label>
                  <a href="#" className="text-sm text-secondary">
                    Forgot Password?
                  </a>
                </div>

                <input
                  type="password"
                  id="dashPassword"
                  placeholder="Enter your password"
                  required
                  {...register("dashPassword", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Password Can't be Lessthan 8 Characters",
                    },
                  })}
                  className="border-b-2 border-outline-variant outline-none focus:ring-0"
                />
                <Error text={errors.dashPassword?.message} />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={`flex gap-x-2 justify-center mt-5 px-8 py-4 border text-on-tertiary bg-primary ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Spinner className="w-5 h-5" />
                  </span>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-sm text-center text-secondary">
                Don't have an account?{" "}
                <NavLink to={"/signup"} className="text-primary">
                  Sign Up
                </NavLink>
              </p>
            </form>
          </div>
        </section>
        <PopUpMessage isOpen={isModalOpen} confirmationMessage={confirmationMessage} />
      </main>
      <AltFooter />
      </div>
    </>
  );
}

export default LogIn;
