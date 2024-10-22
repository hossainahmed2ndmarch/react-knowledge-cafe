import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // Bookmarks
  const [bookMarks, setBookmarks] = useState([]);
  // Reading time
  const [readingTime, setReadingTime] = useState(0);

  // Book marks functionality
  const handleAddToBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookmarks(newBookMarks);
  };

  // Mark as read button functionality
  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + parseInt(time);
    setReadingTime(newReadingTime);
    // Remove bookmark
    const remainingBookMarks = bookMarks.filter(
      (bookMark) => bookMark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="p-4 mb-8 mx-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Blogs
          handleAddToBookMarks={handleAddToBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
