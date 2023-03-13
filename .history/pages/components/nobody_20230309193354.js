import { useState } from "react";

const MyForm = () => {
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
        <option value="Other">Other</option>
      </select>
      <label htmlFor="phoneNumber" className="block text-gray-700 font-bold">
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
      2
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
      <label htmlFor="created" className="block text-gray-700 font-bold">
        Date Created
      </label>
      <input
        type="date"
        id="created"
        name="created"
        value={formData.created}
        onChange={handleInputChange}
        placeholder="Enter the date"
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
  );
};


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





<select name="states">
  <option value="">Select State</option>
  <option value="Abia">Abia</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="FCT">Federal Capital Territory</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Lagos">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau">Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara">Zamfara</option>
</select>;
