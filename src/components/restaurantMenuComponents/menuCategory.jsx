function MenuCategory({ categories, onCategoryClick }) {
  return (
    <div className="flex gap-x-6 mt-5 justify-center items-center px-6 py-3 text-xs font-bold border-t-2 border-b-2 border-solid border-outline-variant overflow-x-auto no-scrollbar md:justify-start">
      <button
        onClick={() => onCategoryClick(null)}
        className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryClick(category.id)}
          className="text-secondary hover:text-on-surface hover:underline hover:-mt-1 decoration-on-surface"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default MenuCategory;

