import { Heart, ListFilter, Pencil, Search, Trash2 } from "lucide-react";

function ActiveMenu() {
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
        {/* first card */}
        <ActiveMenuCard
          state="available"
          title="Truffle Risotto"
          price={32.00}
          description="Arborio rice slowly cooked in rich vegetable broth, finished with..."
          label="special"
          likes={342}
          image="https://placehold.co/400x500/orange/white"
        />
        {/* second card */}
        <ActiveMenuCard
          state="available"
          title="Seared Scallops"
          price={28.00}
          description="Pan-seared jumbo scallops served with pea purée, crispy pancetta, and micro basil."
          likes={289}
          image="https://placehold.co/400x500/orange/white"
        />
        {/* sold item card */}
        <ActiveMenuCard
          state="sold"
          title="Lobster Thermidor"
          price={35.00}
          description="Lobster meat in a rich, creamy sauce, served with saffron risotto."
          likes={256}
          image="https://placehold.co/400x500/orange/white"
        />
      </div>
    </div>
  );
}

function ActiveMenuCard(props) {
  const { state, title, price, description, label, likes, image } = props;
  if (state === "sold") {
    return (
      <div className=" max-w-lg flex p-4 border-2 border-outline-variant opacity-60">
        <div className="relative">
          <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[9px] text-secondary bg-surface-container-highest rounded-sm border-2 border-on-surface-outline-variant z-1 md:text-xs">
            SOLD OUT
          </p>
          <img src={image} alt="" className="w-48 h-90 object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between grow">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="text-2xl text-on-surface font-bold font-main-header">
                {title}
              </h3>
              <p className="text-sm text-primary">${price.toFixed(2)}</p>
            </div>
            <p className="text-sm text-secondary">{description}</p>
          </div>

          <div className="flex gap-3 justify-end pt-2 border-t-2 border-outline-variant">
            <Pencil className="w-5 h-5 text-secondary" />
          </div>
        </div>
      </div>
    );
  } else if (state === "available" && label === "special") {
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
  } else if (state === "available" && label !== "special") {
    return (
      <div className="max-w-90 flex flex-col justify-between p-4 border-2 border-outline-variant">
        <div className="flex flex-col gap-2">
          <img
            src={image}
            alt=""
            className="w-80 h-48 object-cover"
          />
          <div className="flex justify-between">
            <h3 className="text-2xl text-on-surface font-bold font-main-header">
              {title}
            </h3>
            <p className="text-sm text-primary">${price.toFixed(2)}</p>
          </div>
          <p className="text-sm text-secondary">
            {description}
          </p>
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
  }else {
    return (
        <h3>No menu item found</h3>
    );
  }
}

export default ActiveMenu;
