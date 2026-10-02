import { Heart } from "lucide-react";
import { useMenu } from "../../../context_API/menuContextProvider";
import { useState } from "react";

function MostEngagedItems() {
  const { menuItems, loading } = useMenu();
  const [ likeCount, setLikeCount ] = useState(50)

  const filteredItems = menuItems.filter(item => item.likesCount > likeCount).sort((a, b) => b.likesCount - a.likesCount);

  if (loading) {
    return (
      <div className="container mt-7 text-secondary">Loading menu items...</div>
    );
  }

  const handelClick = () => {
    setLikeCount(0);
  }

  return (
    <div className="col-span-12 row-span-12 p-4 border-2 border-outline-variant md:col-span-7">
      <span className="block pb-2 mb-10 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
        Most Engaged Menu Items
      </span>
      <div className="flex flex-col gap-6">
        {filteredItems.length === 0 ? (
          <h3>No menu items found</h3>
        ) : (
          filteredItems.map((item, index) => (
            <MostEngagedItem
              rank={index + 1}
              image={item.image? item.image :"https://placehold.co/200x100/orange/white"}
              name={item.name}
              likes={item.likesCount}
            />
          ))
        )}
        <button
          type="button"
          onClick={handelClick}
          className="text-sm text-primary underline decoration-primary font-semibold"
        >
          VIEW FULL MENU PERFORMANCE
        </button>
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
