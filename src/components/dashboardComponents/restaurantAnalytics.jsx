import navBarLogo from "../../assets/Aura_logo.svg";
import PieGraph from "./analyticsComponents/analyticsPieChart";
import AnalyticsHero from "./analyticsComponents/analyticsHero";
import EngagementAnalytics from "./analyticsComponents/engagementAnalytics";
import EngagmentOvertime from "./analyticsComponents/engagementOvertime";
import MostEngagedItems from "./analyticsComponents/mostEngagedItems";
import OverallEngagementRate from "./analyticsComponents/overallEngagementRate";
import RecentActivity from "./analyticsComponents/recentActivity";
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
      <AnalyticsHero />
      <EngagementAnalytics />
      <EngagmentOvertime />
      <div className="container mt-7 grid gap-4 grid-cols-12 grid-rows-12">
        <MostEngagedItems />
        <div className="hidden h-100 relative col-span-5 row-span-8 p-4 border-2 border-outline-variant md:block">
          <span className="block pb-2 mb-3 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
            Discovery Sources
          </span>

          <div className="h-80 w-full">
            <PieGraph />
          </div>
        </div>
        <OverallEngagementRate />
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
        <RecentActivity />
      </div>
    </>
  );
}

export default DashAnalytics;
