import React from "react";

const actions = [
  {
    action_type: "Upload",
    action_name: "Upload Artisan Data",
  },
];

function dashboard() {
  const [action, setAction] = React.useState();
  return (
    <div className="w-full h-[100vh] bg-slate-100 flex">
      <div className="w-1/6 h-[100vh] bg-slate-900 text-white flex flex-col">
        <div className="w-full flex p-3 items-center content-center justify-start">
          Artisan Info Dash
        </div>
        <div className="p-3 w-full">
          {actions.map((action) => {
            return (
              <button
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
      <div className="w-5/6 h-[100vh">
        {action === "Upload" ? <></> : <></>}
      </div>
    </div>
  );
}

export default dashboard;
