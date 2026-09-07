import { Bookmark, Eye, Heart } from "lucide-react";

function MostEngagedItems() {
  return (
    <div className="col-span-12 row-span-12 p-4 border-2 border-outline-variant md:col-span-7">
      <span className="block pb-2 mb-10 text-xl text-on-surface font-bold font-main-header border-b-2 border-outline-variant">
        Most Engaged Menu Items
      </span>
      <div className="flex flex-col gap-6">
        <MostEngagedItem
          rank="01"
          image="https://placehold.co/200x100/orange/white"
          name="Truffle Risotto"
          views="1,284"
          likes="183"
          saves="74"
        />
        <a
          href="#"
          className="text-sm text-primary underline decoration-primary font-semibold"
        >
          VIEW FULL MENU PERFORMANCE
        </a>
      </div>
    </div>
  );
}

function MostEngagedItem(props) {
  const { rank, image, name, views, likes, saves } = props;
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
        <div className="flex items-center gap-3">
          <p className="text-xs text-secondary font-medium flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {views} Views
          </p>
          <p className="text-xs text-secondary font-medium flex items-center gap-1">
            <Heart className="w-3 h-3" />
            {likes} Likes
          </p>
          <p className="text-xs text-secondary font-medium flex items-center gap-1">
            <Bookmark className="w-3 h-3" />
            {saves} Saves
          </p>
        </div>
      </div>
    </div>
  );
}

export default MostEngagedItems;
