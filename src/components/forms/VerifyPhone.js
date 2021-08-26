import React from "react";

const VerifyPhone = () => {
  return (
    <div>
      <form className="mt-10 ">
        <input
          type="text"
          className="form-input px-4 py-2 border-gray-300 rounded mt-2"
          placeholder="Enter Your Number"
        />
        <br />
        <button className="bg-indigo-600 text-indigo-50 px-5 py-2 font-medium rounded mt-5 hover:bg-indigo-700 transition">
          Get OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyPhone;
