import React from "react";

const ArtisanTable = ({ artisans }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 mt-3">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Full Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Gender
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Trade
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Phone Number
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            City
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            State
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Programme
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {artisans.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.fullName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.trade}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.phoneNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.state}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.programme}</td>
            {/* <td className="px-6 py-4 whitespace-nowrap">
              {new Date(item.created).toUTCString().substring(0, 16)}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArtisanTable;
