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
} from "@utils/store";

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
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-center mb-12">
        How much do you want to make?
      </h1>
      <p className="text-lg mt-4 text-slate-600 max-w-xl text-center">
        I want to make{" "}
        <strong>
          $
          <span aria-label="Total Money Wanted">
            <TotalMoneyWanted />
          </span>
        </strong>{" "}
        in{" "}
        <strong>
          <span aria-label="Number of Months">
            <MonthInput />
          </span>{" "}
          months
        </strong>
        <br /> by selling a{" "}
        <strong>
          $
          <span aria-label="Price of offering">
            <OfferingPrice />
          </span>
          <span aria-label="Offering">
            {" "}
            <Offering />
          </span>
        </strong>
        .
      </p>
      <ActionButton onClick={() => setState("calculated")} />
    </div>
  );
}

function Strong({ text }: { text: string }) {
  return <strong>{text}</strong>;
}

function TextCalculated() {
  const totalMoney = useStore($totalMoneyWanted);
  const numOfMonths = useStore($numOfMonths);
  const selectedOffering = useStore($selectedOffering);
  const offeringPrice = useStore($offeringPrice);

  return (
    <div>
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter text-center mb-12">
        To make <Strong text={`$${totalMoney}`} /> in{" "}
        <Strong text={String(numOfMonths)} /> months by selling a{" "}
        <Strong text={`$${offeringPrice}`} /> <Strong text={selectedOffering} />
      </h1>
    </div>
  );
}

export function Calculator() {
  const [state, setState] = useState<State>("initial");

  if (state === "initial")
    return <InitialFormWithInputs state={state} setState={setState} />;

  if (state === "error") return <p>Oh no</p>;

  if (state === "calculated") return <TextCalculated />;

  return null;
}
