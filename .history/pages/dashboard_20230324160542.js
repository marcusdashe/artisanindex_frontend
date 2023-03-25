import React from "react";
import UploadFileScreen from "./components/UploadFileScreen";
import DownloadDataScreen from "./components/DownloadDataScreen";
import ViewArtisanDataScreen from "./components/ViewArtisanDataScreen";
import CreateArtisan from "./components/CreateArtisan";

const actions = [
  {
    action_type: "Upload",
    action_name: "Upload Artisan Data",
  },
  {
    action_type: "View",
    action_name: "View Artisan Data",
  },
  {
    action_type: "Download",
    action_name: "Download Artisan Data",
  },
  {
    action_type: "Create",
    action_name: "Create Artisan Data",
  },
];

function dashboard() {
  const [action, setAction] = React.useState("Upload");

  return (
    <div className="w-full outline bg-slate-100 flex">
      <div className="w-1/6 text-white flex flex-col">
        <div className="w-full flex p-6 bg-white items-center content-center justify-start">
          <img
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="C-STEMP Logo"
          />
        </div>
        <div className="p-3 w-full">
          {actions.map((action, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  setAction(action.action_type);
                }}
                className="bg-white text-black flex items-center content-center justify-start text-sm mt-3 w-full p-2 pl-5 pr-5 rounded-md"
              >
                {action.action_name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-5/6 min-h-[100vh]">
        {action === undefined ? (
          <>
            <h1>Please Select an Action</h1>
          </>
        ) : (
          <>
            {action === "Upload" ? (
              <>
                <UploadFileScreen />
              </>
            ) : action === "Download" ? (
              <>
                <DownloadDataScreen />
              </>
            ) : action === "View" ? (
              <>
                <ViewArtisanDataScreen />
              </>
            ) : (
              <>
                <CreateArtisan />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default dashboard;
