import Nav from "../components/navBar";
import Footer from "../components/footer";
import MenuHero from "../components/restaurantMenuComponents/MenuHero";
import MenuCategory from "../components/restaurantMenuComponents/menuCategory";
function Menu() {
  return (
    <>
      <Nav />
      <main className="bg-on-tertiary">
        <section className="w-screen max-w-4xl md:px-6 mx-auto">
          <MenuHero
            image="https://placehold.co/800x600/orange/white"
            unknown="CONTEMPORARY NORDIC"
            name="Lumina Oslo"
            description="An exploration of foraging and fermentation, presented with uncompromising minimalism. A multi-sensory journey through the landscapes of the North."
            time="Wed - Sun, 18:00 - 23:00"
            location="Aker Brygge, Oslo"
            rating="4.9"
            reviews="128"
          />
          <MenuCategory />
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
