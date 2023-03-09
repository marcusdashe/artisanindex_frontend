// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ViewArtisanDataScreen() {
//   const [formData, setFormData] = useState({
//     city: "",
//     created: "",
//     fullName: "",
//     gender: "",
//     phoneNumber: "",
//     state: "",
//     trade: "",
//     programme: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   const fetchAllArtisanEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/all`;

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[10vh] bg-slate-900 flex items-center content-center justify-start text-white p-5">
//         View Artisan Data
//       </div>
//       <div className="w-full h-[100vh] bg-white flex flex-row flex-wrap items-center justify-center">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="fullName" className="block text-gray-700 font-bold">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             placeholder="Enter your full name"
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           />
//           <label htmlFor="gender" className="block text-gray-700 font-bold">
//             Gender
//           </label>
//           <select
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           >
//             <option value="">-- Select your gender --</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <label
//             htmlFor="phoneNumber"
//             className="block text-gray-700 font-bold"
//           >
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             placeholder="Enter your phone number"
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           />
//           <label htmlFor="state" className="block text-gray-700 font-bold">
//             State
//           </label>
//           <input
//             type="text"
//             id="state"
//             name="state"
//             value={formData.state}
//             onChange={handleInputChange}
//             placeholder="Enter your state"
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           />
//           <label htmlFor="city" className="block text-gray-700 font-bold">
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//             placeholder="Enter your city"
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           />
//           <label htmlFor="trade" className="block text-gray-700 font-bold">
//             Trade
//           </label>
//           <input
//             type="text"
//             id="trade"
//             name="trade"
//             value={formData.trade}
//             onChange={handleInputChange}
//             placeholder="Enter your trade"
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           />

//           <label htmlFor="programme" className="block text-gray-700 font-bold">
//             Programme
//           </label>
//           <input
//             type="text"
//             id="programme"
//             name="programme"
//             value={formData.programme}
//             onChange={handleInputChange}
//             placeholder="Enter your programme"
//             className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full px-4 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform
//             bg-[#8D161A] text-white rounded-md ml-2"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ViewArtisanDataScreen;


import React, { useState } from "react";
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

  return (
    < className="grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
      <div className="bg-slate-900 text-white p-5 flex items-center">
        <h1 className="text-2xl font-bold">View Artisan Data</h1>
      </div>
      <div className="bg-white p-5">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <label htmlFor="fullName" className="text-gray-700 font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />

          <label htmlFor="gender" className="text-gray-700 font-bold">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          >
            <option value="">-- Select your gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="phoneNumber" className="text-gray-700 font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />

          <label htmlFor="state" className="text-gray-700 font-bold">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Enter your state"
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
            required
          />

          <label htmlFor="city" className="text-gray-700 font-bold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow
      <label htmlFor="created" className="text-gray-700 font-bold">
        Date Created
      </label>
      <input
        type="date"
        id="created"
        name="created"
        value={formData.created}
        onChange={handleInputChange}
        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        required
      />

      <label htmlFor="trade" className="text-gray-700 font-bold">
        Trade
      </label>
      <input
        type="text"
        id="trade"
        name="trade"
        value={formData.trade}
        onChange={handleInputChange}
        placeholder="Enter your trade"
        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        required
      />

      <label htmlFor="programme" className="text-gray-700 font-bold">
        Programme
      </label>
      <input
        type="text"
        id="programme"
        name="programme"
        value={formData.programme}
        onChange={handleInputChange}
        placeholder="Enter your programme"
        className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Data
      </button>
    </form>
  </div>

