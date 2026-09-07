import { ArrowUp } from "lucide-react";

function OverallEngagementRate() {
  return (
    <div className="hidden col-span-5 row-span-4 p-6 border-2 border-outline-variant md:block">
      <span className="block pb-2 mb-1 text-2xl text-on-surface font-bold font-main-header">
        Overall Engagement Rate
      </span>
      <p className="text-sm text-secondary mb-4">
        Percentage of views resulting in a like or save.
      </p>
      <OverAllRate rate="9.1" changeRate="2.4" />
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
      <div className="h-1 bg-surface-variant rounded-full">
        <div className="w-1/4 h-1 bg-primary rounded-full"></div>
      </div>
    </div>
  );
}

export default OverallEngagementRate;
