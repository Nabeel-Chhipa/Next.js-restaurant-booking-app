import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";

const page = () => {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default page;
