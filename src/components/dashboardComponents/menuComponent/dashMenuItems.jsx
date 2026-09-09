import { Heart, Pencil, Trash2 } from "lucide-react";

function DashMenuItems() {
  return (
    <div className="container mt-7 flex flex-col gap-y-5">
      <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 text-secondary text-xs border-b-2 border-outline-variant md:font-bold">
        <p className="text-center">ITEM NAME</p>
        <p>CATEGORY</p>
        <p>PRICE</p>
        <p>LIKES</p>
        <p className="text-right">ACTIONS</p>
      </div>
      <MenuItemsRow 
        image="https://placehold.co/400x500/orange/white"
        itemName="Pan-Seared Scallops"
        description="With pea purée and crispy pancetta"
        category="Starter"
        price={24.0}
        likes={128}
      />
      <MenuItemsRow 
        image="https://placehold.co/400x500/orange/white"
        itemName="Wagyu Ribeye A5"
        description="Truffle mash, charred asparagus, demi-glace"
        category="Main"
        price={85.0}
        likes={342}
      />
    </div>
  );
}

function MenuItemsRow(props) {
    const { image, itemName, description, category, price, likes } = props;
  return (
    <div className="w-full px-4 py-3 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center gap-6 bg-on-tertiary border-2 border-surface-container-highest rounded-sm shadow-md">
      <div className="flex flex-col gap-2 md:flex-row md:items-center">
        <img
          src={image}
          alt=""
          className="w-12.5 h-12.5 object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-sm text-on-surface font-bold font-main-header md:text-xl">
            {itemName}
          </h3>
          <p className="text-xs text-secondary">
            {description}
          </p>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant">{category}</p>
      <p className="text-lg text-primary font-bold font-main-header">${price.toFixed(2)}</p>
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
