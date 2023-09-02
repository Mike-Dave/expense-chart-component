import { useState } from "react";

function BarChart({ items }) {
  const [showPrice, setShowPrice] = useState(false);
  function showPriceHandler() {
    setShowPrice(true);
  }
  function hidePriceHandler() {
    setShowPrice(false);
  }
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={showPriceHandler}
      onMouseLeave={hidePriceHandler}
    >
      <div
        className={`bg-softRed w-[2.188rem] rounded-md hover:opacity-80 md:w-[3.125rem] ${
          items.day === "wed" ? "bg-cyan" : ""
        }`}
        style={{ height: `${items.amount * 2.8}px` }}
      ></div>
      <p className="text-center font-dmSans text-mediumBrown text-xs pt-2">
        {items.day}
      </p>
      <p
        className={`absolute -top-9 rounded-md bg-darkBrown font-dmSans p-2 -left-1 text-white w-[2.813rem] text-center text-[0.63rem] md:w-[3.75rem] md:p-3 md:-top-11 ${
          showPrice ? "block" : "hidden"
        }`}
      >
        ${items.amount}
      </p>
    </div>
  );
}

export default BarChart;
