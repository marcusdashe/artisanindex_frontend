import React from "react";

function DownloadDataScreen() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-start text-white p-5">
        <h1>Download Artisan Data</h1>
      </div>
      <div className="w-full h-[90vh] p-4">
        <div className="w-full rounded-md p-3 bg-slate-200 flex flex-col">
          <h4>Filters</h4>
          <button>Download</button>
          <div className="w-full p-3"></div>
        </div>
      </div>
    </div>
  );
}

export default DownloadDataScreen;