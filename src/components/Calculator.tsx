import { useState } from "react";
import { ActionButton } from "./ActionButton";
import { TextCalculated, TextCalculatedProps } from "./TextCalculated";

export function Calculator() {
  const [state, setState] = useState<TextCalculatedProps["state"]>("initial");

  return (
    <>
      <ActionButton onClick={() => setState("calculated")} />
      <TextCalculated state={state} />
    </>
  );
}
