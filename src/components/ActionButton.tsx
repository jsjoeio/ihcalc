type ActionButtonProps = {
  onClick: () => void;
};
export function ActionButton({ onClick }: ActionButtonProps) {
  return (
    <button
      className="mt-6 mx-auto block px-12 py-4 rounded-lg font-bold bg-black text-white"
      onClick={onClick}>
      Show me how
    </button>
  );
}
