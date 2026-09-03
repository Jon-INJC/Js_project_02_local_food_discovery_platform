import { Bookmark } from "lucide-react";
import ProfileNav from "../components/profileNav";
function Profile() {
  return (
    <>
      <ProfileNav />
      <main className="bg-on-tertiary mt-10">
        <section className="w-screen max-w-4xl px-6 mx-auto border-b-2 border-solid border-outline-variant pb-10">
          <div className="container flex flex-col gap-6 md:flex-row md:items-center">
            <img
              src="https://placehold.co/400x400/orange/white"
              alt="Profile"
              className="w-50 h-50 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-y-6 grow">
              <h1 className="text-5xl text-on-surface font-bold font-main-header">
                John Doe
              </h1>
              <p className="text-secondary text-lg">
                Culinary explorer seeking the perfect balance of ambiance and
                authentic flavors. Passionate about natural wine and modern
                coastal cuisine.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="flex flex-col gap-2 border-r-2 border-solid border-outline-variant pr-4">
                  <span className="text-3xl text-primary font-semibold font-main-header">
                    24
                  </span>
                  <p className="text-xs text-secondary font-semibold">
                    SAVED RESTAURANTS
                  </p>
                </div>
                <div className="flex flex-col gap-2 border-r-2 border-solid border-outline-variant pr-4">
                  <span className="text-3xl text-primary font-semibold font-main-header">
                    112
                  </span>
                  <p className="text-xs text-secondary font-semibold">
                    FAVORITE DISHES
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl text-primary font-semibold font-main-header">
                    8
                  </span>
                  <p className="text-xs text-secondary font-semibold">
                    REVIEWS WRITTEN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto border-b-2 border-solid border-outline-variant pb-10">
          <div className="container flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl text-on-surface font-bold font-main-header mt-10 mb-6">
                Saved Restaurants
              </h2>
              <a
                href="#"
                className="text-primary underline hover:-translate-y-1 decoration-primary text-xs font-bold"
              >
                VIEW ALL
              </a>
            </div>
            <div className="grid grid-cols-12 grid-rows-12 gap-x-6 gap-y-2">
              <div className="col-span-12 row-span-7 md:col-span-8 md:row-span-12">
                <div className="relative">
                  <div className="p-1 absolute top-5 right-5 bg-surface-bright rounded-md">
                    <Bookmark className="fill-primary stroke-0" />
                  </div>
                  <img
                    src="https://placehold.co/600x400/orange/white"
                    alt="Restaurant"
                    className="w-full h-87 object-cover"
                  />
                  <div className="w-[90%] p-4 flex flex-col gap-2 absolute -bottom-20 left-1/2 -translate-x-1/2 bg-surface border-2 border-solid border-outline-variant">
                    <span className="text-2xl text-on-surface font-bold font-main-header">
                      L'Osteria del Mare
                    </span>
                    <p className="text-secondary text-sm font-medium">
                      COASTAL ITALIAN • VENICE, CA
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative col-span-6 row-span-5 md:col-span-4 md:row-span-6">
                <div className="p-1 absolute top-5 right-5 bg-surface-bright rounded-md">
                  <Bookmark className="fill-primary stroke-0" />
                </div>
                <img
                  src="https://placehold.co/600x500/orange/white"
                  alt="Restaurant"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-lg text-on-surface font-semibold">
                    Verdant
                  </span>
                  <p className="text-secondary text-xs font-medium">
                    New American • Brooklyn, NY
                  </p>
                </div>
              </div>
              <div className="relative col-span-6 row-span-5 md:col-span-4 md:row-span-6">
                <div className="p-1 absolute top-5 right-5 bg-surface-bright rounded-md">
                  <Bookmark className="fill-primary stroke-0" />
                </div>
                <img
                  src="https://placehold.co/600x500/orange/white"
                  alt="Restaurant"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <span className="text-lg text-on-surface font-semibold">
                    The Green Room
                  </span>
                  <p className="text-secondary text-xs font-medium">
                    Farm-to-Table • San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
