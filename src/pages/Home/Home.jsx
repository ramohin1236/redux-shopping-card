import React from "react";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2 border border-amber-200 ">display product</div>

        <div className="border border-red-200">Add new products</div>
      </div>
    </div>
  );
};

export default Home;
