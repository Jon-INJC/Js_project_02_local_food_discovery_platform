import { Heart } from "lucide-react";
import { useMenu } from "../../../context_API/menuContextProvider";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

function MostEngagedItems() {
  const { menuItems, loading } = useMenu();
  const [likeCount, setLikeCount] = useState(50);

  const filteredItems = menuItems
    .filter((item) => item.likesCount > likeCount)
    .sort((a, b) => b.likesCount - a.likesCount);

  const handelClick = () => {
    setLikeCount(0);
  };

  return (
    <div className="col-span-12 row-span-12 p-4 border-2 border-outline-variant md:col-span-7">
      <span className="block pb-2 mb-10 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
        Most Engaged Menu Items
      </span>
      <div className="flex flex-col gap-6">
        {loading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <MostEngagedItemSkeleton key={index} />
          ))
        ) : filteredItems.length === 0 ? (
          <h3>No menu items found</h3>
        ) : (
          filteredItems.map((item, index) => (
            <MostEngagedItem
              rank={index + 1}
              image={
                item.image
                  ? item.image
                  : "https://placehold.co/200x100/orange/white"
              }
              name={item.name}
              likes={item.likesCount}
            />
          ))
        )}

        {!loading && (
          <button
            type="button"
            onClick={handelClick}
            className="text-sm text-primary underline decoration-primary font-semibold"
          >
            VIEW FULL MENU PERFORMANCE
          </button>
        )}
      </div>
    </div>
  );
}

// skeleton card component for loading state
function MostEngagedItemSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton width={30} height={30} />
      <Skeleton width={50} height={50} />
      <div className="flex flex-col gap-2">
        <Skeleton width={200} height={20} />
        <Skeleton width={80} height={16} />
      </div>
    </div>
  );
}

function MostEngagedItem(props) {
  const { rank, image, name, likes } = props;
  return (
    <div className="flex items-center gap-2">
      <span className="mr-3 text-2xl text-primary-fixed-dim font-main-header font-bold">
        {rank}
      </span>
      <img
        src={image}
        alt=""
        className="w-13 h-13 rounded-md border-2 border-outline-variant object-cover"
      />
      <div className="flex flex-col gap-1">
        <span className="text-xl text-on-surface font-main-header font-bold">
          {name}
        </span>
        <p className="text-xs text-secondary font-medium flex items-center gap-1">
          <Heart className="w-3 h-3" />
          {likes} Likes
        </p>
      </div>
    </div>
  );
}

export default MostEngagedItems;
