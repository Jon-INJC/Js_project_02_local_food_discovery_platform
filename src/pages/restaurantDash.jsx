import navBarLogo from "../assets/Aura_logo.svg";
import {
  LayoutDashboard,
  UtensilsCrossed,
  ChartNoAxesCombined,
  MessageSquareDiff,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const NAV_ITEMS = [
{ title: "Overview", path: "/dashboard/overview", icon: LayoutDashboard },
{ title: "Menu", path: "/dashboard/menu", icon: UtensilsCrossed },
{ title: "Analytics", path: "/dashboard/analytics", icon: ChartNoAxesCombined },
{ title: "Review", path: "/dashboard/review", icon: MessageSquareDiff },
];

function RestaurantDash() {
  return (
    <>
      <main className="bg-surface-bright md:flex md:flex-row-reverse">
        <section className="min-w-0 flex-1 p-6 md:p-20">
          <Outlet />
        </section>
        <aside className="hidden w-65 p-2 border-2 border-outline-variant md:min-h-screen md:flex md:flex-col md:gap-y-6">
          <div className="flex items-center p-4">
            <img src={navBarLogo} alt="" />
          </div>
          <nav className="flex flex-col gap-y-6 p-4">
            {NAV_ITEMS.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
          </nav>
        </aside>
      </main>
    </>
  );
}

function NavItem({ title, path, icon: Icon }) {

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `font-medium flex items-center gap-x-2 transition-colors ${
          isActive ? "text-primary text-base translate-x-1" : "text-secondary text-sm"
        }`
      }
    >
      {Icon && <Icon className="w-5 h-5" />}{" "}
      {title}
    </NavLink>
  );
}

export default RestaurantDash;
