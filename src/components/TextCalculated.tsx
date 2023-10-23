import { useStore } from "@nanostores/react";
import { $totalMoneyWanted } from "@utils/store";

export type TextCalculatedProps = {
  state: "initial" | "calculated" | "error";
};
export function TextCalculated({ state }: TextCalculatedProps) {
  const totalMoney = useStore($totalMoneyWanted);

  if (state === "initial") return null;
  if (state === "calculated") {
    return (
      <div>
        <p>wahoo</p>
        <p>{totalMoney}</p>
      </div>
    );
  }

  if (state === "error") {
    return <p>something went wrong </p>;
  }

  return null;
}
