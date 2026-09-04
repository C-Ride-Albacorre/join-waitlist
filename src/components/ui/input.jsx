export function Input({ placeholder, ...props }) {
  return (
    <input
      type="text"
      {...props}
      placeholder={placeholder}
      className="h-14 w-full rounded-md border border-white/10 bg-white/4 px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 font-body transition [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    />
  );
}
