import { useEffect, useMemo, useState } from "react";
import LineGraph from "./analyticsLineGraph";

// Helper to group raw analytics events into daily metric totals
function transformAnalyticsData(events) {
  if (!events || events.length === 0) return [];

  // 1. Filter events from the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.createdAt);
    return eventDate >= thirtyDaysAgo;
  });

  // 2. Aggregate counts by formatted date string (e.g., "Sep 1")
  const groupedByDate = filteredEvents.reduce((acc, event) => {
    const dateObj = new Date(event.createdAt);

    // Key for grouping chronologically (e.g., "2026-09-01")
    const dateKey = dateObj.toISOString().split("T")[0];

    // Label for Recharts X-Axis display (e.g., "Sep 1")
    const formattedName = dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: "UTC", // Enforce consistent date boundaries
    });

    if (!acc[dateKey]) {
      acc[dateKey] = {
        rawDate: dateKey,
        name: formattedName,
        restaurantViews: 0,
        menuViews: 0,
        menuItemLikes: 0, // Using menuItemLikes as requested; map menu_item_view here
      };
    }

    // Map backend eventType strings to chart keys
    if (event.eventType === "restaurant_view") {
      acc[dateKey].restaurantViews += 1;
    } else if (event.eventType === "menu_view") {
      acc[dateKey].menuViews += 1;
    } else if (event.eventType === "menu_item_view") {
      acc[dateKey].menuItemLikes += 1;
    }

    return acc;
  }, {});

  // 3. Sort chronologically by date and return as an array
  return Object.values(groupedByDate).sort(
    (a, b) => new Date(a.rawDate) - new Date(b.rawDate),
  );
}

function EngagmentOvertime({ analyticEvents = [], loading }) {

  const engagementData = useMemo(() => {
    return transformAnalyticsData(analyticEvents);
  }, [analyticEvents]);

  if (loading) {
    return <div className="mt-7 text-secondary">Loading metrics...</div>;
  }
  return (
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
        <LineGraph engagementData={engagementData} />
      </div>
    </div>
  );
}

export default EngagmentOvertime;
