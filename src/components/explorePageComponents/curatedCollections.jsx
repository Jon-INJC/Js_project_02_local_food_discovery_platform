function CuratedCollections() {
  return (
    <div className="container flex flex-col space-y-6 mt-10">
      <h2 className="max-w-md text-left text-4xl font-bold font-main-header">
        Curated Collections
      </h2>
      <div className="flex gap-6 pl-6 overflow-x-auto no-scrollbar">
        <CuratedCollectionsCard
          image="https://placehold.co/300x400/orange/white"
          title="Morning Brews"
          spots={12} />
        <CuratedCollectionsCard
          image="https://placehold.co/300x400/orange/white"
          title="Artisan Pastry"
          spots={8} />
        <CuratedCollectionsCard
          image="https://placehold.co/300x400/orange/white"
          title="Haute Cuisine"
          spots={4} />
        <CuratedCollectionsCard
          image="https://placehold.co/300x400/orange/white"
          title="Evening Spirits"
          spots={6} />
        
      </div>
    </div>
  );
}

function CuratedCollectionsCard(params) {
    const { image, title, spots } = params;
    return (
        <div className="flex flex-col items-start shrink-0">
          <img
            src={image}
            alt=""
            className="w-50 h-55 object-cover"
          />
          <h3 className="text-left text-2xl font-bold font-main-header">
            {title}
          </h3>
          <p className="text-sm text-secondary">{spots} Spots</p>
        </div>
      );
};

export default CuratedCollections;