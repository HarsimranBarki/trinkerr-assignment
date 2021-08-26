import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const VerifyName = () => {
  const [name, setName] = useState("");
  const toastGenerate = (message) => toast.error(message);

  // Regex For Formatting Input Should Be Number
  const onlyAplhabets = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/[^a-zA-Z, ]/, "");
    setName(value);
  };

  const validateInput = (e) => {
    e.preventDefault();
    if (name.length === "") return toastGenerate("Name can't be empty");
  };

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <form className="mt-10 " onSubmit={(e) => validateInput(e)}>
        <input
          type="text"
          className="form-input px-4 py-2 border-gray-300 rounded mt-2 shadow-inner"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => onlyAplhabets(e)}
          autoFocus
        />
        <br />
        <button
          type="submit"
          className="bg-indigo-600 text-indigo-50 px-5 py-2  font-medium rounded mt-5 hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VerifyName;
