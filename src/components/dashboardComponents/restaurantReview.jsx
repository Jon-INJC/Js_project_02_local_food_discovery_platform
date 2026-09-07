import navBarLogo from "../../assets/Aura_logo.svg";
import ReviewHero from "./reviewComponents/reviewHero";
import OverallReview from "./reviewComponents/overallReview";
import Comments from "./reviewComponents/comments";
import RatingOverview from "./reviewComponents/ratingOverview";
import FeedbackSentiment from "./reviewComponents/feedbackSentiment";
import MostDiscussedItems from "./reviewComponents/mostDiscussedItems";
function DashReview() {
  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-center">
          <img src={navBarLogo} alt="" />
        </div>
        <select
          name="date"
          id="date"
          className="text-xs text-secondary px-3 py-2 border-2 border-secondary rounded-sm hover:cursor-pointer"
        >
          <option value="">Last 30 Days</option>
        </select>
      </div>
      <ReviewHero />
      <OverallReview />
      <div className="mt-7 grid grid-cols-12 gap-6">
        <Comments />
        <div className="hidden md:flex flex-col gap-6 md:col-span-5">
          <RatingOverview />
          <FeedbackSentiment />
          <MostDiscussedItems />
        </div>
      </div>
    </>
  );
}

export default DashReview;
