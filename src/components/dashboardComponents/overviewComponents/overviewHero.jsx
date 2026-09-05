import { Heart, Plus, Star, Utensils } from "lucide-react";

function OverviewHero() {
  return (
    <div className="container mt-7 flex flex-col gap-y-15">
      <div className="flex items-start justify-between md:items-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl text-on-surface font-bold font-main-header">
            Good morning, Chef.
          </h1>
          <p className="text-xs text-secondary md:text-sm md:max-w-full">
            Here is an overview of your restaurant's performance today.
          </p>
        </div>
        <button
          type="button"
          className=" hidden text-xs justify-center items-center px-3 py-3 border text-on-tertiary bg-primary hover:cursor-pointer md:flex"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>
      <div className="w-full flex gap-x-6">
        <OverviewInfoCard
          title="TOTAL MENU ITEMS"
          value="42"
          icon={<Utensils className="w-4 h-4 text-outline" />}
        />
        <OverviewInfoCard
          title="TOTAL LIKES"
          value="1,204"
          icon={<Heart className="w-4 h-4 text-outline" />}
        />
        <OverviewSpecialCard
          title="Truffle Risotto"
          text="Currently featured on the main discovery feed."
        />
      </div>
    </div>
  );
}

function OverviewInfoCard(props) {
  const { title, value, icon } = props;
  return (
    <div className="w-full h-35 p-5 flex flex-col gap-y-3 border-3 border-outline-variant">
      <div className="flex items-center justify-between">
        <p className="max-w-1/2 text-xs text-secondary font-bold">{title}</p>
        {icon}
      </div>
      <p className="text-3xl text-on-surface font-bold font-main-header">
        {value}
      </p>
      <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-md bg-surface-tint"></div>
    </div>
  );
}

function OverviewSpecialCard(props) {
  const { title, text } = props;
  return (
    <div className="p-5 flex flex-col gap-y-2 bg-primary grow md:gap-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-inverse-primary">TODAY'S SPECIAL</p>
        <Star className="w-4 h-4 text-primary-fixed" />
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xl text-on-tertiary font-bold font-main-header md:text-3xl">
          {title}
        </h3>
        <p className="text-xs text-inverse-primary">{text}</p>
      </div>
    </div>
  );
}

export default OverviewHero;
