import Skeleton from "react-loading-skeleton";

function PersonalInfo(props) {
    const { image, name, description, saved, favorite, reviews } = props
  return (
    <section className="w-screen max-w-4xl px-6 mx-auto border-b-2 border-solid border-outline-variant pb-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src={image}
          alt="Profile"
          className="w-50 h-50 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-y-6 grow">
          <h1 className="text-5xl text-on-surface font-bold font-main-header">
            {name}
          </h1>
          <p className="text-secondary text-lg">
            {description}
          </p>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="flex flex-col gap-2 border-r-2 border-solid border-outline-variant pr-4">
              <span className="text-3xl text-primary font-semibold font-main-header">
                {saved}
              </span>
              <p className="text-xs text-secondary font-semibold">
                SAVED RESTAURANTS
              </p>
            </div>
            <div className="flex flex-col gap-2 border-r-2 border-solid border-outline-variant pr-4">
              <span className="text-3xl text-primary font-semibold font-main-header">
                {favorite}
              </span>
              <p className="text-xs text-secondary font-semibold">
                FAVORITE DISHES
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl text-primary font-semibold font-main-header">
                {reviews}
              </span>
              <p className="text-xs text-secondary font-semibold">
                REVIEWS WRITTEN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// skeleton loading component
export const ProfileSkeleton = () => (
  <section className="w-screen max-w-4xl px-6 mx-auto border-b-2 border-solid border-outline-variant pb-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center">
        <Skeleton width={200} height={200} borderRadius={8} />
        <div className="flex flex-col gap-y-6 grow">
          <Skeleton width={300} height={40} />
          <Skeleton width={500} height={20} count={2} />
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="flex flex-col gap-2 border-r-2 border-solid border-outline-variant pr-4">
              <Skeleton width={50} height={30} />
              <p className="text-xs text-secondary font-semibold">
                SAVED RESTAURANTS
              </p>
            </div>
            <div className="flex flex-col gap-2 border-r-2 border-solid border-outline-variant pr-4">
              <Skeleton width={50} height={30} />
              <p className="text-xs text-secondary font-semibold">
                FAVORITE DISHES
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton width={50} height={30} />
              <p className="text-xs text-secondary font-semibold">
                REVIEWS WRITTEN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default PersonalInfo;
