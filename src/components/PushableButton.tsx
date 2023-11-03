import "./pushable-button.css";
import toast from "react-hot-toast";

export const PushableButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="pushable">
      <span className="front">Share</span>
    </button>
  );
};
