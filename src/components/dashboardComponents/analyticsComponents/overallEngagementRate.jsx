import { ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useMenu } from "../../../context_API/menuContextProvider";

function getTotalValues(events) {
  if (!events || events.length === 0) return [];

  // 1. Filter events from the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.createdAt);
    return eventDate >= thirtyDaysAgo;
  });

  return {total: filteredEvents.length, items: filteredEvents};
}

function OverallEngagementRate({ analyticEvents = [], loading }) {
  const { menuItems } = useMenu();
  const [ totalLikeCount , setTotalLikeCount ] = useState(0)
  const filteredViews = useMemo(() => {
    return getTotalValues(analyticEvents);
  }, [analyticEvents]);

  const filteredMenuItems = useMemo(() => {
    return getTotalValues(menuItems);
  }, [menuItems]);

  useEffect(() => {
    if(filteredMenuItems.total > 0) {
      setTotalLikeCount(filteredMenuItems.items.reduce((acc, curr) => {return acc + curr.likesCount}, 0))
    }
  },[filteredMenuItems])

  if (loading) {
    return <div className="mt-7 text-secondary">Loading metrics...</div>;
  }

  return (
    <div className="hidden col-span-5 row-span-4 p-6 border-2 border-outline-variant md:block">
      <span className="block pb-2 mb-1 text-2xl text-on-surface font-bold font-main-header">
        Overall Engagement Rate
      </span>
      <p className="text-sm text-secondary mb-4">
        Percentage of views resulting in a like or save.
      </p>
      <OverAllRate rate={((totalLikeCount / filteredViews.total) * 100).toFixed(1)} changeRate="2.4" />
    </div>
  );
}

function OverAllRate(props) {
  const { rate, changeRate } = props;

  return (
    <div className="flex flex-col gap-y-2">
      <span className="flex gap-2 items-end text-2xl text-primary font-main-header font-bold">
        {rate}%
        <p className="text-xs font-light font-main-body flex items-center">
          <ArrowUp className="w-3 h-3" /> {changeRate}%
        </p>
      </span>
      <p className="text-xs font-light font-main-body text-primary"> {rate == 0 ? "No likes from viewers this month!" : ""}</p>
      <div className="h-1 bg-surface-variant rounded-full">
        <div style={{ width: `${rate}%` }} className="h-1 bg-primary rounded-full"></div>
      </div>
    </div>
  );
}

export default OverallEngagementRate;
