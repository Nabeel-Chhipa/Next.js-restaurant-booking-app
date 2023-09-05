import NavBar from "@/app/components/NavBar";
import React from "react";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantNavBar from "../components/RestaurantNavBar";

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            <RestaurantMenu />
          </div>
        </div>
      </main>
    </main>
  );
};

export default page;
