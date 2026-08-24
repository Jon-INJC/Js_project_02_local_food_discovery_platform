import React from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload, Camera } from "lucide-react";
function RegStep2() {
  const logoDropzone = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/svg+xml": [".svg"],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      console.log("Logo:", acceptedFiles);
    },
  });

  const coverDropzone = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      console.log("Cover:", acceptedFiles);
    },
  });

  return (
    <>
      <div className="container max-w-175 mx-auto pt-10 flex flex-col gap-y-4 items-center">
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-sm text-secondary font-bold">STEP 2 OF 3</p>
          <div className="w-50 h-1 bg-surface-variant rounded-full">
            <div className="w-2/3 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <h1 className="text-4xl text-center text-on-surface font-bold font-main-header">
            The Visual Identity of Your Table
          </h1>
          <p className="text-sm text-center text-on-surface-variant">
            Aura's editorial aesthetic relies on striking imagery. Please
            provide high- resolution assets that capture the true ambiance of
            your dining experience.
          </p>
        </div>
        <form
          action=""
          className="w-[90%] flex flex-col p-6 gap-y-5 bg-on-tertiary border-2 border-outline-variant"
        >
          <section className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold font-main-header">
              Restaurant Logo
            </h2>

            <p className="text-sm text-on-surface-variant">
              A high-contrast, scalable vector or high-res PNG (min 1024×1024)
              with a transparent background.
            </p>
            <div
              {...logoDropzone.getRootProps()}
              className="h-40 border border-dashed border-primary/40 flex flex-col items-center justify-center gap-y-2 cursor-pointer rounded-md hover:bg-surface-variant/20 transition-colors"
            >
              <input {...logoDropzone.getInputProps()} />

              <CloudUpload className="w-8 h-8 text-secondary" />

              <p className="text-sm font-medium">
                Click to upload or drag and drop
              </p>

              <p className="text-xs text-on-surface-variant">PNG, SVG (max. 5MB)</p>
            </div>
          </section>
          <section className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold font-main-header">
              Editorial Cover Image
            </h2>

            <p className="text-sm text-on-surface-variant">
              This is the hero image for your Aura profile. Choose a
              captivating, beautifully lit photograph of your space or signature
              dish. Avoid text overlays or collages.
            </p>
            <div
              {...coverDropzone.getRootProps()}
              className="h-40 border border-dashed border-primary/40 flex flex-col items-center justify-center gap-y-2 cursor-pointer rounded-md hover:bg-surface-variant/20 transition-colors"
            >
              <input {...coverDropzone.getInputProps()} />

              <Camera className="w-8 h-8 text-secondary" />

              <p className="text-sm font-medium">Upload Cover Image</p>

              <p className="text-xs text-on-surface-variant">
                High-res JPG or PNG, horizontal orientation preferred
              </p>
            </div>
          </section>

          <section className="border-t border-outline-variant pt-8 flex flex-col gap-y-6">
            <div>
              <h2 className="text-2xl font-bold font-main-header">
                Management Contact
              </h2>

              <p className="text-sm text-on-surface-variant">
                Internal contact details for Aura concierge and administrative
                purposes. Not visible to the public.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-bold text-on-surface-variant">
                  CONTACT EMAIL
                </label>

                <input
                  type="email"
                  placeholder="manager@restaurant.com"
                  className="border-b border-outline-variant outline-none focus:border-primary py-2"
                />
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-bold text-on-surface-variant">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="border-b border-outline-variant outline-none focus:border-primary py-2"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-between pt-6">
            <button
              type="button"
              className="px-8 py-4 border border-secondary font-bold font-main-header"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-10 py-4 bg-secondary text-on-tertiary font-bold font-main-header"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegStep2;
