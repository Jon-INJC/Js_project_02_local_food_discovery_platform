import { Outlet } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import navBarLogo from "../assets/Aura_logo.svg";
function RegisterForm() {

  const methods = useForm({
    mode: "onTouched",
  });

  return (
    <FormProvider {...methods}>
      <header className="w-screen px-6 bg-surface-bright border-2 border-outline-variant">
        <div className="container max-w-4xl mx-auto py-3 flex justify-between items-center">
          <div>
            <img src={navBarLogo} alt="Aura logo" />
          </div>
          <div>
            <p className="text-secondary text-md"><i class="fa-solid fa-xmark"></i>Cancel Listing</p>
          </div>
        </div>
      </header>
      <main className="bg-surface-bright">
        <section className="w-screen max-w-4xl px-6 mx-auto">
           <Outlet />
        </section>
      </main>
      <footer className="w-full py-3 flex justify-center items-center text-sm text-secondary">
        <p>© 2024 AURA EDITORIAL. SECURE LISTING PORTAL.</p>
      </footer>
    </FormProvider>
  );
}

export default RegisterForm;
