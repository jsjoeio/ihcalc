import { useStore } from "@nanostores/react";
import { $offeringPrice } from "@utils/store";

export function OfferingPrice() {
  const offeringPrice = useStore($offeringPrice);

  const handleInputChange = (e) => {
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
