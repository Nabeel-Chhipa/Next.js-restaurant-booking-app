import React from "react";
import Link from "../../../../../node_modules/next/link";

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/kfc" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/kfc/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
