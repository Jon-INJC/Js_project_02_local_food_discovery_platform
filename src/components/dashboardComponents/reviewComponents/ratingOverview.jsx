function RatingOverview() {
  return (
    <div className="p-6 flex flex-col gap-4 border-2 border-outline-variant">
      <span className="text-2xl text-on-surface font-bold font-main-header">
        Rating Overview
      </span>
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-sm text-secondary font-medium">
          5 Stars
        </span>
        <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
          <div className="w-2/3 h-1 bg-primary rounded-full"></div>
        </div>
        <span className="text-sm text-on-surface font-medium">186</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-sm text-secondary font-medium">
          4 Stars
        </span>
        <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
          <div className="w-1/10 h-1 bg-primary opacity-70 rounded-full"></div>
        </div>
        <span className="text-sm text-on-surface font-medium">37</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-sm text-secondary font-medium">
          3 Stars
        </span>
        <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
          <div className="w-1/15 h-1 bg-primary opacity-50 rounded-full"></div>
        </div>
        <span className="text-sm text-on-surface font-medium">12</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-sm text-secondary font-medium">
          2 Stars
        </span>
        <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
          <div className="w-1/20 h-1 bg-primary opacity-30 rounded-full"></div>
        </div>
        <span className="text-sm text-on-surface font-medium">8</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-sm text-secondary font-medium">
          1 Star
        </span>
        <div className="flex-1 min-w-0 h-1 bg-surface-variant rounded-full">
          <div className="w-1/25 h-1 bg-primary opacity-10 rounded-full"></div>
        </div>
        <span className="text-sm text-on-surface font-medium">5</span>
      </div>
    </div>
  );
}

export default RatingOverview;
