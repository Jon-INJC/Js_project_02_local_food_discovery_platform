import AltFooter from "../components/altFooter";
import { ArrowRight, Eye } from "lucide-react";
import { useForm } from "react-hook-form";
import Error from "../components/error";
import { useContext } from "react";
import { UserContext } from "../context API/userContextProvider";

function SignUp() {
  const { setUserValue } = useContext(UserContext);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    setUserValue(data);
  };

  return (
    <>
      <main className="bg-surface-bright p-10">
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container max-w-150 mx-auto pt-10 flex flex-col gap-y-5 items-center">
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
                CREATE ACCOUNT
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-sm text-center text-secondary">
                Already have an account?{" "}
                <a href="#" className="text-primary">
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>
      <AltFooter />
    </>
  );
}

export default SignUp;
