import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookMarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-8">
      <img
        className="rounded-lg w-full object-cover"
        src={cover}
        alt={`Cover picture of the title: ${title}`}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-6">
          <img
            className="rounded-full w-16 h-16 object-cover"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="font-medium text-[#11111199]">{posted_date}</p>
          </div>
        </div>
        <div className="space-x-4">
          <span className="text-[#11111199]">{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMarks(blog)}
            className="text-xl text-[#11111199]"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-[40px] font-bold">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="text-[#11111199]" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time, id)} className="text-xl font-semibold text-[#6047EC] underline">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
