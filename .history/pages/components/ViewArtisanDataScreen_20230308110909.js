import React, { useState } from "react";

function ViewArtisanDataScreen() {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "trade", label: "Trade" },
    { value: "phone", label: "Phone No." },
    { value: "state", label: "State" },
    { value: "gender", label: "Gender" },
    { value: "fullname", label: "Full Name" },
    { value: "city", label: "City" },
  ];
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-start p-4">
        <h1 className="text-white">View Artisan Data</h1>
      </div>
      <div className="w-full h-[90vh] p-4 overflow-y-scroll overflow-x-hidden">
        <input
          type="text"
          placeholder="Search.."
          className="bg-slate-200 rounded-md p-3 w-full outline-none active:outline-none"
        />
      </div>
    </div>
  );
}

export default ViewArtisanDataScreen;
