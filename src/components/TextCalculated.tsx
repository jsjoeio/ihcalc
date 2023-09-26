export type TextCalculatedProps = {
  state: "initial" | "calculated" | "error";
};
export function TextCalculated({ state }: TextCalculatedProps) {
  if (state === "initial") return null;
  if (state === "calculated") {
    return (
      <div>
        <p>wahoo</p>
      </div>
    );
  }

  if (state === "error") {
    return <p>somethingwent wrong </p>;
  }

  return null;
}
