import React from "react";

function UploadFileScreen() {
  const [files, setFiles] = React.useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e);
    setFiles(newFiles);
  };

  return (
    <>
      <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-between p-3">
        <h1 className="text-white">Upload Artisan Data</h1>
      </div>
      <div className="h-[90vh] w-full p-3 flex flex-col">
        <form className="w-full h-[7vh] bg-slate-200 rounded-md p-4 flex items-center content-center justify-between">
          <input
            type="file"
            placeholder=""
            multiple
            className="text-sm"
            onChange={(e) => {
              handleFileChange(e.target.files);
            }}
          />
          <button
            className="cursor-pointer bg-slate-900 text-white p-2 pl-3 pr-3 rounded-md font-medium text-sm"
            type="submit"
          >
            Upload File(s)
          </button>
        </form>
        {files.length > 0 ? (
          <div className="w-full h-[30vh]">
            {files.map((file, idx) => {
              return (
                <li
                  key={idx}
                  className="w-full h-[4vh] mt-3 p-5 flex items-center content-center justify-between rounded-md bg-slate-300"
                >
                  <p className="text-sm"> {file.name}</p>
                  <span className="bg-slate-900 text-white text-xs p-1 pl-3 pr-3 rounded-full flex items-center content center justify-center">
                    File Size :{" "}
                    {file.size < 1000
                      ? file.size + "Bytes"
                      : file.size < 1000_000
                      ? (file.size / 1024).toFixed(2) + "KiB"
                      : file.size < 1000_000_000
                      ? (file.size / 1024).toFixed(2) + "MiB"
                      : (file.size / 1024).toFixed(2) + "GiB"}
                  </span>
                </li>
              );
            })}
          </div>
        ) : (
          <>
            <h1 className="mt-4">Select A File</h1>
          </>
        )}
      </div>
    </>
  );
}

export default UploadFileScreen;
