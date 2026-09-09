import { Heart, Share2 } from "lucide-react";

function MenuHero(params) {
    const {image, unknown, name, description, time, location, rating, reviews} = params;
  return (
    <div className="container relative flex flex-col gap-y-4">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-100 object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-3 absolute left-5 bottom-40 md:bottom-15">
        <p className="text-sm text-primary-fixed-dim font-bold">
          {unknown}
        </p>
        <h1 className="text-left text-4xl text-surface-container-high font-bold font-main-header">
          {name}
        </h1>
        <p className="text-xs text-surface-container-high max-w-75 block">
            {description}
        </p>
      </div>
      <div className="flex flex-col gap-y-3 md:flex-row px-5 md:absolute md:w-full md:bottom-3">
        <div className="flex flex-col gap-y-3 text-sm text-secondary font-bold md:flex-row md:flex-1 md:gap-x-3 md:items-center md:text-surface-container-high">
          <p>Dinner: {time}</p>
          <p>{location}</p>
          <p className="text-primary">{rating} ({reviews} reviews)</p>
        </div>
        <div className="flex gap-x-2 text-secondary md:text-surface-container-high">
          <div className="w-10 h-7.5 flex items-center justify-center border-3 border-solid border-secondary rounded-sm md:border-surface-container-high">
            <Heart className="w-4 h-4" />
          </div>
          <div className="w-10 h-7.5 flex items-center justify-center border-3 border-solid border-secondary rounded-sm md:border-surface-container-high">
            <Share2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHero;
