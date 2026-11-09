import AltFooter from "../components/altFooter";
import { ArrowRight, Eye } from "lucide-react";
import { set, useForm } from "react-hook-form";
import Error from "../components/error";
import { useContext, useState } from "react";
import { UserContext } from "../context_API/userContextProvider";
import { getUsers, setUsers } from "../api/authAPI";
import PopUpMessage from "../components/modalsAndMessages/popUpMessage";
import { NavLink } from "react-router-dom";
import Spinner from "../components/spinner";

function SignUp() {
  const { setUserValue } = useContext(UserContext);
  const { register, handleSubmit, setError, formState } = useForm();
  const { errors } = formState;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState({});

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(async () => {
    try {
      let userData = await getUsers(data.email);
      if (userData) {
        // Set error on the email field specifically
        setError("email", {
          type: "manual",
          message: "An account was found with this email address.",
        });
        setIsSubmitting(false);
        setIsModalOpen(true);
        setConfirmationMessage({
          header: "Sign Up Failed!",
          message: "An account was found with this email address.",
          type: "error",
        });
        setTimeout(() => {
          setIsModalOpen(false);
        }, 3000);
        return;
      }
      userData = await setUsers(data);
      if (userData && userData.Success) {
        console.log("Logged in user:", userData);
        setUserValue(userData);
        setConfirmationMessage({
          header: "Sign Up Successful!",
          message: "Your account has been created successfully. You can now log in and start exploring our platform.",
          type: "success",
        });
        setIsModalOpen(true);
        setTimeout(() => {
          setIsModalOpen(false);
        }, 3000);
      }
      setIsSubmitting(false);
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
              <div className="flex flex-col gap-y-4 items-center">
                <h2 className="text-4xl text-center text-on-surface font-bold font-main-header">
                  Join Aura
                </h2>
                <p className="text-sm text-center text-on-surface-variant">
                  Discover a curated world of culinary experiences.
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="w-[80%] flex flex-col p-8 gap-y-6 bg-on-tertiary border-2 border-outline-variant"
              >
                {errors.root && <Error text={errors.root.message} />}
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm text-on-surface-variant font-bold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your name"
                    required
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "This Field is Required",
                      },
                    })}
                    className="border-b-2 border-outline-variant outline-none focus:ring-0"
                  />
                  <Error text={errors.fullName?.message} />
                </div>
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
                    <div>
                      <Eye className="w-5 h-5 text-secondary cursor-pointer" />
                    </div>
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
                  type="submit"
                  className="text-sm flex gap-x-2 justify-center mt-5 px-8 py-4 border text-on-tertiary bg-primary"
                >
                 {isSubmitting ? (
                  <Spinner />
                ) : (
                  <>CREATE ACCOUNT
                  <ArrowRight className="w-5 h-5" /></>
                )}
                </button>
                <p className="text-sm text-center text-secondary">
                  Already have an account?{" "}
                  <NavLink to={"/login"} className="text-primary">
                    Sign In
                  </NavLink>
                </p>
              </form>
            </div>
            <PopUpMessage
              isOpen={isModalOpen}
              confirmationMessage={confirmationMessage}
            />
          </section>
        </main>
        <AltFooter />
      </div>
    </>
  );
}
export default SignUp;
