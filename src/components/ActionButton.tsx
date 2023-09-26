type ActionButtonProps = {
  onClick: () => void;
  text: string;
};
export function ActionButton({ onClick, text }: ActionButtonProps) {
  return (
    <button
      className="mt-6 mx-auto block px-12 py-4 rounded-lg font-bold bg-black text-white"
      onClick={onClick}>
      {text}
    </button>
  );
}
