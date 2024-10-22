const Bookmarks = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-[#6047EC1A] border border-[#6047EC] rounded-lg px-12 py-6">
        <h2 className="text-2xl font-bold text-center text-[#6047EC]">Spent time on read : 177 min</h2>
      </div>
      <div className="bg-[#1111110D] rounded-lg grid grid-cols-1 gap-4 p-7">
       <h2 className="text-2xl font-bold">Bookmarked Blogs : 8</h2>
      </div>
    </div>
  );
};

export default Bookmarks;
