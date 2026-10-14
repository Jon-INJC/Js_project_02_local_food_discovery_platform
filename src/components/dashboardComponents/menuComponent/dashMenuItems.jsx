import { Heart, Pencil, Trash2 } from "lucide-react";
import { useMenu } from "../../../context_API/menuContextProvider";
import Skeleton from "react-loading-skeleton";

function DashMenuItems() {
  const { menuItems, loading } = useMenu();

  return (
    <div className="container mt-7 flex flex-col gap-y-5 overflow-y-scroll">
      <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 text-secondary text-xs border-b-2 border-outline-variant md:font-bold">
        <p className="text-center">ITEM NAME</p>
        <p>CATEGORY</p>
        <p>PRICE</p>
        <p>LIKES</p>
        <p className="text-right">ACTIONS</p>
      </div>
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <MenuItemsSkeletonCard key={index} />
        ))
      ) : menuItems.length === 0 ? (
        <p className="text-secondary text-sm">No menu items found.</p>
      ) : (
        menuItems.map((item) => (
          <MenuItemsRow
            key={item.id || item._id}
            image={item.image || "https://placehold.co/400x500/orange/white"}
            itemName={item.name || item.title}
            description={item.description}
            category={item.category || "General"}
            price={item.price || 0}
            likes={item.likesCount || 0}
          />
        ))
      )}
    </div>
  );
}

// skeleton card component for loading state
function MenuItemsSkeletonCard() {
  return (
    <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-6 bg-on-tertiary border-2 border-surface-container-highest rounded-sm shadow-md">
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <Skeleton width={30} height={30} />
        <div className="flex flex-col gap-1">
          <Skeleton width={140} height={24} />
          <Skeleton width={200} height={20} />
        </div>
      </div>
      <Skeleton width={100} height={20} />
      <Skeleton width={50} height={24} />
      <div className="flex items-center gap-2">
        <Skeleton className="w-4 h-4" />
        <Skeleton width={30} height={20} />
      </div>
      <div className="flex items-center justify-end gap-3">
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-5 h-5" />
      </div>
    </div>
  );
}

function MenuItemsRow(props) {
  const { image, itemName, description, category, price, likes } = props;
  return (
    <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-6 bg-on-tertiary border-2 border-surface-container-highest rounded-sm shadow-md">
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <img src={image} alt="" className="w-12.5 h-12.5 object-cover" />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm text-on-surface font-bold font-main-header md:text-xl">
            {itemName}
          </h3>
          <p className="text-xs text-secondary">{description}</p>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant">{category}</p>
      <p className="text-lg text-primary font-bold font-main-header">
        ${price.toFixed(2)}
      </p>
      <div className="flex items-center gap-2 text-secondary">
        <Heart className="w-4 h-4" />
        <p className="text-sm">{likes}</p>
      </div>
      <div className="flex items-center justify-end gap-3 text-secondary">
        <Pencil className="w-5 h-5" />
        <Trash2 className="w-5 h-5" />
      </div>
    </div>
  );
}

export default DashMenuItems;
