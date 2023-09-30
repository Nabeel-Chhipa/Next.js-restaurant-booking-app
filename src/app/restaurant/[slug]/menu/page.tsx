import React from "react";
import RestaurantMenu from "../components/RestaurantMenu";
import RestaurantNavBar from "../components/RestaurantNavBar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

const getRestaurantMenu = async (slug: string) => {
  const menu = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true
    }
  })

  if(!menu) {
    throw new Error
  }

  return menu.items
}

const page = async ({params}: {params: {slug: string}}) => {

  const items = await getRestaurantMenu(params.slug)


  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <RestaurantMenu items={items}/>
      </div>
    </>
  );
};

export default page;
