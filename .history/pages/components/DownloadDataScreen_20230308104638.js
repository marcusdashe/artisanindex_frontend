import React from "react";
import axios from "axios";

function DownloadDataScreen() {
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/table/export`
    );
    console.log(response.data);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-start text-white p-5">
        <h1>Download Artisan Data</h1>
      </div>
      <div className="w-full h-[90vh] p-4">
        <div className="w-full rounded-md p-3 bg-slate-200 flex flex-col">
          <button
            onClick={handleClick}
            type="submit"
            className="bg-[#8D161A] text-white rounded-md py-2 px-4 font-medium hover:hover:bg-[#4a3e3e] duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Download All Artisans Records as Excel Spreadsheet
          </button>
          <div className="w-full p-3"></div>
        </div>
      </div>
    </div>
  );
}

export default DownloadDataScreen;
