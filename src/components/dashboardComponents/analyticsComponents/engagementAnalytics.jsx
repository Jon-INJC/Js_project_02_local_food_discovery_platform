import { AlignVerticalDistributeCenter, Eye, HandPlatter, SquareMenu } from "lucide-react";
import React, { useMemo } from "react";
import Skeleton from "react-loading-skeleton";

function getTotalValues(events){
  if (!events || events.length === 0) return [];

  // 1. Filter events from the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.createdAt);
    return eventDate >= thirtyDaysAgo;
  });

  const totals = {
    totalView: filteredEvents.length,
    totalMenuView: 0,
    totalMenuItemView: 0,
    totalRestaurantView: 0
  }

  filteredEvents.forEach(event => {
    if (event.eventType === "restaurant_view") {
      totals.totalRestaurantView += 1;
    } else if (event.eventType === "menu_view") {
      totals.totalMenuView += 1;
    } else if (event.eventType === "menu_item_view") {
      totals.totalMenuItemView += 1;
    }
  });

  return totals;
}

function EngagementAnalytics({ analyticEvents = [], loading }) {

  const totals = useMemo(() => {
      return getTotalValues(analyticEvents);
    }, [analyticEvents]);


  return (
    <div className="container mt-7 grid grid-cols-12 gap-4">
      <EngagementCard
        title="Total Views"
        value={totals.totalView}
        percentage="+14%"
        icon={Eye}
        loading={loading}
      />
      <EngagementCard
        title="Total Menu Views"
        value={totals.totalMenuView}
        percentage={`${((totals.totalMenuView / totals.totalView) * 100).toFixed(1)}%`}
        icon={SquareMenu}
        loading={loading}
      />
      <EngagementCard
        title="Total Menu Items Views"
        value={totals.totalMenuItemView}
        percentage={`${((totals.totalMenuItemView / totals.totalView) * 100).toFixed(1)}%`}
        icon={AlignVerticalDistributeCenter}
        loading={loading}
      />
      <EngagementCard
        title="Total Restaurant Views"
        value={totals.totalRestaurantView}
        percentage={`${((totals.totalRestaurantView / totals.totalView) * 100).toFixed(1)}%`}
        icon={HandPlatter}
        loading={loading}
      />
    </div>
  );
}

function EngagementCard(props) {
  const { title, value, percentage, icon, loading } = props;
  return (
    <div className="p-3 flex flex-col gap-4 col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-on-surface-variant font-medium">{!loading ? title : <Skeleton width={100} height={16} />}</p>
        {!loading ? icon &&
          React.createElement(icon, { className: "w-4 h-4 text-outline" }) : (
          <Skeleton width={16} height={16} />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-4xl text-on-surface font-bold font-main-header">
          {!loading ? value : <Skeleton width={100} height={40} />}
        </span>
        <span className="text-xs text-primary font-medium">{!loading ? percentage : <Skeleton width={50} height={16} />}</span>
      </div>
    </div>
  );
}

export default EngagementAnalytics;
