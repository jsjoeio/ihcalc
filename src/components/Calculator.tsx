import { useState } from "react";
import { ActionButton } from "./ActionButton";
import { TotalMoneyWanted } from "./TotalMoneyWanted";
import { MonthInput } from "./MonthInput";
import { Offering } from "./Offering";
import { OfferingPrice } from "./OfferingPrice";
import { useStore } from "@nanostores/react";
import {
  $numOfMonths,
  $offeringPrice,
  $selectedOffering,
  $totalMoneyWanted,
  getConversionRate,
  getMonthlyVisitors,
  getSalesPerMonth,
  getTotalSales,
} from "@utils/store";
import "./slider.css";

/*

I' thinking this is the app. and there are three states:
- initial
- calcuated 
- error 

And we have components for each

*/

type State = "initial" | "calculated" | "error";
type InitialFormWithInputsProps = {
  state: State;
  setState: (state: State) => void;
};

function InitialFormWithInputs({
  state,
  setState,
}: InitialFormWithInputsProps) {
  return (
    <div>
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-center mb-4">
        How much do you want to make?
      </h1>
      <TotalMoneyWanted />
      <MonthInput />
      <OfferingPrice />
      <ActionButton onClick={() => setState("calculated")} text="Show me how" />
    </div>
  );
}

type TextCalculatedProps = {
  reset: () => void;
};

function TextCalculated({ reset }: TextCalculatedProps) {
  const totalMoney = useStore($totalMoneyWanted).toLocaleString();
  const numOfMonths = useStore($numOfMonths).toLocaleString();
  const selectedOffering = useStore($selectedOffering);
  const offeringPrice = useStore($offeringPrice).toLocaleString();
  const totalSales = getTotalSales().toLocaleString();
  const salesPerMonth = getSalesPerMonth().toLocaleString();
  const conversionRate = getConversionRate() * 100;
  const monthlyVisitors = getMonthlyVisitors().toLocaleString();

  return (
    <div>
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter text-center mb-12">
        To make ${totalMoney} in {String(numOfMonths)} months by selling a $
        {offeringPrice} {selectedOffering}
      </h1>
      <div className="max-w-sm mx-auto text-center">
        <p className="mb-4">
          you need to make <strong>{totalSales} total sales</strong>, which is
          roughly <strong>{salesPerMonth} sales per month</strong>.
        </p>
        <p>
          Assuming a <strong>{conversionRate}% conversion rate</strong>, you
          need around <strong>{monthlyVisitors} visitors per month</strong>
        </p>
      </div>
      <ActionButton onClick={reset} text="Start over" />
    </div>
  );
}

export function Calculator() {
  const [state, setState] = useState<State>("initial");

  if (state === "initial")
    return <InitialFormWithInputs state={state} setState={setState} />;

  if (state === "error") return <p>Oh no</p>;

  if (state === "calculated")
    return <TextCalculated reset={() => setState("initial")} />;

  return null;
}
