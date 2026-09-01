import { HeartIcon, Lightbulb } from "lucide-react";
import navBarLogo from "../assets/Aura_logo.svg";
function DashReview() {
  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <img src={navBarLogo} alt="" />
        </div>
        <select
          name="date"
          id="date"
          className="text-xs text-secondary px-3 py-2 border-2 border-secondary rounded-sm hover:cursor-pointer"
        >
          <option value="">Last 30 Days</option>
        </select>
      </div>
      <div className="container mt-7 flex flex-col gap-y-4 md:mt-0">
        <div className="flex items-start justify-between pb-5 border-b-2 border-outline-variant md:items-end">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl text-on-surface font-bold font-main-header">
              Reviews
            </h1>
            <p className="text-xs text-secondary md:text-sm md:max-w-full">
              See what visitors are saying about your restaurant and menu.
            </p>
          </div>
          <select
            name="date"
            id="date"
            className="hidden text-xs text-secondary px-3 py-2 border-2 border-secondary rounded-sm hover:cursor-pointer md:block"
          >
            <option value="">Last 30 Days</option>
          </select>
        </div>
      </div>
      <div className="container mt-7 grid grid-cols-12 gap-4">
        <div className="p-4 col-span-6 flex flex-col gap-2 border-2 border-outline-variant md:col-span-3">
          <p className="text-xs text-secondary font-medium">Total Reviews</p>
          <span className="text-2xl text-on-surface font-bold font-main-header">
            248
          </span>
        </div>
        <div className="p-4 col-span-6 flex flex-col gap-2 border-2 border-outline-variant md:col-span-3">
          <p className="text-xs text-secondary font-medium">Total Reviews</p>
          <span className="text-2xl text-on-surface font-bold font-main-header">
            248
          </span>
        </div>
        <div className="p-4 col-span-6 flex flex-col gap-2 border-2 border-outline-variant md:col-span-3">
          <p className="text-xs text-secondary font-medium">Total Reviews</p>
          <span className="text-2xl text-on-surface font-bold font-main-header">
            248
          </span>
        </div>
      </div>
      <div className="mt-7 grid grid-cols-12 gap-6">
        <div className="col-span-12 min-w-0 flex flex-col gap-4 md:col-span-7">
          <div className="min-w-0 p-6 relative flex flex-col gap-4 border-2 border-outline-variant">
            <div className="absolute top-0 right-0 -z-1 w-24 h-24 bg-linear-45 from-surface-variant-trans to-surface-variant"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="https://placehold.co/200x100/orange/white"
                  alt=""
                  className="w-10 h-10 object-cover rounded-md"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-on-surface font-bold">
                    Sarah M.
                  </span>
                  <p className="text-xs text-secondary">2 days ago</p>
                </div>
              </div>
            </div>
            <q className="pb-3 text-sm text-secondary border-b-2 border-outline-variant">
              The truffle risotto was incredible. The flavor was excellent, rich
              but not overpowering. Perfectly cooked.
            </q>
            <div className="min-w-0 flex items-center justify-between">
              <p className="text-sm text-secondary">
                Related Item:{" "}
                <a
                  href="#"
                  className="text-primary underline decoration-primary"
                >
                  Truffle Risotto
                </a>
              </p>
              <button
                type="button"
                className="shrink-0 text-xs text-secondary font-semibold px-4 py-1 border border-secondary hover:cursor-pointer"
              >
                Reply
              </button>
            </div>
          </div>
          <button
            type="button"
            className="pb-1 text-xs text-on-surface font-semibold border-b-2 border-on-surface self-center"
          >
            Load More Reviews
          </button>
        </div>
        <div className="hidden md:flex flex-col gap-6 md:col-span-5">
          <div className="p-6 flex flex-col gap-4 border-2 border-outline-variant">
            <span className="text-2xl text-on-surface font-bold font-main-header">
              Rating Overview
            </span>
            <div className="flex items-center gap-3">
              <span className="w-12 shrink-0 text-sm text-secondary font-medium">
                5 Stars
              </span>
              <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
                <div className="w-2/3 h-1 bg-primary rounded-full"></div>
              </div>
              <span className="text-sm text-on-surface font-medium">186</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 shrink-0 text-sm text-secondary font-medium">
                4 Stars
              </span>
              <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
                <div className="w-1/10 h-1 bg-primary opacity-70 rounded-full"></div>
              </div>
              <span className="text-sm text-on-surface font-medium">37</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 shrink-0 text-sm text-secondary font-medium">
                3 Stars
              </span>
              <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
                <div className="w-1/15 h-1 bg-primary opacity-50 rounded-full"></div>
              </div>
              <span className="text-sm text-on-surface font-medium">12</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 shrink-0 text-sm text-secondary font-medium">
                2 Stars
              </span>
              <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
                <div className="w-1/20 h-1 bg-primary opacity-30 rounded-full"></div>
              </div>
              <span className="text-sm text-on-surface font-medium">8</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 shrink-0 text-sm text-secondary font-medium">
                1 Star
              </span>
              <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
                <div className="w-1/25 h-1 bg-primary opacity-10 rounded-full"></div>
              </div>
              <span className="text-sm text-on-surface font-medium">5</span>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-4 border-2 border-outline-variant">
            <span className="text-2xl text-on-surface font-bold font-main-header">
              Feedback Sentiment
            </span>
            <div className="flex flex-col gap-y-2">
            <span className="flex gap-2 items-center text-2xl text-primary font-main-header font-bold">
                78%
                <p className="text-xs text-secondary font-light font-main-body flex items-center">Positive</p>
            </span>
            <div className="h-1 bg-surface-variant rounded-full">
              <div className="w-[78%] h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-secondary text-sm font-semibold">
                COMMON THEMES
            </span>
            <div className="flex gap-2">
                <HeartIcon className="fill-primary stroke-0"/>
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm text-on-surface font-medium">Great Flavor Profile</p>
                    <p className="text-xs text-secondary font-semibold">Mentioned in 42 reviews</p>
                </div>
            </div>
            <div className="flex gap-2">
                <Lightbulb />
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm text-on-surface font-medium">More vegetarian options</p>
                    <p className="text-xs text-secondary font-semibold">Suggested in 15 reviews</p>
                </div>
            </div>
          </div>
          </div>
          <div className="p-6 flex flex-col gap-4 border-2 border-outline-variant">
            <span className="text-2xl text-on-surface font-bold font-main-header">
              Most Discussed Items
            </span>
            <div className="pb-3 flex items-center justify-between border-b-2 border-outline-variant">
                <span className="text-sm text-on-surface font-medium">Truffle Risotto</span>
                <p className="text-xs text-secondary font-semibold px-2 py-1 bg-surface-container rounded-md">38 Comments</p>
            </div>
            <div className="pb-3 flex items-center justify-between border-b-2 border-outline-variant">
                <span className="text-sm text-on-surface font-medium">Lemon Tart</span>
                <p className="text-xs text-secondary font-semibold px-2 py-1 bg-surface-container rounded-md">27 Comments</p>
            </div>
            <div className="pb-3 flex items-center justify-between">
                <span className="text-sm text-on-surface font-medium">Wagyu Ribeye</span>
                <p className="text-xs text-secondary font-semibold px-2 py-1 bg-surface-container rounded-md">21 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashReview;
