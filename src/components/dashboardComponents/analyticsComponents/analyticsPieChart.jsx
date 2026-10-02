import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

function getTotalValues(events) {
  if (!events || events.length === 0) return [];

  // 1. Filter events from the last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.createdAt);
    return eventDate >= thirtyDaysAgo;
  });

  const totals = [
    { name: "Restaurant View", value: 45, color: "#A63A00" },
    { name: "Menu View", value: 30, color: "#333333" },
    { name: "Menu Item View", value: 15, color: "#8C6F64" },
  ];

  filteredEvents.forEach((event) => {
    if (event.eventType === "restaurant_view") {
      totals[0].value += 1;
    } else if (event.eventType === "menu_view") {
      totals[1].value += 1;
    } else if (event.eventType === "menu_item_view") {
      totals[2].value += 1;
    }
  });

  return totals;
}

function PieGraph({ analyticEvents = {}, loading }) {
  const totals = useMemo(() => {
    return getTotalValues(analyticEvents);
  }, [analyticEvents]);

  if (loading) {
    return <div className="mt-7 text-secondary">Loading metrics...</div>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Legend content={<CustomLegend data={totals} />} />
        <Pie
          data={totals}
          cx="50%"
          cy="42%"
          innerRadius="50%"
          outerRadius="70%"
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="none"
        >
          {totals.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        {/* Center Label inside SVG Canvas */}
        <text
          x="50%"
          y="35%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl text-on-surface font-main-header font-bold"
        >
          {totals.reduce((acc, curr) => {
            return acc + curr.value;
          }, 0)}
        </text>
        <text
          x="50%"
          y="42%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs text-primary font-medium"
        >
          TOTAL VIEWS
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

function CustomLegend({ data }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-4 ml-10">
      {data.map((item) => (
        <div
          className="flex items-center gap-2 text-xs text-secondary"
          key={item.name}
        >
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ backgroundColor: item.color }}
          />
          <span>
            {item.name} ({item.value}%)
          </span>
        </div>
      ))}
    </div>
  );
}

export default PieGraph;
