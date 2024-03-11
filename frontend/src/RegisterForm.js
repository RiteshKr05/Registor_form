import React, { useState } from "react";
import axios from "axios";


const RegisterForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [blockVillage, setBlockVillage] = useState("");
  const [retailerName, setRetailerName] = useState("");
  const [retailerNumber, setRetailerNumber] = useState("");
  const [paid2023, setPaid2023] = useState({ sawa7301: "", sawa7501: "" });
  const [paid2024, setPaid2024] = useState({ sawa7301: "", sawa7501: "" });

  const handlePaid2023Change = (e) => {
    const { name, value } = e.target;
    setPaid2023({ ...paid2023, [name]: value });
  };

  const handlePaid2024Change = (e) => {
    const { name, value } = e.target;
    setPaid2024({ ...paid2024, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        mobileNumber,
        state,
        district,
        blockVillage,
        retailerName,
        retailerNumber,
        sawa7301_2023: paid2023.sawa7301,
        sawa7501_2023: paid2023.sawa7501,
        sawa7301_2024: paid2024.sawa7301,
        sawa7501_2024: paid2024.sawa7501,
      })
      alert(response.data.message)
      window.location.reload()
      // You can redirect the user or perform any other action after successful registration
    } catch (error) {
      alert("Failed to Submit user");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Register an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                autoComplete="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                autoComplete="state"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="district"
                className="block text-sm font-medium text-gray-700"
              >
                District
              </label>
              <input
                id="district"
                name="district"
                type="text"
                autoComplete="district"
                required
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="blockVillage"
                className="block text-sm font-medium text-gray-700"
              >
                Block/Village
              </label>
              <input
                id="blockVillage"
                name="blockVillage"
                type="text"
                autoComplete="blockVillage"
                required
                value={blockVillage}
                onChange={(e) => setBlockVillage(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
   
            <div className="p-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How much you paid in 2023?
              </label>
              <div className="flex items-center h-14 shadow rounded-lg gap-3 px-4 bg-gray-100">
                <p className="font-bold text-gray-700 whitespace-nowrap">
                  Sava 7301
                </p>
                <input
                  type="text"
                  name="sawa7301"
                  value={paid2023.sawa7301}
                  onChange={handlePaid2023Change}
                  className="h-14 text-xl font-bold text-gray-700 border-0 grow w-1/2 bg-transparent"
                  placeholder="0.00"
                />
                <div className="h-5 border-s"></div>
                <p className="font-bold text-gray-700 whitespace-nowrap">
                  Sava 7501
                </p>
                <input
                  type="text"
                  name="sawa7501"
                  value={paid2023.sawa7501}
                  onChange={handlePaid2023Change}
                  className="h-14 text-xl font-bold text-gray-700 border-0 w-1/2 bg-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="p-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How much you want to pay in 2024?
              </label>
              <div className="flex items-center h-14 shadow rounded-lg gap-3 px-4 bg-gray-100">
                <p className="font-bold text-gray-700 whitespace-nowrap">
                  Sava 7301
                </p>
                <input
                  type="text"
                  name="sawa7301"
                  value={paid2024.sawa7301}
                  onChange={handlePaid2024Change}
                  className="h-14 text-xl font-bold text-gray-700 border-0 grow w-1/2 bg-transparent"
                  placeholder="0.00"
                />
                <div className="h-5 border-s"></div>
                <p className="font-bold text-gray-700 whitespace-nowrap">
                  Sava 7501
                </p>
                <input
                  type="text"
                  name="sawa7501"
                  value={paid2024.sawa7501}
                  onChange={handlePaid2024Change}
                  className="h-14 text-xl font-bold text-gray-700 border-0 w-1/2 bg-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="retailerName"
                className="block text-sm font-medium text-gray-700"
              >
                Retailer Name
              </label>
              <input
                id="retailerName"
                name="retailerName"
                type="text"
                autoComplete="retailerName"
                required
                value={retailerName}
                onChange={(e) => setRetailerName(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="retailerNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Retailer Number
              </label>
              <input
                id="retailerNumber"
                name="retailerNumber"
                type="text"
                autoComplete="retailerNumber"
                required
                value={retailerNumber}
                onChange={(e) => setRetailerNumber(e.target.value)}
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
