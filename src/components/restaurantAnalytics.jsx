import { Eye } from "lucide-react";
import navBarLogo from "../assets/Aura_logo.svg";
import LineGraph from "./analyticsLineGraph";
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
                <span className="text-xl text-on-surface font-bold font-main-header">Views & Engagement Over Time</span>
                <div className="flex gap-x-3 items-center">
                    <a href="#" className="text-xs pb-1 text-secondary font-semibold hover:text-primary hover:border-b-2 hover:border-primary hover:-translate-y-1">All Metrics</a>
                </div>
            </div>
            <div className="h-80 w-full mt-4 md:h-125">
                <LineGraph />
            </div>
        </div>
        <div className="container mt-7 grid gap-4 grid-cols-12 grid-rows-12">
            <div className="col-span-12 row-span-12 p-4 border-2 border-outline-variant md:col-span-7">
                <span className="block pb-2 mb-4 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">Most Engaged Menu Items</span>
                <div className="flex items-center gap-x-2"></div>
            </div>
            <div className="hidden col-span-5 row-span-8"></div>
            <div className="hidden col-span-5 row-span-4"></div>
        </div>
    </>
  );
}

export default DashAnalytics;
