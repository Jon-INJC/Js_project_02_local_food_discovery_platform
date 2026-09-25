import { useEffect, useState } from "react";
import { getUsersByID } from "../../../api/authAPI";
import { getMenuItems } from "../../../api/menuAPI";

function Comments({ reviews = [], loading }) {
  const [enrichedReviews, setEnrichedReviews] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    if (!reviews || reviews.length === 0) return;

    async function loadRelatedData() {
      setIsFetchingData(true);
      try {
        const fullReviews = await Promise.all(
          reviews.map(async (review) => {
            let user = null;
            try {
              user = await getUsersByID(review.userId);
            } catch (err) {
              console.error(`Failed to fetch user ${review.userId}`, err);
            }

            let menuItem = null;
            if (review.menuItemId) {
              try {
                menuItem = await getMenuItems(review.menuItemId);
              } catch (err) {
                console.error(`Failed to fetch item ${review.menuItemId}`, err);
              }
            }

            return {
              ...review,
              userName: user?.name || "Anonymous User",
              userImage: user?.avatar || review.image || "https://placehold.co/400x500/orange/white",
              itemName: menuItem?.name || (review.menuItemId ? `Item #${review.menuItemId}` : "Restaurant"),
            };
          })
        );
        setEnrichedReviews(fullReviews);
      } finally {
        setIsFetchingData(false);
      }
    }

    loadRelatedData();
  }, [reviews]);

  if (loading || isFetchingData) {
    return <div className="mt-7 text-secondary">Loading metrics...</div>;
  }
  return (
    <div className="col-span-12 min-w-0 flex flex-col gap-4 md:col-span-7">
      {enrichedReviews.length === 0 ? (
        <h3>No menu items found</h3>
      ) : (
        enrichedReviews.map((item) => {
          return <Comment
            key={item.id || item._id}
            image={item.userImage}
            user={item.userName}
            time={getRelativeTime(item.createdAt)}
            comment={item.comment}
            item={item.itemName}
          />;
        })
      )}
      <button
        type="button"
        className="pb-1 text-xs text-on-surface font-semibold border-b-2 border-on-surface self-center"
      >
        Load More Reviews
      </button>
    </div>
  );
}

function Comment(props) {
  const { image, user, time, comment, item } = props;

  return (
    <div className="min-w-0 p-6 relative flex flex-col gap-4 border-2 border-outline-variant">
      <div className="absolute top-0 right-0 -z-1 w-24 h-24 bg-linear-45 from-surface-variant-trans to-surface-variant"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt=""
            className="w-10 h-10 object-cover rounded-md"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-on-surface font-bold">{user}</span>
            <p className="text-xs text-secondary">{time}</p>
          </div>
        </div>
      </div>
      <q className="pb-3 text-sm text-secondary border-b-2 border-outline-variant">
        {comment}
      </q>
      <div className="min-w-0 flex items-center justify-between">
        <p className="text-sm text-secondary">
          Related Item:{" "}
          <a href="#" className="text-primary underline decoration-primary">
            {item}
          </a>
        </p>
        <button
          type="button"
          className="shrink-0 text-xs text-secondary font-semibold px-4 py-1 border border-secondary hover:cursor-pointer"
        >
          Reply
        </button>
      </div>
    </div>
  );
}

function getRelativeTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();

  // Calculate the difference in milliseconds and convert to days
  const diffInMs = date.getTime() - now.getTime();
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  // Initialize the built-in browser relative time formatter
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  return rtf.format(diffInDays, "day");
}

export default Comments;
