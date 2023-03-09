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

function ViewArtisanDataScreen() {
  const [formData, setFormData] = useState({
    city: "",
    created: "",
    fullName: "",
    gender: "",
    phoneNumber: "",
    state: "",
    trade: "",
    programme: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const fetchAllArtisanEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/all`;

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-slate-900 flex flex-row flex-wrap items-center content-center justify-start text-white p-5">
        View Artisan Data
      </div>
      <div className="w-full h-[100vh] bg-white flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="block text-gray-700 font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />
          <label htmlFor="gender" className="block text-gray-700 font-bold">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          >
            <option value="">-- Select your gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />
          <label htmlFor="state" className="block text-gray-700 font-bold">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Enter your state"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />
          <label htmlFor="city" className="block text-gray-700 font-bold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />
          <label htmlFor="trade" className="block text-gray-700 font-bold">
            Trade
          </label>
          <input
            type="text"
            id="trade"
            name="trade"
            value={formData.trade}
            onChange={handleInputChange}
            placeholder="Enter your trade"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />

          <label htmlFor="programme" className="block text-gray-700 font-bold">
            Programme
          </label>
          <input
            type="text"
            id="programme"
            name="programme"
            value={formData.programme}
            onChange={handleInputChange}
            placeholder="Enter your programme"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ViewArtisanDataScreen;
