import React, { useState, useEffect } from "react";
import axios from "axios";
import FileSaver from "file-saver";
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
    { value: "fullname", label: "Name" },
    { value: "city", label: "City" },
    { value: "programme", label: "Programme" },
    { value: "batch", label: "Batch" },
    { value: "year", label: "Year" },
  ];

  const fetchAllArtisansEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/all`;

  useEffect(() => {
    fetchData();
  }, [selectedValue, searchInput]);

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
  }

  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }

  const printPage = () => {
    window.print();
  };

  function fetchData() {
    const url =
      selectedValue && searchInput
        ? `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/search?search=${searchInput}&filter=${selectedValue}`
        : fetchAllArtisansEndpoint;

    axios
      .get(url)
      .then((response) => {
        setArtisans(response.data.reverse());
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function downloadArtisan() {
    const url =
      selectedValue &&
      searchInput &&
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/spreadsheet/search?search=${searchInput}&filter=${selectedValue}`;

    axios
      .get(url, { responseType: "blob" })
      .then((response) => {
        let file = new Blob([response.data], {
          type: "application/vnd.ms-excel",
        });
        FileSaver.saveAs(file, "filteredartisans.xlsx");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleClick = () => {
    downloadArtisan();
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-[#e4decd] font-bold flex items-center content-center justify-start text-[#8D161A] p-5">
        View Artisan Data
      </div>
      <div className="w-full h-[10vh] bg-white flex items-center justify-center">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] flex items-center justify-between">
          <select
            className="w-full p-2 border rounded-md border-gray-300"
            onChange={handleSelectChange}
            value={selectedValue}
            defaultValue=""
          >
            <option value="" disabled selected>
              Filter By
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <input
            className="w-full p-2 border rounded-md border-gray-300 ml-2"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button
            className="p-2 bg-[#8D161A] text-white rounded-md ml-2"
            onClick={fetchData}
          >
            Search
          </button>
          <div className="flex flex-row fixed right-8">
            <button
              className="p-2 bg-[#8D161A] text-white rounded-md ml-2"
              onClick={printPage}
            >
              Print
            </button>
            <button
              onClick={handleClick}
              className="p-2 bg-[#8D161A] text-white rounded-md ml-2 w-[100px]"
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] overflow-scroll">
        <ArtisanTable artisans={artisans} />
      </div>
    </div>
  );
}

export default ViewArtisanDataScreen;
