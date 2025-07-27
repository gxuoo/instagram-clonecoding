export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className = "",
}) {
  const baseStyle =
    "w-full mb-2 px-3 py-2.5 text-xs border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300";
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyle} ${className}`}
    />
  );
}
