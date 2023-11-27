import "./pushable-button.css";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { CUSTOM_EVENT_COPY_TO_CLIPBOARD } from "@utils/constants";

const MESSAGES = [
  "Copied to clipboard",
  "It's still in your clipboard...",
  "Having fun???",
  "Removed from your clipboard...",
];

type PushableButtonProps = {
  totalMoney: number;
  numOfMonths: number;
  offeringPrice: number;
};

export const PushableButton = ({
  totalMoney,
  numOfMonths,
  offeringPrice,
}: PushableButtonProps) => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Reset clickCount whenever totalMoney, numOfMonths, or offeringPrice changes
    setClickCount(0);
  }, [totalMoney, numOfMonths, offeringPrice]);

  const handleClick = async () => {
    try {
      // @ts-expect-error - this is for Beam analytics
      window.beam(CUSTOM_EVENT_COPY_TO_CLIPBOARD);
      setClickCount((prevCount) => (prevCount + 1) % MESSAGES.length);
      const message = MESSAGES[clickCount];
      if (clickCount === 3) {
        await navigator.clipboard.writeText("");
        toast.error(message);
      } else {
        const linkWithValues = `https://howmuchtomake.org/?v=${totalMoney}-${numOfMonths}-${offeringPrice}`;
        await navigator.clipboard.writeText(linkWithValues);
        toast.success(message);
      }
    } catch (error) {}
  };

  return (
    <button onClick={handleClick} className="pushable">
      <span className="front">Copy Custom Link</span>
    </button>
  );
};
