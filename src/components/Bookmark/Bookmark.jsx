import { PropTypes } from "prop-types";

const Bookmark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div className="p-5 rounded-lg bg-white">
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
  );
};

Bookmark.propTypes = {
  bookMark: PropTypes.object.isRequired,
};

export default Bookmark;
