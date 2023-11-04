import { useStore } from "@nanostores/react";
import { CUSTOM_EVENT_CHANGE_TOTAL_MONEY_WANTED } from "@utils/constants";
import { $totalMoneyWanted } from "@utils/store";

export function TotalMoneyWanted() {
  const totalMoney = useStore($totalMoneyWanted);

  const handleInputChange = (e) => {
    // @ts-expect-error - this is for Beam analytics
    window.beam(CUSTOM_EVENT_CHANGE_TOTAL_MONEY_WANTED);
    const inputValue = parseInt(e.target.value.replace(/,/g, ""));

    // Check if the input value is a number greater than or equal to 0
    if (!isNaN(inputValue) && inputValue >= 0) {
      $totalMoneyWanted.set(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg mt-4 max-w-xl text-center">
        I want to make{" "}
        <label className="font-bold text-center" htmlFor="total-money-wanted">
          ${totalMoney.toLocaleString()}
        </label>
      </p>
      <input
        type="range"
        id="total-money-wanted"
        name="total-money-wanted"
        value={totalMoney}
        onChange={handleInputChange}
        min={0}
        step={5000}
        max={500000}
      />
    </div>
  );
}
