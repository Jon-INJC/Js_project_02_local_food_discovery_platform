function Comments() {
  return (
    <div className="col-span-12 min-w-0 flex flex-col gap-4 md:col-span-7">
        <Comment
            image="https://placehold.co/200x100/orange/white"
            user="Sarah M."
            time="2 days ago"
            comment="The truffle risotto was incredible. The flavor was excellent, rich but
          not overpowering. Perfectly cooked."
            item="Truffle Risotto"
        />
      <button
        type="button"
        className="pb-1 text-xs text-on-surface font-semibold border-b-2 border-on-surface self-center"
      >
        Load More Reviews
      </button>
    </div>
  );
}

function Comment(props) {

    const { image, user, time, comment, item } = props

  return (
    <div className="min-w-0 p-6 relative flex flex-col gap-4 border-2 border-outline-variant">
      <div className="absolute top-0 right-0 -z-1 w-24 h-24 bg-linear-45 from-surface-variant-trans to-surface-variant"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt=""
            className="w-10 h-10 object-cover rounded-md"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs text-on-surface font-bold">{user}</span>
            <p className="text-xs text-secondary">{time}</p>
          </div>
        </div>
      </div>
      <q className="pb-3 text-sm text-secondary border-b-2 border-outline-variant">
        {comment}
      </q>
      <div className="min-w-0 flex items-center justify-between">
        <p className="text-sm text-secondary">
          Related Item:{" "}
          <a href="#" className="text-primary underline decoration-primary">
            {item}
          </a>
        </p>
        <button
          type="button"
          className="shrink-0 text-xs text-secondary font-semibold px-4 py-1 border border-secondary hover:cursor-pointer"
        >
          Reply
        </button>
      </div>
    </div>
  );
}

export default Comments;
