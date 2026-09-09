function EditorialSelection() {
  return (
    <div className="container flex flex-col  space-y-6 mt-10">
      <div className="flex items-center justify-between border-b-2 border-solid border-outline-variant">
        <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
          The Editorial Selection
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-4 md:justify-end md:items-start md:flex-row md:space-x-6">
        <EditorialSelectionCard
          image="https://placehold.co/300x400/orange/white"
          title="Osteria Delle Vigne"
          description="Hidden away in a lush courtyard, serving regional Italian classics with a focus on ancient grains and natural wines."
          category="RUSTIC MEDITERRANEAN"
          priceRange="$$$$"
          dishImage="https://placehold.co/100x100/orange/white"
          signatureDish="Hand-rolled Pici Cacio e Pepe"
        />
        <EditorialSelectionCard
          image="https://placehold.co/300x400/orange/white"
          title="Saffron & Sage"
          description="A modern take on traditional Indian cuisine, featuring bold spices and fresh ingredients."
          category="MODERN INDIAN"
          priceRange="$$$"
          dishImage="https://placehold.co/100x100/orange/white"
          signatureDish="Butter Chicken"
        />
      </div>
    </div>
  );
}

function EditorialSelectionCard(props) {
  const {
    image,
    title,
    description,
    category,
    priceRange,
    dishImage,
    signatureDish,
  } = props;
  return (
    <div className="flex flex-col items-start">
      <img src={image} alt="" className="max-w-75 max-h-100 object-cover" />
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs text-secondary">
          {category} . {priceRange}
        </p>
        <h3 className="text-left text-4xl font-bold font-main-header">
          {title}
        </h3>
        <p className="text-xs text-secondary max-w-75 block">{description}</p>
        <div className="container flex gap-4 items-center pt-6 border-t-2 border-solid border-outline-variant">
          <img
            src={dishImage}
            alt=""
            className="w-15 h-15 object-cover rounded-md"
          />
          <div className="flex flex-col text-xs text-secondary">
            <p>SIGNATURE</p>
            <p className="text-on-surface">{signatureDish}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorialSelection;
