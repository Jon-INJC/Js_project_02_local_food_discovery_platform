import navBarLogo from "../../assets/Aura_logo.svg";
import { Plus } from "lucide-react";
import DashMenuHero from "./menuComponent/dashMenuHero";
import DashMenuItems from "./menuComponent/dashMenuItems";
function DashMenu() {
  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <img src={navBarLogo} alt="" />
        </div>
        <button
          type="button"
          className="text-xs flex justify-center items-center px-3 py-2 border text-on-tertiary bg-primary hover:cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>

      <DashMenuHero />
      <DashMenuItems />
    </>
  );
}

export default DashMenu;
