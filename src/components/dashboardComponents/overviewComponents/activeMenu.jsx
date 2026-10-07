import { Heart, ListFilter, Pencil, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { useMenu } from "../../../context_API/menuContextProvider";

function ActiveMenu() {

  const { menuItems, loading } = useMenu();
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return <div className="container mt-7 text-secondary">Loading menu items...</div>;
  }

  const filteredItems = menuItems.filter((item) =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="container mt-10 flex flex-col gap-y-15">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-on-surface font-bold font-main-header md:text-3xl">
          Active Menu
        </h2>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-x-2 border-b border-primary">
            <Search className="w-3 h-3 text-secondary" />
            <input
              className="border-none outline-none focus:ring-0"
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="text-sm text-secondary flex gap-x-2 justify-center items-center hover:cursor-pointer"
          >
            <ListFilter className="w-3 h-3 text-secondary" />
            Filter
          </button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredItems.length === 0 ? (
          <h3>No menu items found</h3>
        ) : (
            filteredItems.map((item) => (
              <ActiveMenuCard
                key={item.id || item._id}
                title={item.name}
                price={item.price}
                description={item.description}
                label={item.isHouseSpecial || item.isTodaySpecial ? "special" : "normal"}
                likes={item.likesCount || 0}
                image={
                  item.image || "https://placehold.co/400x500/orange/white"
                }
              />
            ))
        )}
      </div>
    </div>
  );
}

function ActiveMenuCard(props) {
  const { title, price, description, label, likes, image } = props;
  if ( label === "special") {
    return (
      <div className="max-w-lg flex p-4 border-2 border-outline-variant">
        <div className="relative">
          <p className="absolute top-3 left-3 text-[11px] text-on-tertiary bg-primary px-2 py-1 rounded-xs">
            SPECIAL
          </p>
          <img src={image} alt="" className="w-48 h-90 object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between grow ">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="text-2xl text-on-surface font-bold font-main-header">
                {title}
              </h3>
              <p className="text-sm text-primary">${price.toFixed(2)}</p>
            </div>
            <p className="text-sm text-secondary">{description}</p>
            <div className="flex gap-2">
              <p className="text-xs text-on-surface bg-surface-container-highest px-2 py-1 rounded-sm">
                DINNER
              </p>
              <p className="text-xs text-on-surface bg-surface-container-highest px-2 py-1 rounded-sm">
                VEGETARIAN
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-end pt-2 border-t-2 border-outline-variant">
            <p className="flex gap-1 grow items-center text-sm text-secondary">
              <Heart className="w-3 h-3 text-primary" />
              {likes} Likes
            </p>
            <Pencil className="w-5 h-5 text-secondary" />
            <Trash2 className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    );
  } else if (label !== "special") {
    return (
      <div className="max-w-90 flex flex-col justify-between p-4 border-2 border-outline-variant">
        <div className="flex flex-col gap-2">
          <img src={image} alt="" className="w-80 h-48 object-cover" />
          <div className="flex justify-between">
            <h3 className="text-2xl text-on-surface font-bold font-main-header">
              {title}
            </h3>
            <p className="text-sm text-primary">${price.toFixed(2)}</p>
          </div>
          <p className="text-sm text-secondary">{description}</p>
        </div>
        <div className="flex gap-3 items-end pt-2 border-t-2 border-outline-variant">
          <p className="flex gap-1 grow items-center text-sm text-secondary">
            <Heart className="w-3 h-3 text-primary" />
            {likes} Likes
          </p>
          <Pencil className="w-5 h-5 text-secondary" />
          <Trash2 className="w-5 h-5 text-secondary" />
        </div>
      </div>
    );
  } else {
    return <h3>No menu item found</h3>;
  }
}

export default ActiveMenu;
