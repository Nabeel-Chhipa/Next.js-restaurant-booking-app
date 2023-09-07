'use client'

import React, { useState } from "react";
import { useRouter } from "../../../node_modules/next/navigation";

function SearchBox() {
  const [data, setData] = useState("");
  const router = useRouter();

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={() =>
          data == "kfc"
            ? router.push(`/restaurant/${data}`)
            : alert(`${data} not found`)
        }
      >
        Let's go
      </button>
    </div>
  );
}

export default SearchBox;
