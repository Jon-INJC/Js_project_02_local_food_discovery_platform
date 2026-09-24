import navBarLogo from "../../assets/Aura_logo.svg";
import ReviewHero from "./reviewComponents/reviewHero";
import OverallReview from "./reviewComponents/overallReview";
import Comments from "./reviewComponents/comments";
import RatingOverview from "./reviewComponents/ratingOverview";
import FeedbackSentiment from "./reviewComponents/feedbackSentiment";
import MostDiscussedItems from "./reviewComponents/mostDiscussedItems";
import { useContext, useEffect, useState } from "react";
import { RestaurantContext } from "../../context_API/restaurantContextProvider";
import { getReviewsByRestaurantId } from "../../api/reviewAPI";
function DashReview() {
  const { restaurant } = useContext(RestaurantContext);
  const [loading, setLoading] = useState(true);
  const [ reviews, setReviews ] = useState([]);
  const posetiveFeedback = calculatePosetiveFeedback(reviews);

  useEffect(() => {
    const restaurantId = Array.isArray(restaurant) ? restaurant[0]?.id : restaurant?.id;
    if (!restaurantId) return;

    getReviewsByRestaurantId(restaurantId)
      .then((items) => {
        setReviews(items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [restaurant]);

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
      <OverallReview reviews={reviews} loading={loading} feedback={posetiveFeedback} />
      <div className="mt-7 grid grid-cols-12 gap-6">
        <Comments reviews={reviews} loading={loading} />
        <div className="hidden md:flex flex-col gap-6 md:col-span-5">
          <RatingOverview />
          <FeedbackSentiment feedback={posetiveFeedback} />
          <MostDiscussedItems />
        </div>
      </div>
    </>
  );
}

function calculatePosetiveFeedback(reviews = []){
  const feedbacks = reviews.filter(item => item.rating >= 4.5)
  
  return Math.round(((feedbacks.length/reviews.length) * 100) * 10) / 10;
}

export default DashReview;
