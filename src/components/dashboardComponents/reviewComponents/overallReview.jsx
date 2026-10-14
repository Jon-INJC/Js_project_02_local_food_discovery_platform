import Skeleton from "react-loading-skeleton";

function OverallReview({ reviews = [], loading, feedback }) {
  const totalReviews = reviews.length;
  const AverageRating = calculateAverageRating(reviews);
  const resentReviews = filterResentReviews(reviews);
  const posetiveFeedback = feedback;
  

  return (
    <div className="container mt-7 grid grid-cols-12 gap-4">
      <ReviewCard title="Total Reviews" value={totalReviews} loading={loading} />
      <ReviewCard title="Average Rating" value={AverageRating} loading={loading} />
      <ReviewCard title="New Reviews" value={resentReviews.length == 0? "No review":`+ ${resentReviews.length}`} loading={loading} />
      <ReviewCard title="Positive Feedback" value={`${posetiveFeedback}%`} loading={loading} />
    </div>
  );
}

function ReviewCard(props) {
  const { title, value, loading } = props;

  return (
    <div className="p-4 col-span-6 flex flex-col gap-2 border-2 border-outline-variant md:col-span-3">
      <p className="text-xs text-secondary font-medium">{title}</p>
      <span className="text-2xl text-on-surface font-bold font-main-header">
        {loading ? <Skeleton /> : value}
      </span>
    </div>
  );
}

function calculateAverageRating(reviews = []) {
  const totalRating = reviews.reduce(
    (sum, item) => sum + (item.rating || 0),
    0,
  );

  return Math.round((totalRating / reviews.length) * 10) / 10;
}

function filterResentReviews(reviews = []){
  const resentReviews = reviews.filter((item) => {
    const itemsTime = new Date(item.createdAt).getTime();
    return itemsTime >= Date.now() - 7 * 24 * 60 * 60 * 1000;
  });

  return resentReviews;
}

export default OverallReview;
