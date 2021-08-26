import React, { useContext } from "react";
import { UserContext } from "../../libs/userContext";
import Header from "../common/Header";

function Survey() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <div className="container max-w-screen-2xl m-auto">
        <div className="py-10">
          <h2 className="text-4xl font-medium">Hi {user?.name}</h2>
        </div>
      </div>
    </>
  );
}

export default Survey;
