import React from "react";

const actions = [
  {
    action_type: "Upload",
    action_name: "Upload Artisan Data",
  },
];

function dashboard() {
  return (
    <div className="w-full h-[100vh] bg-slate-100 flex">
      <div className="w-1/6 h-[100vh] bg-slate-900 text-white flex flex-col">
        <div className="w-full bg-white flex text-black p-5">
          Artisan Info Dash
        </div>
        {actions.map((action) => {
          return (
            <button className="bg-slate-300 w-full p-3 pl-5 pr-5 rounded-md">
              {action.action_name}
            </button>
          );
        })}
      </div>
      <div className="w-5/6 h-[100vh">view</div>
    </div>
  );
}

export default dashboard;
