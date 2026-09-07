function OverallReview() {
  return (
    <div className="container mt-7 grid grid-cols-12 gap-4">
        <ReviewCard
            title="Total Reviews"
            value="248"
        />
        <ReviewCard
            title="Average Rating"
            value="4.7"
        />
        <ReviewCard
            title="New Reviews"
            value="+18"
        />
        <ReviewCard
            title="Total Reviews"
            value="91%"
        />
      
    </div>
  );
}

function ReviewCard(props) {

    const { title, value} = props

  return (
    <div className="p-4 col-span-6 flex flex-col gap-2 border-2 border-outline-variant md:col-span-3">
      <p className="text-xs text-secondary font-medium">{title}</p>
      <span className="text-2xl text-on-surface font-bold font-main-header">
        {value}
      </span>
    </div>
  );
}

export default OverallReview;
