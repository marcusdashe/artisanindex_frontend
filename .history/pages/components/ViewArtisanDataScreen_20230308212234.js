// import React, { useState } from "react";
// import axios from "axios";
// import ArtisanTable from "./ArtisanTable";

// function ViewArtisanDataScreen() {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [artisans, setArtisans] = useState([]);

//   const options = [
//     { value: "trade", label: "Trade" },
//     { value: "phone", label: "Phone No." },
//     { value: "state", label: "State" },
//     { value: "gender", label: "Gender" },
//     { value: "fullname", label: "Full Name" },
//     { value: "city", label: "City" },
//   ];

//   const fetchAllArtisanEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/all`;
//   function handleSelectChange(event) {
//     setSelectedValue(event.target.value);
//   }

//   function handleSearchInputChange(event) {
//     setSearchInput(event.target.value);
//     switch (selectedValue) {
//       case "trade":
//         setArtisans(
//           artisans.filter((artisan) => artisan.trade === searchInput.trim())
//         );
//         break;
//       case "phone":
//         setArtisans(
//           artisans.filter((artisan) => artisan.phone === searchInput.trim())
//         );
//         break;
//       case "state":
//         setArtisans(
//           artisans.filter((artisan) => artisan.state === searchInput.trim())
//         );
//         break;
//       case "gender":
//         setArtisans(
//           artisans.filter((artisan) => artisan.gender === searchInput.trim())
//         );
//         break;
//       case "fullname":
//         setArtisans(
//           artisans.filter((artisan) => artisan.fullname === searchInput.trim())
//         );
//         break;
//       case "city":
//         setArtisans(
//           artisans.filter((artisan) => artisan.city === searchInput.trim())
//         );
//         break;
//       default:
//         console.log("Wrong Search keyword");
//     }
//   }

//   React.useMemo(() => {
//     axios
//       .get(fetchAllArtisanEndpoint)
//       .then((res) => {
//         console.log(res.data);
//         setArtisans(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   function fetchData() {
//     axios
//       .get(
//         `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/search?search=${searchInput}&filter=${selectedValue}`
//       )
//       .then((response) => {
//         // Handle the response data
//         setArtisans(response.data);
//         console.log(artisans);
//       })
//       .catch((error) => {
//         // Handle the error
//         console.error(error);
//       });
//   }

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-start p-4">
//         <h1 className="text-white">View Artisan Data</h1>
//       </div>
//       <div className="w-full h-[90vh] p-4 overflow-y-scroll overflow-x-hidden">
//         <input
//           type="text"
//           placeholder="Search.."
//           className="bg-slate-200 rounded-md p-3 w-full outline-none active:outline-none"
//           value={searchInput}
//           onChange={handleSearchInputChange}
//         />
//         <select
//           value={selectedValue}
//           onChange={handleSelectChange}
//           className="block w-full py-2 px-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#8D161A] focus:border-[#8D161A] sm:text-sm"
//         >
//           <option value="">--Search by--</option>
//           {options.map((option, idx) => (
//             <option key={idx} value={option.value} className="text-gray-900">
//               {option.label}
//             </option>
//           ))}
//         </select>
//         <button
//           className="bg-[#8D161A] text-white rounded-md py-2 px-4 mt-4 hover:hover:bg-[#4a3e3e] duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onClick={fetchData}
//         >
//           Fetch Data
//         </button>
//         {artisans.length > 0 && <ArtisanTable data={artisans} />}
//       </div>
//     </div>
//   );
// }

// export default ViewArtisanDataScreen;

import React, { useState, useEffect } from "react";
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
    { value: "fullname", label: "Name" },
    { value: "city", label: "City" },
  ];

  const fetchAllArtisanEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/all`;

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
        : fetchAllArtisanEndpoint;

    axios
      .get(url)
      .then((response) => {
        setArtisans(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="w-full h-[100vh]">
      <div
        className="w-full h-[10vh] bg-slate-900 flex items-center content-center
justify-center text-white text-4xl font-bold"
      >
        View Artisan Data
      </div>
      <div className="w-full h-[10vh] bg-white flex items-center justify-center">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] flex items-center justify-between">
          <select
            className="w-full p-2 border rounded-md border-gray-300"
            onChange={handleSelectChange}
            value={selectedValue}
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
          <div>
            <button
              className="p-2 bg-[#8D161A] text-white rounded-md ml-2"
              onClick={printPage}
            >
              Print
            </button>
            <button className="p-2 bg-[#8D161A] text-white rounded-md ml-2 w-[100px]">
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
