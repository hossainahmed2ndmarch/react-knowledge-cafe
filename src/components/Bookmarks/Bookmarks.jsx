import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#6047EC1A] border border-[#6047EC] rounded-lg px-12 py-6">
        <h2 className="text-2xl font-bold text-center text-[#6047EC]">
          Spent time on read :{" "}
        </h2>
      </div>
      <div className="bg-[#1111110D] rounded-lg grid grid-cols-1 gap-4 p-7">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs: {bookMarks.length}
        </h2>
        {bookMarks.map((bookMark) => (
          <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
};

export default Bookmarks;
