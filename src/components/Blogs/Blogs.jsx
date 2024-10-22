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
    <div>
      <h2>Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
