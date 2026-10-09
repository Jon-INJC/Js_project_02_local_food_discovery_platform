import { ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useMenu } from "../../../context_API/menuContextProvider";
import Skeleton from "react-loading-skeleton";

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

  return (
    <div className="hidden col-span-5 row-span-4 p-6 border-2 border-outline-variant md:block">
      <span className="block pb-2 mb-1 text-2xl text-on-surface font-bold font-main-header">
        Overall Engagement Rate
      </span>
      <p className="text-sm text-secondary mb-4">
        Percentage of views resulting in a like or save.
      </p>
      <OverAllRate rate={((totalLikeCount / filteredViews.total) * 100).toFixed(1)} changeRate="2.4" loading={loading} />
    </div>
  );
}

function OverAllRate(props) {
  const { rate, changeRate, loading } = props;

  return (
    <div className="flex flex-col gap-y-2">
      <span className="flex gap-2 items-end text-2xl text-primary font-main-header font-bold">
        {!loading ? rate : <Skeleton width={50} />}
        <p className="text-xs font-light font-main-body flex items-center">
          {!loading ? (
            <>
              <ArrowUp className="w-3 h-3" /> {changeRate}%
            </>
          ) : (
            <Skeleton width={50} />
          )}
        </p>
      </span>
      <p className="text-xs font-light font-main-body text-primary"> {rate == 0 ? "No likes from viewers this month!" : ""}</p>
      <div className="h-1 bg-surface-variant rounded-full">
        {!loading ? (
          <div style={{ width: `${rate}%` }} className="h-1 bg-primary rounded-full"></div>
        ) : (
          <Skeleton width="100%" height="100%" />
        )}
      </div>
    </div>
  );
}

export default OverallEngagementRate;
