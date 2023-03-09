import React from "react";

function ViewArtisanDataScreen() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-start p-4">
        <h1 className="text-white">View Artisan Data</h1>
      </div>
      <div className="w-full h-[90vh] p-4 overflow-y-scroll overflow-x-hidden">
        <div className="bg-slate-300 rounded-md p-4">
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
}

export default ViewArtisanDataScreen;
