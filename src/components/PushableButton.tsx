import "./pushable-button.css";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { $numOfMonths, $offeringPrice, $totalMoneyWanted } from "@utils/store";

const MESSAGES = [
  "Copied to clipboard",
  "It's still in your clipboard...",
  "Having fun???",
  "Removed from your clipboard...",
];

export const PushableButton = () => {
  const totalMoney = useStore($totalMoneyWanted);
  const numOfMonths = useStore($numOfMonths);
  const offeringPrice = useStore($offeringPrice);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Reset clickCount whenever totalMoney, numOfMonths, or offeringPrice changes
    setClickCount(0);
  }, [totalMoney, numOfMonths, offeringPrice]);

  const handleClick = async () => {
    try {
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
      <span className="front">Share</span>
    </button>
  );
};
