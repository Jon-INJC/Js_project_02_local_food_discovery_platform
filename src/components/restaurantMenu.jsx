import navBarLogo from "../assets/Aura_logo.svg";
import { Plus, Heart, Pencil, Trash2 } from "lucide-react";
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
          <button
            type="button"
            className=" hidden text-xs justify-center items-center px-3 py-2 border text-on-tertiary bg-primary hover:cursor-pointer md:flex"
          >
            <Plus className="w-5 h-5" />
            Add Menu Item
          </button>
        </div>

        <div className="container mt-7 flex flex-col gap-y-5">
          <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 text-secondary text-xs border-b-2 border-outline-variant md:font-bold">
            <p className="text-center">ITEM NAME</p>
            <p>CATEGORY</p>
            <p>PRICE</p>
            <p>LIKES</p>
            <p className="text-right">ACTIONS</p>
          </div>
          <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-6 bg-on-tertiary border-2 border-surface-container-highest rounded-sm shadow-md">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <img src="https://placehold.co/400x500/orange/white" alt="" className="w-12.5 h-12.5 object-cover" />
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm text-on-surface font-bold font-main-header md:text-xl">Pan-Seared Scallops</h3>
                    <p className="text-xs text-secondary">With pea purée and crispy pancetta</p>
                </div>
            </div>
            <p className="text-sm text-on-surface-variant">Starter</p>
            <p className="text-lg text-primary font-bold font-main-header">$24.00</p>
            <div className="flex items-center gap-2 text-secondary">
                <Heart className="w-4 h-4"/>
                <p className="text-sm">128</p>
            </div>
            <div className="flex items-center justify-end gap-3 text-secondary">
                <Pencil className="w-5 h-5" />
                <Trash2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashMenu;
