import Nav from "../components/navBar";
import Footer from "../components/footer";
function Menu() {
  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section className="w-screen max-w-4xl md:px-6 mx-auto">
          <div className="container relative flex flex-col gap-y-4">
            <div>
              <img
                src="https://placehold.co/400x500/orange/white"
                alt=""
                className="w-full h-100 object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-3 absolute left-5 bottom-40 md:bottom-15">
              <p className="text-sm text-primary-fixed-dim font-bold">
                CONTEMPORARY NORDIC
              </p>
              <h1 className="text-left text-4xl text-surface-container-high font-bold font-main-header">
                Lumina Oslo
              </h1>
              <p className="text-xs text-surface-container-high max-w-75 block">
                An exploration of foraging and fermentation, presented with
                uncompromising minimalism. A multi-sensory journey through the
                landscapes of the North.
              </p>
            </div>
            <div className="flex flex-col gap-y-3 md:flex-row px-5 md:absolute md:w-full md:bottom-3">
              <div className="flex flex-col gap-y-3 text-sm text-secondary font-bold md:flex-row md:flex-1 md:gap-x-3 md:items-center md:text-surface-container-high">
                <p>Dinner: Wed - Sun, 18:00 - 23:00</p>
                <p>Aker Brygge, Oslo</p>
                <p className="text-primary">4.9 (128 reviews)</p>
              </div>
              <div className="flex gap-x-2 text-secondary md:text-surface-container-high">
                <div className="w-10 h-7.5 flex items-center justify-center border-3 border-solid border-secondary rounded-sm md:border-surface-container-high">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="w-10 h-7.5 flex items-center justify-center border-3 border-solid border-secondary rounded-sm md:border-surface-container-high">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-6 mt-5 justify-center items-center px-6 py-3 text-xs font-bold border-t-2 border-b-2 border-solid border-outline-variant md:justify-start">
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
            >
              Tasting Menu
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
            >
              Starters
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
            >
              Main Course
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
            >
              Desserts
            </a>
            <a
              href="#"
              className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
            >
              Wine Cellar
            </a>
          </div>
        </section>
        <section className="w-screen max-w-4xl px-6 mx-auto">
          <div className="container flex flex-col space-y-6 mt-10">
            <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
              The Autumn Forage
            </h2>
            <p className="text-sm text-secondary block md:max-w-1/2">
              A curated 9-course experience capturing the transition from late
              summer abundance to the deep, earthy tones of autumn.
            </p>
            <div className="flex flex-col gap-x-4 md:flex-row">
              <div>
                <div className="flex flex-col relative">
                    <p className="absolute top-2 left-2 px-3 bg-surface-container-lowest border-2 border-outline-variant text-sm text-on-surface rounded-sm">Signature</p>
                  <img
                    src="https://placehold.co/400x500/orange/white"
                    alt=""
                    className="w-full max-h-50 object-cover"
                  />
                  <div className="flex justify-between">
                    <h3 className="text-left text-2xl font-bold font-main-header">
                      Diver Scallop & Pine
                    </h3>
                    <p className="text-xs text-on-surface">$32</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs text-on-surface-variant">
                      Hand-dived Hitra scallops gently warmed, served with
                      salted green strawberries, pine needle oil, and buttermilk
                      snow.
                    </p>
                    <p className="text-xs text-on-surface">2k</p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-col">
                  <img
                    src="https://placehold.co/400x500/orange/white"
                    alt=""
                    className="w-full max-h-50 object-cover"
                  />
                  <div className="flex justify-between">
                    <h3 className="text-left text-2xl font-bold font-main-header">
                      Heritage Emmer Bread
                    </h3>
                    <p className="text-xs text-on-surface">$14</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-xs text-on-surface-variant">
                      Warm sourdough made from ancient grains, accompanied by
                      cultured brown butter and smoked sea salt.
                    </p>
                    <p className="text-xs text-on-surface"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Menu;
