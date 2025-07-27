export default function Button({ children, disabled, className = "" }) {
  const baseStyle =
    "w-full text-sm font-semibold text-white py-2 rounded-lg mt-1 mb-3";
  const enabledStyle = "bg-[#0095F6] hover:bg-blue-500";
  const disabledStyle = "bg-[#0095F6] cursor-not-allowed opacity-70";

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${baseStyle} ${
        disabled ? disabledStyle : enabledStyle
      } ${className}`}
    >
      {children}
    </button>
  );
}
