import React from "react";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";
function AddMenu() {
  const DishImage = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      console.log("Dish Image:", acceptedFiles);
    },
  });

  return (
    <>
      <div className="w-200 p-6 mx-auto flex flex-col gap-4 rounded-lg border-t-4 border-primary bg-on-tertiary shadow-md">
        <div className="flex justify-between pb-3 border-b-2 border-outline-variant">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl text-on-surface font-bold font-main-header">
              Curate Dish
            </h1>
            <p className="text-xs text-secondary md:text-sm md:max-w-full">
              Add a new culinary creation to your portfolio.
            </p>
          </div>
          <button type="button" className="text-secondary cursor-pointer hover:text-on-surface hover:scale-110 transition-transform">
            <X />
          </button>
        </div>
        <form action="" className="flex flex-col gap-y-4">
          <section className="flex flex-col gap-y-2">
            <span className="text-md font-semibold">Signature Visual</span>
            <div
              {...DishImage.getRootProps()}
              className="h-60 bg-dish-img bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-y-2 opacity-40 cursor-pointer rounded-md hover:bg-surface-variant/20 transition-colors"
            >
              <input {...DishImage.getInputProps()} required />

              <ImagePlus className="w-8 h-8 text-secondary" />

              <p className="text-sm font-medium">
                Upload high-resolution photography
              </p>

              <p className="text-xs text-on-surface-variant">
                JPEG, PNG up to 10MB
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-y-6 border-b-2 border-outline-variant pb-6">
            <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
              <label
                htmlFor="dishNomenclature"
                className="text-sm text-on-surface-variant font-bold"
              >
                Dish Nomenclature
              </label>
              <input
                type="text"
                id="dishNomenclature"
                placeholder="e.g., Truffle Infused Risotto"
                required
                className="border-none outline-none focus:ring-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
                <label
                  htmlFor="category"
                  className="text-sm text-on-surface-variant font-bold"
                >
                  Course / Category
                </label>
                <input
                  type="text"
                  id="category"
                  placeholder="e.g., Main Course"
                  required
                  className="border-none outline-none focus:ring-0"
                />
              </div>
              <div className="flex flex-col gap-y-2 border-b-2 border-outline-variant">
                <label
                  htmlFor="value"
                  className="text-sm text-on-surface-variant font-bold"
                >
                  Value
                </label>
                <input
                  type="text"
                  id="value"
                  placeholder="e.g., $15.99"
                  required
                  className="border-none outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="narrative"
                className="text-sm text-on-surface-variant font-bold"
              >
                Culinary Narrative
              </label>
                <textarea
                  id="narrative"
                  placeholder="Describe the culinary story behind this dish..."
                  required
                  className="border-none outline-none focus:ring-0"
                />
            </div>
          </section>
          <section className="flex flex-col gap-y-2 py-6 border-b border-outline-variant">
            <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant font-semibold">Designate as House Special</span>
                <button className="w-12.5 h-5 bg-surface-container-highest rounded-full cursor-pointer shadow-md relative">
                    <div className="w-4 h-4 bg-on-tertiary rounded-full absolute left-1 top-1/2 -translate-y-1/2"></div>
                </button>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-on-surface-variant font-semibold">Feature as Today's Special</span>
                <button className="w-12.5 h-5 bg-surface-container-highest rounded-full cursor-pointer shadow-md relative">
                    <div className="w-4 h-4 bg-on-tertiary rounded-full absolute left-1 top-1/2 -translate-y-1/2"></div>
                </button>
            </div>
          </section>
          <div className="py-6 flex flex-row-reverse gap-6">
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold bg-secondary text-on-tertiary focus:outline-none cursor-pointer hover:border-2 hover:border-secondary hover:bg-on-tertiary hover:text-secondary transition-colors"
            >
              Publish Dish
            </button>
            <button
              type="button"
              className="px-4 py-2 text-xs font-semibold border-2 border-secondary text-secondary focus:outline-none cursor-pointer hover:bg-secondary hover:text-on-tertiary transition-colors"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddMenu;
