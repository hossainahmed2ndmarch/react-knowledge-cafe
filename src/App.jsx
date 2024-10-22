import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
