import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookMarks, setBookmarks] = useState([]);

  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookmarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="p-4 mb-8 mx-4 grid grid-cols-2 md:grid-cols-3 gap-6">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
