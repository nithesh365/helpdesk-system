
export default function Input({ className, ...props }) {
  return (
    <input
      className={`bg-white text-black border-black border-[1px] rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
}