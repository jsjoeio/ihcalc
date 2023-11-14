import React, { useEffect, useState } from "react";

import { useStore } from "@nanostores/react"; // or '@nanostores/preact'
import { $numOfMonths } from "@utils/store";
import { CUSTOM_EVENT_CHANGE_MONTH_INPUT } from "@utils/constants";

export function MonthInput() {
  const numOfMonths = useStore($numOfMonths);
  const [touched, setTouched] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) {
      // User has touched the input, send analytics event
      // @ts-expect-error - this is for Beam analytics
      window.beam(CUSTOM_EVENT_CHANGE_TOTAL_MONEY_WANTED);
      setTouched(true);
    }

    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 0) {
      $numOfMonths.set(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mt-4 max-w-xl text-center">
        in{" "}
        <label className="font-bold text-center" htmlFor="num-of-months">
          {numOfMonths.toLocaleString()} months
        </label>
      </p>
      <input
        type="range"
        id="num-of-months"
        name="num-of-months"
        value={numOfMonths}
        onChange={handleInputChange}
        max={12}
      />
    </div>
  );
}
