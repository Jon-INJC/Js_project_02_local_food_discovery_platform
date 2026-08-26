import navBarLogo from "../assets/Aura_logo.svg";
import { LayoutDashboard } from "lucide-react";
import Overview from "../components/restaurantOverview";
function RestaurantDash() {
  return (
    <>
      <main className="bg-surface-bright md:flex md:flex-row-reverse">
        <section className="p-6 md:p-20 md:grow">
            <Overview />
        </section>
        <aside className="hidden w-65 md:flex md:flex-col md:gap-y-6 p-2 border-2 border-outline-variant">
          <div className="flex items-center p-4">
            <img src={navBarLogo} alt="" />
          </div>
          <div className="flex flex-col gap-y-2 p-4">
            <a href="#" className="text-secondary text-sm flex gap-x-2">
              <LayoutDashboard className="w-5 h-5" /> Overview
            </a>
          </div>
        </aside>
      </main>
    </>
  );
}

export default RestaurantDash;
