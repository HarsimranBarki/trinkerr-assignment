import React, { useState } from "react";

const VerifyPhone = () => {
  const [phone, setPhone] = useState("");
  // Regex For Formatting Input Should Be Number
  const onlyNumbers = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/[^\d]/g, "");
    setPhone(value);
  };

  const validateInput = (e, size, message) => {
    e.preventDefault();
    if (phone.length !== size) return;
  };

  return (
    <div>
      <form className="mt-10 " onSubmit={(e) => validateInput(e)}>
        <input
          type="text"
          className="form-input px-4 py-2 border-gray-300 rounded mt-2 shadow-inner"
          placeholder="Enter Your Number"
          value={phone}
          onChange={(e) => onlyNumbers(e, "phone")}
          autoFocus
        />
        <br />
        <button
          type="submit"
          className="bg-indigo-600 text-indigo-50 px-5 py-2  font-medium rounded mt-5 hover:bg-indigo-700 transition"
        >
          Get OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyPhone;
