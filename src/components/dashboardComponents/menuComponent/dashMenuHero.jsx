import { Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

function DashMenuHero() {
  return (
    <div className="container mt-7 flex flex-col gap-y-4 md:mt-0">
      <div className="flex items-start justify-between pb-5 border-b-2 border-outline-variant md:items-end">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl text-on-surface font-bold font-main-header">
            Menu Management
          </h1>
          <p className="text-xs text-secondary md:text-sm md:max-w-full">
            Manage your active menu items, prices, and categories.
          </p>
        </div>
        <NavLink
          to="/dashboard/addmenu"
          className=" hidden text-xs justify-center items-center px-3 py-2 border text-on-tertiary bg-primary hover:cursor-pointer md:flex"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </NavLink>
      </div>
    </div>
  );
}

export default DashMenuHero;
