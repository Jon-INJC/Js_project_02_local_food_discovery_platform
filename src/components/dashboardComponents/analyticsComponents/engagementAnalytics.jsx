import { Eye } from "lucide-react";
import React from "react";

function EngagementAnalytics() {
  return (
    <div className="container mt-7 grid grid-cols-12 gap-4">
      <EngagementCard
        title="Total Views"
        value="1,234"
        percentage="+14%"
        icon={Eye}
      />
    </div>
  );
}

function EngagementCard(props) {
  const { title, value, percentage, icon } = props;
  return (
    <div className="min-h-35 p-3 flex flex-col justify-between col-span-6 rounded-md border-2 border-outline-variant md:col-span-3">
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
