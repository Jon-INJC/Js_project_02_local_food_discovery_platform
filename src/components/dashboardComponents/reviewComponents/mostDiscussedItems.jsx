function MostDiscussedItems() {
  return (
    <div className="p-6 flex flex-col gap-4 border-2 border-outline-variant">
      <span className="text-2xl text-on-surface font-bold font-main-header">
        Most Discussed Items
      </span>
      <MostDiscussedItem name="Truffle Risotto" NoComments={38} />
      <MostDiscussedItem name="Lemon Tart" NoComments={27} />
      <MostDiscussedItem name="Wagyu Ribeye" NoComments={21} />
    </div>
  );
}

function MostDiscussedItem(props) {
  const { name, NoComments } = props;
  return (
    <div className="pb-3 flex items-center justify-between border-b-2 border-outline-variant">
      <span className="text-sm text-on-surface font-medium">{name}</span>
      <p className="text-xs text-secondary font-semibold px-2 py-1 bg-surface-container rounded-md">
        {NoComments} Comments
      </p>
    </div>
  );
}

export default MostDiscussedItems;
