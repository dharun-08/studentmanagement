import React from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {" "}
      {/* Changed to items-center and added bg-gray-100 */}
      <div className="w-80 bg-slate-400 flex flex-col items-center gap-y-5 p-5 rounded-lg shadow-md">
        {" "}
        {/* Removed fixed height, added rounded corners and shadow */}
        <p className="font-bold text-[25px] text-white">Add A Student</p>
        <form action="" method="post" className="flex flex-col gap-y-3 w-full">
          <input
            className="w-full text-center p-1 rounded"
            type="text"
            placeholder="Enter Student First Name"
          />
          <input
            className="w-full text-center p-1 rounded"
            type="text"
            placeholder="Enter Student Last Name"
          />
          <input
            className="w-full text-center p-1 rounded"
            type="number"
            placeholder="Enter Student Phone Number"
          />
          <input
            className="w-full text-center p-1 rounded"
            type="text"
            placeholder="Enter Student Grade"
          />
          <input type="button" value="Submit" className="p-3 bg-green-400 text-white font-bold" />
        </form>
        <button
          className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
