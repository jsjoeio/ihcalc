import { useStore } from "@nanostores/react";
import { CUSTOM_EVENT_CHANGE_OFFERING_PRICE } from "@utils/constants";
import { $offeringPrice } from "@utils/store";
import { useState } from "react";

export function OfferingPrice() {
  const offeringPrice = useStore($offeringPrice);
  const [touched, setTouched] = useState(false);

  const handleInputChange = (e) => {
    if (!touched) {
      // User has touched the input, send analytics event
      // @ts-expect-error - this is for Beam analytics
      window.beam(CUSTOM_EVENT_CHANGE_OFFERING_PRICE);
      setTouched(true);
    }
    const inputValue = parseInt(e.target.value);

    // Check if the input value is a number greater than 1
    if (!isNaN(inputValue) && inputValue > 1) {
      $offeringPrice.set(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mt-4 max-w-xl text-center">
        by selling a{" "}
        <label className="font-bold text-center" htmlFor="offering-price">
          ${offeringPrice.toLocaleString()} product.
        </label>
      </p>
      <input
        type="range"
        id="offering-price"
        name="offering-price"
        value={offeringPrice}
        onChange={handleInputChange}
        step={5}
        max={1000}
      />
    </div>
  );
}
