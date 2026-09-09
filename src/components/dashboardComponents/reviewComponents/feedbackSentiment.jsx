import { HeartIcon, Lightbulb } from "lucide-react";
import React from "react";

function FeedbackSentiment() {
  return (
    <div className="p-6 flex flex-col gap-4 border-2 border-outline-variant">
      <span className="text-2xl text-on-surface font-bold font-main-header">
        Feedback Sentiment
      </span>
      <FeedbackRate rate={78} type="Positive" />
      <div className="flex flex-col gap-4">
        <span className="text-secondary text-sm font-semibold">
          COMMON THEMES
        </span>
        <CommenTheme
          icon={HeartIcon}
          text="Great Flavor Profile"
          occuranc={42}
        />
        <CommenTheme
          icon={Lightbulb}
          text="More vegetarian options"
          occuranc={15}
          isSuggestion={true}
        />
      </div>
    </div>
  );
}

function FeedbackRate(props) {
  const { rate, type } = props;
  return (
    <div className="flex flex-col gap-y-2">
      <span className="flex gap-2 items-center text-2xl text-primary font-main-header font-bold">
        {rate}%
        <p className="text-xs text-secondary font-light font-main-body flex items-center">
          {type}
        </p>
      </span>
      <div className="h-1 bg-surface-variant rounded-full">
        <div
          style={{ width: `${rate}%` }}
          className="h-1 bg-primary rounded-full"
        ></div>
      </div>
    </div>
  );
}

function CommenTheme(props) {
  const { icon, text, occurance, isSuggestion } = props;
  let info = isSuggestion
    ? `Suggested in ${occurance} reviews`
    : `Mentioned in ${occurance} reviews`;

  return (
    <div className="flex gap-2">
      {icon &&
        React.createElement(icon, {
          className: isSuggestion
            ? "text-on-surface "
            : "fill-primary stroke-0",
        })}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-on-surface font-medium">{text}</p>
        <p className="text-xs text-secondary font-semibold">{info}</p>
      </div>
    </div>
  );
}

export default FeedbackSentiment;
