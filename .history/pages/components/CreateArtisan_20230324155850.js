import React, { useState } from "react";
import axios from "axios";

function ViewArtisanDataScreen() {
  const [feedback, setFeedack] = useState("");
  const [formData, setFormData] = useState({
    city: "",
    fullName: "",
    gender: "",
    phoneNumber: "",
    state: "",
    trade: "",
    programme: "",
    batch: "",
    year: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}api/artisan/create`,
        formData
      )
      .then((response) => {
        console.log(response.data);
        setFeedack(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[10vh] bg-[#3b302f]  font-bold flex items-center content-center justify-start text-white p-5">
        Create Artisan Record
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-lg w-full px-5 py-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2">
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
              className="px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
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
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
              required
            >
              <option value="">Select your gender</option>
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
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
              required
            />

            <label htmlFor="gender" className="text-gray-700 font-bold">
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
              required
            >
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
            </select>

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
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
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
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
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
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
              required
            />

            <label htmlFor="programme" className="text-gray-700 font-bold">
              Batch/Year
            </label>
            <input
              type="text"
              id="batchYear"
              name="batchYear"
              value={formData.batchYear}
              onChange={handleInputChange}
              placeholder="Enter Batch or Year as appropriately applicable"
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-[#4a3e3e] focus:shadow-outline-blue"
              required
            />

            <button
              type="submit"
              className="h-[40px] mt-4 bg-[#8D161A] text-white font-semibold rounded-lg hover:bg-[#4a3e3e] duration-500"
            >
              Create
            </button>
          </form>
        </div>
      </div>
      <p>{feedback}</p>
    </div>
  );
}

export default ViewArtisanDataScreen;
