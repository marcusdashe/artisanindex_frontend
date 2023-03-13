import React from "react";
import axios from "axios";
import FileSaver from "file-saver";

function DownloadDataScreen() {
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/table/export`,
      { responseType: "blob" }
    );
    const file = new Blob([response.data], {
      type: "application/vnd.ms-excel",
    });
    FileSaver.saveAs(file, "artisans.xlsx"); // save file using FileSaver
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-[#e4decd] font-bold flex items-center content-center justify-start text-[#8D161A] p-5">
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
