import React from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload, Camera } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import Error from "./error";
function RegStep2() {
  
  const { control, register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted.", data);
  };

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
          onSubmit={handleSubmit(onSubmit)}
          noValidate
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
            <Controller
              name="restaurantLogo"
              control={control}
              rules={{ required: "Restaurant Logo Is Required" }}
              render={({ field }) => (
                <DropzoneInput
                  value={field.value}
                  onChange={field.onChange}
                  accept={{ "image/png": [".png"], "image/svg+xml": [".svg"] }}
                  maxSize={5 * 1024 * 1024}
                  icon={CloudUpload}
                  label="Click to upload or drag and drop"
                  helperText="PNG, SVG (max. 5MB)"
                />
              )}
            />
            <Error text={errors.restaurantLogo?.message} />
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
            <Controller
              name="coverImage"
              control={control}
              rules={{ required: "Restaurant Cover Image Is Required" }}
              render={({ field }) => (
                <DropzoneInput
                  value={field.value}
                  onChange={field.onChange}
                  accept={{
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/png": [".png"],
                  }}
                  maxSize={10 * 1024 * 1024}
                  icon={Camera}
                  label="Upload Cover Image"
                  helperText="High-res JPG or PNG, horizontal orientation preferred"
                />
              )}
            />
            <Error text={errors.coverImage?.message} />
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
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid Email Format",
                    },
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                  className="border-b border-outline-variant outline-none focus:border-primary py-2"
                />
                <Error text={errors.email?.message} />
              </div>

              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-bold text-on-surface-variant">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  id="phone"
                  placeholder="+251 911 234 567"
                  inputmode="tel"
                  {...register("phone", {
                    pattern: {
                      value: /^(\+251\s?|0)[79]\d{8}$/,
                      message: "Invalid Phone Format",
                    },
                    required: {
                      value: true,
                      message: "Phone is Required",
                    },
                  })}
                  className="border-b border-outline-variant outline-none focus:border-primary py-2"
                />
                <Error text={errors.phone?.message} />
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

function DropzoneInput({
  value,
  onChange,
  accept,
  maxFiles,
  maxSize,
  icon: Icon,
  label,
  helperText,
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    maxFiles,
    maxSize,
    onDrop: (acceptedFiles) => {
      // Store the file in React Hook Form state
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="h-40 border border-dashed border-primary/40 flex flex-col items-center justify-center gap-y-2 cursor-pointer rounded-md hover:bg-surface-variant/20 transition-colors"
    >
      <input {...getInputProps()} />
      <Icon className="w-8 h-8 text-secondary" />
      <p className="text-sm font-medium">{value ? value.name : label}</p>
      <p className="text-xs text-on-surface-variant">{helperText}</p>
    </div>
  );
}

export default RegStep2;
