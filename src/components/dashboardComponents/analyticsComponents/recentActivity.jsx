import { Bookmark, Flame, Heart } from "lucide-react";
import React from "react";

function RecentActivity() {
  return (
    <div className="flex flex-col gap-6">
      <Activity
        icon={Heart}
        text="A guest liked Lemon Tart."
        time="2 minutes ago"
      />
      <Activity
        icon={Bookmark}
        text="Aura was saved to a Date Night Collection."
        time="15 minutes ago"
      />
      <Activity
        icon={Flame}
        text="Truffle Risotto is currently trending (50+ views in last hour)."
        time="1 hour ago"
        istrending={true}
      />
    </div>
  );
}

function Activity(props) {
  const { icon, text, time, istrending } = props;
  return (
    <div className="flex items-center gap-3">
      <span className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-lg">
        {icon &&
          React.createElement(icon, { className: "fill-primary stroke-0" })}
      </span>
      <div className="flex flex-col gap-1">
        <p
          className={
            istrending
              ? "text-sm text-on-surface font-bold"
              : "text-sm text-on-surface"
          }
        >
          {text}
        </p>
        <p className="text-xs text-secondary">{time}</p>
      </div>
    </div>
  );
}

export default RecentActivity;
