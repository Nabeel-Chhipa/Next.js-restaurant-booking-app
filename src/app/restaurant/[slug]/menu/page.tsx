import React from "react";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantNavBar from "../components/RestaurantNavBar";

const page = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <RestaurantMenu />
      </div>
    </>
  );
};

export default page;
