import { Eye, ArrowUp, Heart, Bookmark, Flame } from "lucide-react";
import navBarLogo from "../assets/Aura_logo.svg";
import LineGraph from "./analyticsLineGraph";
import PieGraph from "./analyticsPieChart";
function DashAnalytics() {
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
              DashAnalytics
            </h1>
            <p className="text-xs text-secondary md:text-sm md:max-w-full">
              Understand how guests discover and interact with your restaurant
              and menu.
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
        <div className="min-h-35 p-3 flex flex-col justify-between col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-on-surface-variant font-medium">
              Menu View
            </p>
            <Eye className="w-5 h-5 text-primary cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl text-on-surface font-bold font-main-header">
              12.4K
            </span>
            <span className="text-xs text-primary font-medium">+14%</span>
          </div>
        </div>
        {/* second card */}
        <div className="min-h-35 p-3 flex flex-col justify-between col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-on-surface-variant font-medium">
              Menu View
            </p>
            <Eye className="w-5 h-5 text-primary cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl text-on-surface font-bold font-main-header">
              12.4K
            </span>
            <span className="text-xs text-primary font-medium">+14%</span>
          </div>
        </div>
        <div className="min-h-35 p-3 flex flex-col justify-between col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-on-surface-variant font-medium">
              Menu View
            </p>
            <Eye className="w-5 h-5 text-primary cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl text-on-surface font-bold font-main-header">
              12.4K
            </span>
            <span className="text-xs text-primary font-medium">+14%</span>
          </div>
        </div>
        <div className="min-h-35 p-3 flex flex-col justify-between col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-on-surface-variant font-medium">
              Menu View
            </p>
            <Eye className="w-5 h-5 text-primary cursor-pointer" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl text-on-surface font-bold font-main-header">
              12.4K
            </span>
            <span className="text-xs text-primary font-medium">+14%</span>
          </div>
        </div>
      </div>
      <div className="container mt-7 p-6 border-2 border-outline-variant">
        <div className="flex items-center justify-between border-b-2 border-outline-variant">
          <span className="text-xl text-on-surface font-bold font-main-header">
            Views & Engagement Over Time
          </span>
          <div className="flex gap-x-3 items-center">
            <a
              href="#"
              className="text-xs pb-1 text-secondary font-semibold hover:text-primary hover:border-b-2 hover:border-primary hover:-translate-y-1"
            >
              All Metrics
            </a>
          </div>
        </div>
        <div className="h-80 w-full mt-4 md:h-125">
          <LineGraph />
        </div>
      </div>
      <div className="container mt-7 grid gap-4 grid-cols-12 grid-rows-12">
        <div className="col-span-12 row-span-12 p-4 border-2 border-outline-variant md:col-span-7">
          <span className="block pb-2 mb-10 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
            Most Engaged Menu Items
          </span>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
                <span className="mr-3 text-2xl text-primary-fixed-dim font-main-header font-bold">01</span>
                <img src="https://placehold.co/200x100/orange/white" alt="" className="w-13 h-13 rounded-md border-2 border-outline-variant object-cover" />
                <div className="flex flex-col gap-1">
                    <span className="text-xl text-on-surface font-main-header font-bold">Truffle Risotto</span>
                    <div className="flex items-center gap-3">
                        <p className="text-xs text-secondary font-medium flex items-center gap-1">
                            < Eye className="w-3 h-3" />
                            1,284 Views
                        </p>
                        <p className="text-xs text-secondary font-medium flex items-center gap-1">
                            < Heart className="w-3 h-3" />
                            183 Likes
                        </p>
                        <p className="text-xs text-secondary font-medium flex items-center gap-1">
                            < Bookmark className="w-3 h-3" />
                            74 Saves
                        </p>
                    </div>
                </div>
            </div>
            <a href="#" className="text-sm text-primary underline decoration-primary font-semibold">VIEW FULL MENU PERFORMANCE</a>
          </div>
        </div>
        <div className="hidden h-100 relative col-span-5 row-span-8 p-4 border-2 border-outline-variant md:block">
          <span className="block pb-2 mb-3 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
            Discovery Sources
          </span>

          <div className="h-80 w-full">
            <PieGraph />
          </div>
        </div>
        <div className="hidden col-span-5 row-span-4 p-6 border-2 border-outline-variant md:block">
          <span className="block pb-2 mb-1 text-2xl text-on-surface font-bold font-main-header">
            Overall Engagement Rate
          </span>
          <p className="text-sm text-secondary mb-4">
            Percentage of views resulting in a like or save.
          </p>
          <div className="flex flex-col gap-y-2">
            <span className="flex gap-2 items-end text-2xl text-primary font-main-header font-bold">
                9.1%
                <p className="text-xs font-light font-main-body flex items-center"><ArrowUp className="w-3 h-3"/> 2.4%</p>
            </span>
            <div className="h-1 bg-surface-variant rounded-full">
              <div className="w-1/4 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-7 p-6 border-2 border-outline-variant">
        <div className="pb-4 mb-7 flex items-center justify-between border-b-2 border-outline-variant">
          <span className="text-2xl text-on-surface font-bold font-main-header">
            Recent Activity
          </span>
            <a
              href="#"
              className="text-sm font-semibold text-primary underline decoration-primary hover:-translate-y-1"
            >
              View All
            </a>
        </div>
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-md">
                    <Heart className="w-5 h-5 text-primary" />
                </span>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-on-surface">
                        A guest liked Lemon Tart.
                    </p>
                    <p className="text-xs text-secondary">
                        2 minutes ago
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-md">
                    <Bookmark className="w-5 h-5 text-primary" />
                </span>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-on-surface">
                        Aura was saved to a Date Night Collection.
                    </p>
                    <p className="text-xs text-secondary">
                        15 minutes ago
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-md">
                    <Flame className="w-5 h-5 text-primary" />
                </span>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-on-surface font-bold">
                        Truffle Risotto is currently trending (50+ views in last hour).
                    </p>
                    <p className="text-xs text-secondary">
                        1 hour ago
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default DashAnalytics;
