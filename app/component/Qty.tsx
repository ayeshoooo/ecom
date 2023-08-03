"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Qty = () => {
  const [num, setNum] = useState(1);
  return (
    <>
    <div className="flex items-center gap-x-2">
      {/* Minus */}
      <button
        className="w-6 h-6 items-center gap-x-3 rounded-full border"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </button>
      {/* num */}
      <div className="text-sm">{num}</div>
      {/* Plus */}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
        className="w-6 h-6 center rounded-full border"
      >
        +
      </button>
    </div>
    <div className="flex"> <Button  className='bg-black text-white mt-5'>Add to cart</Button></div>
    </>
  );
};

export default Qty;