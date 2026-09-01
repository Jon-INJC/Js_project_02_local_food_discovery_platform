import navBarLogo from "../assets/Aura_logo.svg";
import { LayoutDashboard, UtensilsCrossed, ChartNoAxesCombined, MessageSquareDiff } from "lucide-react";
//import Overview from "../components/restaurantOverview";
//import DashMenu from "../components/restaurantMenu";
//import DashAnalytics from "../components/restaurantAnalytics";
import DashReview from "../components/restaurantReview";
function RestaurantDash() {
  return (
    <>
      <main className="bg-surface-bright md:flex md:flex-row-reverse">
        <section className="min-w-0 flex-1 p-6 md:p-20">
            {/* <Overview /> */}
            {/* <DashMenu /> */}
            {/* <DashAnalytics /> */}
            <DashReview />
        </section>
        <aside className="hidden w-65 p-2 border-2 border-outline-variant md:min-h-screen md:flex md:flex-col md:gap-y-6">
          <div className="flex items-center p-4">
            <img src={navBarLogo} alt="" />
          </div>
          <div className="flex flex-col gap-y-6 p-4">
            <a href="#" className="text-secondary text-sm font-medium flex gap-x-2">
              <LayoutDashboard className="w-5 h-5" /> Overview
            </a>
            <a href="#" className="text-secondary text-sm font-medium flex gap-x-2">
              <UtensilsCrossed className="w-5 h-5" /> Menu
            </a>
            <a href="#" className="text-secondary text-sm font-medium flex gap-x-2">
              <ChartNoAxesCombined className="w-5 h-5" /> Analytics
            </a>
            <a href="#" className="text-secondary text-sm font-medium flex gap-x-2">
              <MessageSquareDiff className="w-5 h-5" /> Review
            </a>
          </div>
        </aside>
      </main>
    </>
  );
}

export default RestaurantDash;
