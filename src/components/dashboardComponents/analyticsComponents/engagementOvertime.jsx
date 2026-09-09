import LineGraph from "./analyticsLineGraph";

function EngagmentOvertime() {
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
        <LineGraph />
      </div>
    </div>
  );
}

export default EngagmentOvertime;
