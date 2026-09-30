import { AlignVerticalDistributeCenter, Eye, HandPlatter, SquareMenu } from "lucide-react";
import React, { useMemo } from "react";

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

    if (loading) {
    return <div className="mt-7 text-secondary">Loading metrics...</div>;
  }

  return (
    <div className="container mt-7 grid grid-cols-12 gap-4">
      <EngagementCard
        title="Total Views"
        value={totals.totalView}
        percentage="+14%"
        icon={Eye}
      />
      <EngagementCard
        title="Total Menu Views"
        value={totals.totalMenuView}
        percentage={`${((totals.totalMenuView / totals.totalView) * 100).toFixed(1)}%`}
        icon={SquareMenu}
      />
      <EngagementCard
        title="Total Menu Items Views"
        value={totals.totalMenuItemView}
        percentage={`${((totals.totalMenuItemView / totals.totalView) * 100).toFixed(1)}%`}
        icon={AlignVerticalDistributeCenter}
      />
      <EngagementCard
        title="Total Restaurant Views"
        value={totals.totalRestaurantView}
        percentage={`${((totals.totalRestaurantView / totals.totalView) * 100).toFixed(1)}%`}
        icon={HandPlatter}
      />
    </div>
  );
}

function EngagementCard(props) {
  const { title, value, percentage, icon } = props;
  return (
    <div className="p-3 flex flex-col gap-4 col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-on-surface-variant font-medium">{title}</p>
        {icon &&
          React.createElement(icon, { className: "w-4 h-4 text-outline" })}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-4xl text-on-surface font-bold font-main-header">
          {value}
        </span>
        <span className="text-xs text-primary font-medium">{percentage}</span>
      </div>
    </div>
  );
}

export default EngagementAnalytics;
