import React from "react";

const actions = [
  {
    action_type: "Upload",
    action_name: "Upload Artisan Data",
  },
];

function dashboard() {
  const [action, setAction] = React.useState("Upload");
  const [files, setFiles] = React.useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e);
    setFiles(newFiles);
  };

  return (
    <div className="w-full h-[100vh] bg-slate-100 flex">
      <div className="w-1/6 h-[100vh] bg-slate-900 text-white flex flex-col">
        <div className="w-full flex p-3 items-center content-center justify-start">
          Artisan Info Dash
        </div>
        <div className="p-3 w-full">
          {actions.map((action, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  setAction(action.action_type);
                }}
                className="bg-slate-300 w-full p-3 pl-5 pr-5 rounded-md"
              >
                {action.action_name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-5/6 h-[100vh]">
        {action === undefined ? (
          <>
            <h1>Please Select an Action</h1>
          </>
        ) : (
          <>
            {action === "Upload" ? (
              <>
                <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-between p-3">
                  <h1 className="text-white">Upload Artisan Data</h1>
                </div>
                <div className="h-[90vh] w-full p-3 flex flex-col">
                  <form className="w-full h-[7vh] bg-slate-400 rounded-md p-4 flex items-center content-center justify-between">
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
                      className="cursor-pointer bg-slate-900 text-white p-2 pl-4 pr-4 font-medium text-sm"
                      type="submit"
                    >
                      Upload File(s)
                    </button>
                  </form>
                  {files.length > 0 ? (
                    <div className="w-full h-[30vh] p-1">
                      {files.map((file, idx) => {
                        return (
                          <li
                            key={idx}
                            className="w-full h-[4vh] mt-3 p-5 flex items-center content-center justify-between rounded-md bg-slate-300"
                          >
                            {file.name}
                            <span className="bg-slate-900 text-white text-sm p-1 pl-3 pr-3 rounded-full flex items-center content center justify-center">
                              File Size : {file.size}
                            </span>
                          </li>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <h1 className="mt-4">Select A File 👌</h1>
                    </>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default dashboard;
