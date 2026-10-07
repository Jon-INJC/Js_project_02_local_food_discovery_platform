import navBarLogo from "../../assets/Aura_logo.svg";
import PieGraph from "./analyticsComponents/analyticsPieChart";
import AnalyticsHero from "./analyticsComponents/analyticsHero";
import EngagementAnalytics from "./analyticsComponents/engagementAnalytics";
import EngagmentOvertime from "./analyticsComponents/engagementOvertime";
import MostEngagedItems from "./analyticsComponents/mostEngagedItems";
import OverallEngagementRate from "./analyticsComponents/overallEngagementRate";
import RecentActivity from "./analyticsComponents/recentActivity";
import { RestaurantContext } from "../../context_API/restaurantContextProvider";
import { useContext, useEffect, useState } from "react";
import { getAnalyticsEventsByRestaurantId } from "../../api/analyticsAPI";
function DashAnalytics() {
  const { restaurant } = useContext(RestaurantContext);
  const [analyticEvents, setAnalyticEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restaurantId = Array.isArray(restaurant)
      ? restaurant[0]?.id
      : restaurant?.id;
    if (!restaurantId) return;

    setLoading(true);
    getAnalyticsEventsByRestaurantId(restaurantId)
      .then((events) => {
        setAnalyticEvents(events);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [restaurant]);

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
      <EngagementAnalytics analyticEvents={analyticEvents} loading={loading} />
      <EngagmentOvertime analyticEvents={analyticEvents} loading={loading}/>
      <div className="container mt-7 grid gap-4 grid-cols-12 grid-rows-12">
        <MostEngagedItems />
        <div className="hidden h-100 relative col-span-5 row-span-8 p-4 border-2 border-outline-variant md:block">
          <span className="block pb-2 mb-3 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
            Discovery Sources
          </span>

          <div className="h-80 w-full">
            <PieGraph analyticEvents={analyticEvents} loading={loading} />
          </div>
        </div>
        <OverallEngagementRate analyticEvents={analyticEvents} loading={loading} />
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
