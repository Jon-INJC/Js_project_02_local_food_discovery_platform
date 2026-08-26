import navBarLogo from "../assets/Aura_logo.svg";
import {
  Plus,
  Utensils,
  Heart,
  Star,
  Search,
  ListFilter,
  Pencil,
  Trash2,
} from "lucide-react";
function Overview() {
  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <img src={navBarLogo} alt="" />
        </div>
        <button
          type="button"
          className="text-sm flex justify-center items-center px-3 py-3 border text-on-tertiary bg-secondary hover:cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>
      <div className="container mt-7 flex flex-col gap-y-15">
        <div className="flex items-start justify-between md:items-center">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl text-on-surface font-bold font-main-header">
              Good morning, Chef.
            </h1>
            <p className="text-xs text-secondary md:text-sm md:max-w-full">
              Here is an overview of your restaurant's performance today.
            </p>
          </div>
          <button
            type="button"
            className=" hidden text-sm justify-center items-center px-3 py-3 border text-on-tertiary bg-secondary hover:cursor-pointer md:flex"
          >
            <Plus className="w-5 h-5" />
            Add Menu Item
          </button>
        </div>
        <div className="w-full flex gap-x-6">
          <div className="relative w-50 h-35 p-5 flex flex-col gap-y-3 border-3 border-outline-variant">
            <div className="flex items-center justify-between">
              <p className="max-w-1/2 text-xs text-secondary font-bold">
                TOTAL MENU ITEMS
              </p>
              <Utensils className="w-4 h-4 text-outline" />
            </div>
            <p className="text-3xl text-on-surface font-bold font-main-header">
              42
            </p>
            <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-md bg-surface-tint"></div>
          </div>
          <div className="relative w-50 h-35 p-5 flex flex-col gap-y-3 border-3 border-outline-variant">
            <div className="flex items-center justify-between">
              <p className="max-w-1/2 text-xs text-secondary font-bold">
                TOTAL LIKES
              </p>
              <Heart className="w-4 h-4 text-outline" />
            </div>
            <p className="text-3xl text-on-surface font-bold font-main-header">
              1,204
            </p>
            <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-md bg-surface-tint"></div>
          </div>
          <div className="p-5 flex flex-col gap-y-2 bg-primary grow md:gap-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-inverse-primary">TODAY'S SPECIAL</p>
              <Star className="w-4 h-4 text-primary-fixed" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl text-on-tertiary font-bold font-main-header md:text-3xl">
                Truffle Risotto
              </h3>
              <p className="text-xs text-inverse-primary">
                Currently featured on the main discovery feed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10 flex flex-col gap-y-15">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-on-surface font-bold font-main-header md:text-3xl">
            Active Menu
          </h2>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-x-2 border-b border-primary">
              <Search className="w-3 h-3 text-secondary" />
              <input
                className="border-none outline-none focus:ring-0"
                type="text"
                placeholder="Search menu..."
              />
            </div>
            <button
              type="button"
              className="text-sm text-secondary flex gap-x-2 justify-center items-center hover:cursor-pointer"
            >
              <ListFilter className="w-3 h-3 text-secondary" />
              Filter
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:justify-items-center md:grid-cols-2">
          {/* first card */}
          <div className="max-w-lg flex p-4 border-2 border-outline-variant">
            <div className="relative">
                <p className="absolute top-3 left-3 text-[11px] text-on-tertiary bg-primary px-2 py-1 rounded-xs">
                    SPECIAL
                </p>
              <img
                src="https://placehold.co/400x500/orange/white"
                alt=""
                className="w-48 h-90 object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between grow ">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h3 className="text-2xl text-on-surface font-bold font-main-header">
                    Truffle Risotto
                  </h3>
                  <p className="text-sm text-primary">$32.00</p>
                </div>
                <p className="text-sm text-secondary">
                  Arborio rice slowly cooked in rich vegetable broth, finished
                  with…
                </p>
                <div className="flex gap-2">
                  <p className="text-xs text-on-surface bg-surface-container-highest px-2 py-1 rounded-sm">
                    DINNER
                  </p>
                  <p className="text-xs text-on-surface bg-surface-container-highest px-2 py-1 rounded-sm">
                    VEGETARIAN
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-end pt-2 border-t-2 border-outline-variant">
                <p className="flex gap-1 grow items-center text-sm text-secondary">
                  <Heart className="w-3 h-3 text-primary" />
                  342 Likes
                </p>
                <Pencil className="w-5 h-5 text-secondary" />
                <Trash2 className="w-5 h-5 text-secondary" />
              </div>
            </div>
          </div>
          {/* second card */}
          <div className="max-w-90 flex flex-col justify-between p-4 border-2 border-outline-variant">
            <div className="flex flex-col gap-2">
              <img
                src="https://placehold.co/400x500/orange/white"
                alt=""
                className="w-80 h-48 object-cover"
              />
              <div className="flex justify-between">
                <h3 className="text-2xl text-on-surface font-bold font-main-header">
                  Seared Scallops
                </h3>
                <p className="text-sm text-primary">$28.00</p>
              </div>
              <p className="text-sm text-secondary">
                Pan-seared jumbo scallops served with pea purée, crispy
                pancetta, and micro basil.
              </p>
            </div>
            <div className="flex gap-3 items-end pt-2 border-t-2 border-outline-variant">
              <p className="flex gap-1 grow items-center text-sm text-secondary">
                <Heart className="w-3 h-3 text-primary" />
                342 Likes
              </p>
              <Pencil className="w-5 h-5 text-secondary" />
              <Trash2 className="w-5 h-5 text-secondary" />
            </div>
          </div>
          {/* sold item card */}
          <div className=" max-w-lg flex p-4 border-2 border-outline-variant opacity-60">
            <div className="relative">
                <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[9px] text-secondary bg-surface-container-highest rounded-sm border-2 border-on-surface-outline-variant z-1 md:text-xs">
                    SOLD OUT
                </p>
              <img
                src="https://placehold.co/400x500/orange/white"
                alt=""
                className="w-48 h-90 object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between grow">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h3 className="text-2xl text-on-surface font-bold font-main-header">
                    Truffle Risotto
                  </h3>
                  <p className="text-sm text-primary">$32.00</p>
                </div>
                <p className="text-sm text-secondary">
                  Arborio rice slowly cooked in rich vegetable broth, finished
                  with…
                </p>
              </div>

              <div className="flex gap-3 justify-end pt-2 border-t-2 border-outline-variant">
                <Pencil className="w-5 h-5 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
