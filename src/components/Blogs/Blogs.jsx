import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const loadBlogs = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    loadBlogs();
  }, []);
  return (
    <div className="col-span-2 grid grid-cols-1 gap-16">
      <h2>Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
