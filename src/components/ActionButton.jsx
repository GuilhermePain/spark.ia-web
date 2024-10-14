export default function ActionButton({
  text,
  className,
  onClick,
  disabled,
  onClick,
  width,
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      className={`${className} w-${width} bg-[#FA7807] text-white font-bold p-4 rounded-xl border-2 border-[#FA7807] hover:bg-[#FDAD0B] hover:border-[#FDAD0B] active:bg-transparent active:border-[#FA7807] active:text-[#FA7807] disabled:bg-slate-400 disabled:border-slate-400 disabled:active:text-white disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
}
