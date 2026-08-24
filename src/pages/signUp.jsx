import AltFooter from "../components/altFooter";
import { ArrowRight, Eye } from "lucide-react";

function SignUp() {
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
            <form className="w-[80%] flex flex-col p-8 gap-y-8 bg-on-tertiary border-2 border-outline-variant">
              <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
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
                  className="border-none outline-none focus:ring-0"
                />
              </div>
              <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
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
                  className="border-none outline-none focus:ring-0"
                />
              </div>
              <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
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
                  className="border-none outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="text-sm flex gap-x-2 justify-center mt-5 px-8 py-4 border text-on-tertiary bg-primary"
              >
                CREATE ACCOUNT
                <ArrowRight className="w-5 h-5"/>
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
