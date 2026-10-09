import React from "react";
import { Heart, Plus, Star, Utensils } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useMenu } from "../../../context_API/menuContextProvider";
import Skeleton from "react-loading-skeleton";
function OverviewHero() {

  const { menuItems, loading } = useMenu();

  const likeCount = calculateTotalLikes(menuItems);
  const todaysSpecial = findTodaysSpecial(menuItems);

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
        <NavLink
          to="/dashboard/addmenu"
          className=" hidden text-xs justify-center items-center px-3 py-3 border text-on-tertiary bg-primary hover:cursor-pointer md:flex"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </NavLink>
      </div>
      <div className="w-full flex gap-x-6">
        <OverviewInfoCard title="TOTAL MENU ITEMS" value={menuItems.length} icon={Utensils} loading={loading} />
        <OverviewInfoCard title="TOTAL LIKES" value={likeCount} icon={Heart} loading={loading} />
        <OverviewSpecialCard
          title={todaysSpecial?.name || "None Set!"}
          text={todaysSpecial ? "Currently featured on the main discovery feed." : ""}
          icon={Star}
          loading={loading}
        />
      </div>
    </div>
  );
}

function OverviewInfoCard(props) {
  const { title, value, icon, loading } = props;
  return (
    <div className="relative w-50 h-35 p-5 flex flex-col gap-y-3 border-3 border-outline-variant">
      <div className="flex items-center justify-between">
        <p className="max-w-1/2 text-xs text-secondary font-bold">{!loading ? title : <Skeleton width={100} />}</p>
        {!loading ? icon &&
          React.createElement(icon, { className: "w-4 h-4 text-outline" }) : <Skeleton width={20} height={20} />}
      </div>
      <p className="text-3xl text-on-surface font-bold font-main-header">
        { !loading ? value : <Skeleton /> }
      </p>
      <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-md bg-surface-tint"></div>
    </div>
  );
}

function OverviewSpecialCard(props) {
  const { title, text, icon, loading } = props;
  return (
    <div className="p-5 flex flex-col gap-y-2 bg-primary grow md:gap-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-inverse-primary">TODAY'S SPECIAL</p>
        {!loading ? icon &&
          React.createElement(icon, { className: "w-4 h-4 text-on-tertiary" }) : <Skeleton width={20} height={20} />}
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="text-xl text-on-tertiary font-bold font-main-header md:text-3xl">
          { !loading ? title : <Skeleton width={200} /> }
        </h3>
        <p className="text-xs text-inverse-primary">{ !loading ? text : <Skeleton width={150} /> }</p>
      </div>
    </div>
  );
}

function calculateTotalLikes(menuitems){
  let totalCount = 0;

  menuitems.map(item => {
    if(item.likesCount){
      totalCount+= item.likesCount;
    }
  })

  return totalCount;
}

function findTodaysSpecial(menuItems){
  const special = menuItems.find(item => item.isTodaySpecial == true);
  return special;
}

export default OverviewHero;
