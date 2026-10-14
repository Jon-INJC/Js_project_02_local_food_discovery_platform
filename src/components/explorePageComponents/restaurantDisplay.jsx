import { Bookmark } from "lucide-react";

function RestaurantDisplay({ restaurant, onClick }) {
  return (
    //render the restaurant details here
    <div onClick={onClick} className="w-full max-w-lg mx-auto flex flex-col justify-between p-4 border-2 border-outline-variant">
      <div className="flex flex-col gap-2">
        <div className="w-full h-48 overflow-hidden rounded-md relative">
          <img
            src={restaurant.coverImage}
            alt=""
            className="w-full h-48 object-cover"
          />
          <img
            src={restaurant.logo}
            alt=""
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
          />
        </div>

        <h3 className="text-2xl text-on-surface font-bold font-main-header">
          {restaurant.name}
        </h3>
        <p className="text-sm font-medium text-primary">
          {restaurant.category}
        </p>

        <p className="text-sm text-secondary">{restaurant.description}</p>
      </div>
      <div className="flex gap-3 items-end pt-2 border-t-2 border-outline-variant">
        <p className="flex gap-1 grow items-center text-sm text-on-surface">
          <Bookmark className="w-3 h-3 stroke-0 fill-primary" />
          {restaurant.saveCount} Saves
        </p>
      </div>
    </div>
  );
}

// skeleton component for loading state
 export const RestaurantDisplaySkeleton = () => (
  <div className="w-full max-w-lg mx-auto flex flex-col justify-between p-4 border-2 border-outline-variant">
    <div className="flex flex-col gap-2">
      <div className="w-full h-48 overflow-hidden rounded-md relative">
        <Skeleton width="100%" height={192} />
      </div>
      <Skeleton width="60%" height={24} />
      <Skeleton width="40%" height={16} />
      <Skeleton width="80%" height={16} />
    </div>
    <div className="flex gap-3 items-end pt-2 border-t-2 border-outline-variant">
      <Skeleton width="30%" height={16} />
    </div>
  </div>
);

export default RestaurantDisplay;
