import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDropzone } from "react-dropzone";
import { ImagePlus, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import Error from "../error";
import {
  getMenuCatagories,
  getMenuItemsByName,
  setMenuItem,
} from "../../api/menuAPI";
import ConfirmationModal from "../modalsAndMessages/confirmationModal";
function AddMenu() {
  const [isHouseSpecial, setIsHouseSpecial] = useState(false);
  const [isTodaysSpecial, setIsTodaysSpecial] = useState(false);
  const [menuCatagories, setMenuCatagories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState({});

  useEffect(() => {
    const fetchMenuCatagories = async () => {
      try {
        const response = await getMenuCatagories();
        setMenuCatagories(response);
      } catch (error) {
        console.error("Error fetching menu catagories:", error);
      }
    };

    fetchMenuCatagories();
  }, []);

  const { control, register, handleSubmit, setError, formState, reset } =
    useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(async () => {
      try {
        let menuItemData = await getMenuItemsByName(data.dishNomenclature);
        if (menuItemData.length) {
          setConfirmationMessage({
            header: "Dish Cannot Be Published!",
            message: "A menu item was found with this menu name.",
            type: "error",
          });
          setIsModalOpen(true);
          setIsSubmitting(false);
          return;
        }
        data.houseSpecial = isHouseSpecial;
        data.todaysSpecial = isTodaysSpecial;
        const payload = new FormData();
        for (const [key, value] of Object.entries(data)) {
          payload.append(key, value);
        }
        menuItemData = Object.fromEntries(await setMenuItem(payload));

        if (menuItemData && menuItemData.Success) {
          setConfirmationMessage({
            header: "Dish Published Successfully!",
            message: "Your new culinary creation has been added to the restaurant menu. It is now live and visible to your patrons.",
            type: "success",
          });
          setIsModalOpen(true);
          reset();
          setIsHouseSpecial(false);
          setIsTodaysSpecial(false);
        }
        setIsSubmitting(false);
      } catch (err) {
        setError("root", {
          type: "manual",
          message: err.message || "An unexpected error occurred",
        });
      }
    }, 2000);
  };

  const handleToggle = (i) => {
    if (i === 1) {
      setIsHouseSpecial(!isHouseSpecial);
    } else if (i === 2) {
      setIsTodaysSpecial(!isTodaysSpecial);
    }
  };

  const handleDiscard = () => {
    // Reset form fields and state
    reset();
    setIsHouseSpecial(false);
    setIsTodaysSpecial(false);
  };

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
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-y-4"
        >
          {errors.root && <Error text={errors.root.message} />}
          <section className="flex flex-col gap-y-2">
            <span className="text-md font-semibold">Signature Visual</span>
            <Controller
              name="coverImage"
              control={control}
              rules={{ required: "Visual Image Is Required" }}
              render={({ field }) => (
                <DropzoneInput
                  value={field.value}
                  onChange={field.onChange}
                  accept={{
                    "image/jpeg": [".jpg", ".jpeg"],
                    "image/png": [".png"],
                  }}
                  maxSize={10 * 1024 * 1024}
                  icon={ImagePlus}
                  label="Upload high-resolution photography"
                  helperText="JPEG, PNG up to 10MB"
                />
              )}
            />
            <Error text={errors.coverImage?.message} />
          </section>
          <section className="flex flex-col gap-y-6 border-b-2 border-outline-variant pb-6">
            <div className="flex flex-col gap-y-2">
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
                {...register("dishNomenclature", {
                  required: {
                    value: true,
                    message: "Dish Nomenclature is Required",
                  },
                })}
                className="border-b-2 border-outline-variant outline-none focus:ring-0"
              />
              <Error text={errors.dishNomenclature?.message} />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="category"
                  className="text-sm text-on-surface-variant font-bold"
                >
                  Course / Category
                </label>

                <input
                  list="items-list"
                  id="category"
                  placeholder="Select or type..."
                  required
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Restaurant category is Required",
                    },
                  })}
                  className="border-b-2 border-outline-variant outline-none focus:ring-0"
                />
                <Error text={errors.category?.message} />
                <datalist id="items-list">
                  {menuCatagories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </datalist>
              </div>
              <div className="flex flex-col gap-y-2">
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
                  {...register("value", {
                    required: {
                      value: true,
                      message: "Value is Required",
                    },
                  })}
                  className="border-b-2 border-outline-variant outline-none focus:ring-0"
                />
                <Error text={errors.value?.message} />
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
                {...register("narrative", {
                  required: {
                    value: true,
                    message: "Culinary narrative is Required",
                  },
                })}
                className="border-none outline-none focus:ring-0"
              />
            </div>
          </section>
          <section className="flex flex-col gap-y-2 py-6 border-b border-outline-variant">
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant font-semibold">
                Designate as House Special
              </span>
              <button
                type="button"
                className={`w-12.5 h-6 rounded-full cursor-pointer shadow-md relative transition-colors duration-200 ${
                  isHouseSpecial ? "bg-primary" : "bg-surface-container-highest"
                }`}
                onClick={() => handleToggle(1)}
              >
                <div
                  className={`w-5 h-5 bg-on-tertiary rounded-full absolute top-0.5 left-0.5 transition-transform duration-200 shadow-sm ${
                    isHouseSpecial ? "translate-x-7" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant font-semibold">
                Feature as Today's Special
              </span>
              <button
                type="button"
                className={`w-12.5 h-6 rounded-full cursor-pointer shadow-md relative transition-colors duration-200 ${
                  isTodaysSpecial
                    ? "bg-primary"
                    : "bg-surface-container-highest"
                }`}
                onClick={() => handleToggle(2)}
              >
                <div
                  className={`w-5 h-5 bg-on-tertiary rounded-full absolute top-0.5 left-0.5 transition-transform duration-200 shadow-sm ${
                    isTodaysSpecial ? "translate-x-7" : "translate-x-0"
                  }`}
                ></div>
              </button>
            </div>
          </section>
          <div className="py-6 flex flex-row-reverse gap-6">
            <button
              disabled={isSubmitting}
              type="submit"
              className={`px-4 py-2 text-xs font-semibold bg-secondary text-on-tertiary focus:outline-none hover:border-2 hover:border-secondary hover:bg-on-tertiary hover:text-secondary transition-colors ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Publish Dish
            </button>
            <button
              disabled={isSubmitting}
              type="button"
              onClick={handleDiscard}
              className={`px-4 py-2 text-xs font-semibold border-2 border-secondary text-secondary focus:outline-none hover:bg-secondary hover:text-on-tertiary transition-colors ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              Discard
            </button>
          </div>
        </form>
        <ConfirmationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          confirmationMessage={confirmationMessage}
        />
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

export default AddMenu;
