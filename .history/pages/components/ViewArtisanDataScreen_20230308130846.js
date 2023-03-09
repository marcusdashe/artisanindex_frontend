import React, { useState } from "react";
import axios from "axios";
import ArtisanTable from "./ArtisanTable";

function ViewArtisanDataScreen() {
  const [selectedValue, setSelectedValue] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [artisans, setArtisans] = useState([]);

  const options = [
    { value: "trade", label: "Trade" },
    { value: "phone", label: "Phone No." },
    { value: "state", label: "State" },
    { value: "gender", label: "Gender" },
    { value: "fullname", label: "Full Name" },
    { value: "city", label: "City" },
  ];

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }

  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }

  function fetchData() {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/search?search=${searchInput}&filter=${selectedValue}`
      )
      .then((response) => {
        // Handle the response data
        setArtisans(response.data);
        console.log(artisans);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }

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
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="block w-full py-2 px-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8D161A] focus:border-[#8D161A] sm:text-sm"
        >
          <option value="">--Search by--</option>
          {options.map((option, idx) => (
            <option key={idx} value={option.value} className="text-gray-900">
              {option.label}
            </option>
          ))}
        </select>
        <button
          className="bg-[#8D161A] text-white rounded-md py-2 px-4 mt-4 hover:hover:bg-[#4a3e3e] duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={fetchData}
        >
          Fetch Data
        </button>
      </div>
      <ArtisanTable data={artisans} />
    </div>
  );
}

export default ViewArtisanDataScreen;
