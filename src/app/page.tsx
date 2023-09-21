import { Location, PRICE, PrismaClient, Region } from "@prisma/client";
import Card from "./components/Card";
import Header from "./components/Header";

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  location: Location
  region: Region
  price: PRICE
  slug: string
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  let restaurant = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      location: true,
      region: true,
      price: true,
      slug: true,
    }
  });
  return restaurant;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  console.log(restaurants);

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => {
          return <Card restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}
